import {
    cbor2escaped,
    dehexify,
    escaped2cbor,
    hexify
} from './'

const indent = 2
const srt_fmt = require('string-format')
const vkbeautify = require('vkbeautify')

const fmt = srt_fmt.create({
  escape: s => s.replace(/(\")/g, "\\\$1"),
  upper: s => s.toUpperCase(),
})

/* General Utils */
export const format = (msg, fmt, ind) => {
    ind = ind ? ind : 2
    let rtn_msg = ''
    try {
        switch (fmt) {
            case "cbor":
                rtn_msg = cbor2escaped(msg)
                break
            case "json":
                rtn_msg = vkbeautify.json(msg, ' '.repeat(ind))
                break
            case "xml":
                rtn_msg = vkbeautify.xml(msg, ' '.repeat(ind))
                break
            default:
                rtn_msg = "Error, cannot format " + fmt + " message"
        }
    } catch (e) {
        rtn_msg = "Error, cannot format: " + e.message
    }
    return rtn_msg
}

export const minify = (msg, fmt) => {
    let rtn_msg = ''
    try {
        switch (fmt) {
            case "cbor":
                rtn_msg = escaped2cbor(msg)
                break
            case "json":
                rtn_msg = vkbeautify.jsonmin(msg)
                break
            case "xml":
                rtn_msg = vkbeautify.xmlmin(msg)
                break
            default:
                rtn_msg = "Error, cannot minify " + fmt + " message"
        }
    } catch(e) {
        rtn_msg = "Error, cannot minify: " + e.message
    }
    return rtn_msg
}

/* Schema Utils */
export const FormatJADN = (jadn) => {
	let idn = ' '.repeat(indent)
	if ($.type(jadn) == 'string') {
	    jadn = JSON.parse(jadn)
	}

	let meta = fmt('{idn}\"meta\": {\n{obj}\n{idn}}', {idn: idn, obj: $.map(jadn ? jadn.meta : {}, function(val, key) {
		switch (typeof(val)){
			case 'object':
				let obj = val.map((val1, key1) => {
					if (typeof(val1) == 'object') {
						return fmt('{idn}[\"{v}\"]', {idn: idn.repeat(3), v: val1.join('\", \"')})
					} else {
						return fmt('{idn}\"{v}\"', {idn: idn.repeat(3), v: val1})
					}
				}).join(',\n')

				return fmt('{idn}\"{k}\": [\n{v}\n{idn}]', {idn: idn.repeat(2), k: key, v: obj})
				break;
			default:
			return fmt('{idn}\"{k}\": \"{v}\"', {idn: idn.repeat(2), k: key, v: val})
		}
	}).join(',\n')})

	let types = fmt('[{obj}\n{idn}]', {idn: idn, obj: $.map(jadn ? jadn.types : [], function(type) {
		let header = type.slice(0, -1).map((itm) => {
			switch (typeof(itm)) {
				case "object":
					return fmt('[{obj}]', {obj: itm.map((i) => { return fmt('\"{itm!escape}\"', {itm: i}) }).join(', ')})
				default:
					return fmt('\"{itm}\"', {itm: itm})
			}
		}).join(", ")

		let defs = type.slice(-1).map((def) => {
			switch (typeof(def)) {
				case "object":
					return def.map((itm) => {
						switch (typeof(itm)) {
							case "object":
								return fmt('{idn}{idn}{idn}[{obj}]', {idn: idn, obj: itm.map((itm1) => {
									switch (typeof(itm1)) {
										case "object":
											return fmt('[{obj}]', {obj: itm1.map((i) => {
												switch (typeof(i)) {
													case 'string':
														return fmt('\"{itm!escape}\"', {itm: i})
													default:
														return i
												}
											}).join(', ')})
										case "string":
											return fmt('\"{itm!escape}\"', {itm: itm1})
										default:
											return itm1
									}
								}).join(", ")})
							case "string":
								return fmt('\"{itm!escape}\"', {idn: idn, itm: itm})
							default:
								return itm
						}
					}).join(",\n")
				default:
					return fmt('\"{itm}\"', {itm: def})
			}
		}).join(",\n")
		if (defs.match(/^\s+\[/)) {
			defs = fmt('[\n{defs}\n{idn}{idn}]', {idn: idn, defs: defs})
		}

		return fmt('\n{idn}{idn}[{header}, {defs}]', {idn: idn, header: header, defs: defs})
	}).join(", ")})

	return fmt('{\n{meta},\n{idn}\"types\": {types}\n}', {idn: idn, meta: meta, types: types})
}

/* Message Utils */
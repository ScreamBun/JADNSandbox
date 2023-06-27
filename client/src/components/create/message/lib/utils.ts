/* eslint-disable import/prefer-default-export */
// Field Utils
import { $MINV } from 'components/create/consts';
import { hasProperty } from 'components/utils';
import { FieldArray, InfoConfig, TypeArray } from '../../schema/interface';
import { Buffer } from 'buffer';

export const isOptional = (def: TypeArray | FieldArray) => {
	switch (def.length) {
		case 5:
			return def[3].includes('[0');
		case 4:
			return def[2].includes('[0');
		default:
			console.log(`default optional - ${def[0]} - ${def[1]}`);
			return false;
	}
};

// TYPE OPTION VALIDATION
// optData validation for Array, ArrayOf, Map, MapOf, or Record
export const validateOptDataElem = (config: InfoConfig, optData: any, data: any[], formatCheck: boolean = false) => {
	let isFormatted: boolean = false;
	let m = [];

	//ARRAY
	if (formatCheck && data) {
		isFormatted = validateArrayFormat(data, optData.format);
		if (!isFormatted) {
			m.push('Format Error: Invalid ' + optData.format + ' value');
		}
	}

	//ARRAYOF
	if (hasProperty(optData, 'unique') && optData.unique || hasProperty(optData, 'set') && optData.set) {
		if (Array.from(new Set(Object.values(data))).length != Object.values(data).length) {
			m.push(`${optData.unique ? `Unique` : `Set`} Error: Must not contain duplicate values`);
		}
	}

	//check # of elements
	var minv = optData.minv || $MINV;
	var maxv = optData.maxv || config.$MaxElements;
	if (data.length < minv) {
		m.push('Minv Error: must include at least ' + minv + ' element(s)');
	}
	if (data.length > maxv) {
		m.push('Maxv Error: must not include more than ' + maxv + ' element(s)');
	}

	return m;
}
// optData validation for String
export const validateOptDataStr = (config: InfoConfig, optData: any, data: string) => {
	let m = [];

	var minv = optData.minv || $MINV;
	var maxv = optData.maxv || config.$MaxString;
	if (data.length < minv) {
		m.push('Minv Error: must be greater than ' + minv + ' characters');
	}
	if (data.length > maxv) {
		m.push('Maxv Error: must be less than ' + maxv + ' characters');
	}

	if (hasProperty(optData, 'pattern') && typeof data == 'string') {
		const regex = new RegExp(optData.pattern, "g");
		if (!regex.test(data)) {
			m.push('Pattern Error: must match regular expression specified by pattern: ' + optData.pattern);
		}
	}

	if (hasProperty(optData, 'format') && data) {
		const isFormatted = validateStringFormat(data, optData.format);
		if (!isFormatted) {
			m.push('Format Error: Invalid ' + optData.format + ' value');
		}
	}

	return m;
}
// optData validation for Number, Integer
export const validateOptDataNum = (optData: any, data: number) => {
	let m = [];

	if (hasProperty(optData, 'format') && data) {
		const isFormatted = validateNumericFormat(data, optData.format);
		if (!isFormatted) {
			m.push('Format Error: Invalid ' + optData.format + ' value');
		}
	}
	//INTEGER
	var minv = optData.minv || $MINV;
	var maxv = optData.maxv;
	if (minv && data < minv) {
		m.push('Minv Error: must be greater than ' + minv);
	}
	if (maxv && data > maxv) {
		m.push('Maxv Error: must be less than ' + maxv);
	}

	//NUMBER
	//TODO: check for minf/maxf defaults
	var minf = optData.minf;
	var maxf = optData.maxf;
	if (minf && data < minf) {
		m.push('Minf Error: must be greater than ' + minf);
	}
	if (maxf && data > maxf) {
		m.push('Maxf Error: must be less than ' + maxf);
	}

	return m;
}

// optData validation for Binary
export const validateOptDataBinary = (config: InfoConfig, optData: any, data: string) => {
	// JADN Binary - A sequence of octets. Length is the number of octets.
	const binaryType = optData.format ?? 'binary';

	let m: string[] = [];
	let length: number = 0;
	console.log(binaryType)
	if (data && optData.format) {
		const isFormatted = validateBinaryFormat(data, binaryType);
		if (!isFormatted) {
			m.push('Format Error: Invalid ' + binaryType + ' value');
			return m;
		}
	} else {
		if (!data.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.)*(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)) {
			m.push('Invalid Binary value');
			return m;
		}
		// Get length of binary value where length is sequence of octets
		const binArr = data.split('.');
		length = binArr.length;
	}

	// A Binary type, the minv and maxv type options constrain the number of octets (bytes) in the binary value.
	var minv = optData.minv || $MINV;
	var maxv = optData.maxv || config.$MaxBinary;

	if (length < minv) {
		m.push('Minv Error: must be greater than ' + minv + ' bytes');
	}
	if (length > maxv) {
		m.push('Maxv Error: must be less than ' + maxv + ' bytes');
	}

	return m;
}


//FORMAT TYPE OPTION VALIDATION: given [type of value/format] and [data], validate
//binary: eui, ipv4-addr, ipv6-addr
//TODO : if valid, return binary length of formatted data
export const validateBinaryFormat = (data: string, type: string) => {
	if (type == 'x' && data.match(/(0x)?[0-9A-F]+/)) { //hex encoding
		return Buffer.byteLength(data, 'hex');;
	}
	if (type == 'eui' && data.match(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})|([0-9a-fA-F]{4}\\.[0-9a-fA-F]{4}\\.[0-9a-fA-F]{4})$/)) { //MAC-addr
		return Buffer.byteLength(data, 'hex');
	}
	if ((type == 'ipv4' || type == 'ipv4-addr') && data.match(
		/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)) {
		// Get length of binary value where length is sequence of octets
		const binArr = data.split('.');
		return binArr.length;
	}
	if ((type == 'ipv6' || type == 'ipv6-addr') && data.match(
		/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/)) {
		return Buffer.byteLength(data, 'hex');
	}
	return false;
}

//array: ipv4-net, ipv6-net
export const validateArrayFormat = (data: any[], type: string) => {
	if (type == 'ipv4-net') {
		if (data[0].match(
			/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)) {
			if (data.length == 1) {
				return true;
			} else if (data.length == 2 && ((typeof parseInt(data[1]) == "number" && parseInt(data[1]) >= 0 && parseInt(data[1]) <= 128) || data[1] == '')) {
				return true;
			}
		}
	}
	if (type == 'ipv6-net') {
		if (data[0].match(
			/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/)) {
			if (data.length == 1) {
				return true;
			} else if (data.length == 2 && parseInt(data[1]) >= 0 && parseInt(data[1]) <= 128) {
				return true;
			}
		}
	}
	return false;
}

//integer: i8, i16, i32, u<n>
//number: f16, f32
export const validateNumericFormat = (data: any, type: string) => {
	if (type == 'i8') {
		//check 8 bit
		if (-128 < data && data < 127) {
			return true;
		}
	}
	if (type == 'i16') {
		//check 16 bit
		if (-32768 < data && data < 32767) {
			return true;
		}
	}
	if (type == 'i32') {
		//check 32 bit
		if (-2147483648 < data && data < 2147483647) {
			return true;
		}
	}
	if (type == 'u<n>') { //TODO
		const n = data.substring(1); // digit after u
		//check n bits
		if (0 < data && data < (2 ** (parseInt(n) - 1))) {
			return true;
		}
	}
	if (type == 'f16') {
		//check half precision point
		return true;
	}
	if (type == 'f32') {
		//check single precision point
		return true;
	}
	return false;
}
//string: JSON schema section 7.3
///https://json-schema.org/draft/2020-12/json-schema-validation.html#name-resource-identifiers
export const validateStringFormat = (data: string, type: string) => {
	if (type == 'email' && data.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/)) {
		return true;
	}
	if (type == 'idn-email' && data.match(/^\S+@\S+$/)) {
		return true;
	}
	if ((type == 'hostname' || type == 'idn-hostname') && data.match(/\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,255}\b/)) {
		return true;
	}
	if ((type == 'ipv4') && data.match(
		/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)) {
		return true;
	}
	if ((type == 'ipv6') && data.match(
		/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/)) {
		return true;
	}
	if (type == 'uri-reference' || type == 'iri-reference') {
		//TODO: if data is valid uri/ref
		//then check if vald iri/ref
		return true;
	}
	if (type == 'uri' || type == 'iri') {
		if (data.match(/\w+:(\/?\/?)[^\s]+/)) {
			if (type == 'iri') {
				if (data.match(/^<(.*)>$/)) {
					return true;
				}
			} else {
				return true;
			}
		}
	}

	if (type == 'uuid' &&
		data.match(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/)) {
		return true;
	}
	if (type == 'uri-template' &&
		data.match(/^(((ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*))?(\/?)(\{?)([a-zA-Z0-9\-\.\?\,\'\/\\\+\~\{\}\&%\$#_]*)?(\}?)(\/?)$/)) {
		return true;
	}
	if (type == 'json-pointer' || type == 'relative-json-pointer') {
		//TODO
		return true;
	}
	if (type == 'regex') { //check for valid pattern?
		return true;
	}
	return false;
}
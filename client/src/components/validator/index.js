import React, { Component } from 'react'
import { connect } from 'react-redux'
import DocumentMeta from 'react-document-meta'
import { toast } from 'react-toastify'

import {
    Redirect
} from 'react-router-dom'

import JSONPretty from 'react-json-pretty'

import { Button, ButtonGroup, Form, FormGroup, Label, Input, FormText, Tooltip } from 'reactstrap'

import {
    escaped2cbor,
    format,
    hexify,
    loadURL,
    minify,
    validURL
} from '../utils'

import JSONInput from '../utils/jadn-editor'
import locale from '../utils/jadn-editor/locale/en'

import * as ValidateActions from '../../actions/validate'
import * as UtilActions from '../../actions/util'

const vkbeautify = require('vkbeautify')
const str_fmt = require('string-format')


class Validator extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            val_tooltip: false,
            ver_tooltip: false,
			message: {
				message: '',
				json: {
				    placeholder: 'Submit a message for validation to see the json version of the message'
				},
				format: '',
				decode: '',
				selected: 'empty',
				file: false,
				url: false,
				url_str: ''
			},
			schema: {
				schema: {
				    placeholder: 'Paste JADN schema here'
				},
				selected: 'empty',
				decodeTypes: {
				    all: [],
				    exports: []
				},
				file: false,
				url: false,
				url_str: ''
			}
        }

        this.meta = {
            title: str_fmt('{base} | {page}', {base: this.props.siteTitle, page: 'Validator'}),
            canonical: str_fmt('{origin}{path}', {origin: window.location.origin, path: window.location.pathname})
        }

        this.schema_height = 17+'em'
		
		this.selectChange = this.selectChange.bind(this)
		this.fileChange = this.fileChange.bind(this)

		this.props.info()
    }

    shouldComponentUpdate(nextProps, nextState) {
        let props_update = this.props != nextProps
        let state_update = this.state != nextState
		
        return props_update || state_update
    }

    submitForm(e) {
        e.preventDefault()

        this.props.validateMessage(
            this.state.schema.schema,
            this.state.message.message,
            this.state.message.format,
            this.state.message.decode
        ).then(() => {
            let valid = this.props.validMessage
            toast(<p>{ valid.valid_msg }</p>, {type: toast.TYPE[valid.valid_bool ? 'INFO' : 'WARNING']})

            this.setState({
                message: {
                    ...this.state.message,
                    json: valid.message_json
                }
            })
            this.format('message-json', 2)
        })

        return false
    }
	
	selectChange(e) {
		let type = e.target.id.split('-')[0]
        let selected = e.target.value
		let rtn = false
		let update_arr = {
			selected: selected,
			file: selected == 'file',
			url: selected == 'url'
		}
		
		if (selected == 'empty' && type == 'message') {
		    update_arr.format = ''
			update_arr.decode = ''
		}

		this.setState((prevState) => {
            return {
                [type]: {
			        ...prevState[type],
		            ...update_arr
			    }
            }
		}, () => {
		    let selected = this.state[type].selected
		    let loaded = this.props['loaded'+type[0].toUpperCase()+type.slice(1)+'s']

		    if (['', 'empty', null, 'file', 'url'].indexOf(selected) == -1) {
		        let format = {}
		        if (type == 'message') format.format = selected.split('.')[1]

                if (Object.keys(loaded).indexOf(selected) == -1) {
                    this.props.loadFile(type+'s', selected).then(() => {
                        this.setState((prevState) => {
                            return {
                                [type]: {
                                    ...prevState[type],
                                    ...format,
                                    [type]: this.props['loaded'+type[0].toUpperCase()+type.slice(1)+'s'][selected]
                                }
                            }
                        }, () => {
                            if (type == 'schema') this.loadDecodeTypes()
                        })
                    })

                } else {
                    this.setState((prevState) => {
                        return {
                            [type]: {
                                ...this.state[type],
                                [type]: this.props['loaded'+type[0].toUpperCase()+type.slice(1)+'s'][selected]
                            }
                        }
                    }, () => {
                        if (type == 'schema') this.loadDecodeTypes()
                    })
                }
		    }
		})
	}

	fileChange(e) {
		let id = e.target.id.split('-')[0]
        let file = e.target.files[0]
	    let type = file.name.split('.')[1]
		let fileReader = new FileReader()

		fileReader.onload = e => {
			let data = atob(fileReader.result.split(',')[1])
			try {
				data = JSON.stringify(JSON.parse(data), null, 2)
            } catch(e) {
                switch (type) {
                    case 'cbor':
				        data = escaped2cbor(hexify(data))
				        break;
                }
            }

			if (id == "schema") {
			    try {
                    this.setState({
                        schema: {
                            ...this.state.schema,
                            schema: JSON.parse(data)
                        }
                    })
                    this.loadDecodeTypes()
                } catch (e) {
                    toast(<p>Schema cannot be loaded</p>, {type: toast.TYPE.WARNING})
                }
			} else if (id == 'message') {
			    this.setState({
			        message: {
			            ...this.state.message,
			            format: type == 'jadn' ? 'json' : type,
			            message: data
			        }
			    })
			}
    	}

    	fileReader.readAsDataURL(file)
	}

    format(t) {
        if (t == 'message' || t == 'message-json') {
            let message = t == 'message' ? this.state.message.message : this.state.message.json
            let fmt = t == 'message' ? this.state.message.format : 'json'
            let msg = format(message, fmt, 2)

            if (msg.startsWith('Error')) {
                toast(<p>{ str_fmt('{type} {err}', {type: t.charAt(0).toUpperCase() + t.slice(1), err: msg}) }</p>, {type: toast.TYPE.WARNING})
                return
            }

            this.setState({ message: {...this.state.message, [t == 'message' ? 'message' : 'json']: msg }})
        } else if (t == 'schema') {
            try {
                this.setState({ schema: {...this.state.schema, schema: this.state.schema.schema }})
            } catch (e) {
                let msg = t.charAt(0).toUpperCase() + t.slice(1) + " Invalid, cannot format: " + e.message
                toast(<p>{ msg }</p>, {type: toast.TYPE.WARNING})
            }
        }
    }

    minify(t) {
        if (t == 'message' || t == 'message-json') {
            let message = t == 'message' ? this.state.message.message : this.state.message.json
            let fmt = t == 'message' ? this.state.message.format : 'json'

            let msg = minify(message, fmt)
            if (msg.startsWith('Error')) {
                toast(<p>{ str_fmt('{type} {err}', {type: t.charAt(0).toUpperCase() + t.slice(1), err: msg}) }</p>, {type: toast.TYPE.WARNING})
                return
            }
            this.setState({ message: {...this.state.message, [t == 'message' ? 'message' : 'json']: msg }})
        } else if (t == 'schema') {
		    try {
                this.setState({ schema: {...this.state.schema, schema: this.state.schema.schema }})
            } catch (e) {
                let msg = t.charAt(0).toUpperCase() + t.slice(1) + " Invalid, cannot format: " + e.message
                toast(<p>{ msg }</p>, {type: toast.TYPE.WARNING})
            }
        }
    }

    verifySchema() {
        let schema = this.state.schema.schema
        if (typeof(this.state.schema.schema) == 'string') {
            try {
                schema = JSON.parse(schema)
            } catch (err) {
                toast(<p>{ err.message }</p>, {type: toast.TYPE.WARNING})
                return
            }
        }

        this.props.validateSchema(schema).then(() => {
            let valid = this.props.validSchema
            toast(<p>{ valid.valid_msg }</p>, {type: toast.TYPE[valid.valid_bool ? 'INFO' : 'WARNING']})
        })
    }

    loadURL(t) {
        let url = this.state[t].url_str

        if (!validURL(url)) {
            toast(<p>Invalid URL, cannot load from a non valid location</p>, {type: toast.TYPE.WARNING})
		    return
        }

        let file = url.substring(url.lastIndexOf("/") + 1)
        let fileExt = file.substring(file.lastIndexOf(".") + 1)

        if (['json', 'jadn'].indexOf(fileExt) == -1 && t == 'schema') {
		    toast(<p>This file cannot be loaded as a schema, only JADN/JSON files are valid</p>, {type: toast.TYPE.WARNING})
		    return
		}

        loadURL(url).then((data) => {
            this.setState({[t]: {...this.state[t], [t]: data.data, format: fileExt == 'jadn' ? 'json' : data.fileExt }})
            if (t == 'schema') {
                this.loadDecodeTypes()
            }
        }).catch((err) => {
            toast(<p>Invalid url, please check what you typed</p>, {type: toast.TYPE.WARNING})
        })
    }
	
	loadDecodeTypes() {
	    let decodeTypes = {
	        all: [],
	        exports: []
	    }
	    let msg_decode = ''

	    if (this.state.schema.schema.meta != undefined) {
	        if (this.state.schema.schema.meta.exports != undefined) {
                decodeTypes.exports = this.state.schema.schema.meta.exports
	        }
	    }

	    if (this.state.schema.schema.types != undefined) {
	        decodeTypes.all = this.state.schema.schema.types.map((def) => def[0])
	        decodeTypes.all = decodeTypes.all.filter(dt => decodeTypes.exports.indexOf(dt) === -1)
	        decodeTypes.all.sort()
	    }

        if (this.state.message.decode == "" || decodeTypes.all.indexOf(this.state.message.decode) == -1) {
            if (decodeTypes.exports.length >= 1) {
                msg_decode = decodeTypes.exports[0]
            } else if (decodeTypes.all.length >= 1) {
                msg_decode = decodeTypes.all[0]
            }
        }

	    this.setState({
	        message: {
	            ...this.state.message,
	            decode: msg_decode
	        },
	        schema: {
	            ...this.state.schema,
	            decodeTypes: decodeTypes
	        }
	    })
	}

    jadn() {
		// list of options - <option value="{{ opt }}">{{ opt }}</option>
        let schema_opts = this.props.schemas.map((s, i) => <option key={ i } value={ s }>{ s }</option>)
        return (
            <fieldset>
                <legend>JADN Schema</legend>
                <div className="form-row">
                    <div className="col-md-12 mb-3">
				        <div id="schema-card" className="tab-pane fade active show">
						    <div className="card">
							    <div className="card-header">
							        <ButtonGroup className="float-right">
										<Button outline color="secondary" onClick={ () => this.verifySchema() } id="ver_tooltip" >Verify</Button>
										<Tooltip placement="bottom" isOpen={ this.state.ver_tooltip } target="ver_tooltip" toggle={ () => this.setState({ ver_tooltip: !this.state.ver_tooltip }) }>
                                            Validate the schema is valid prior to validating the message
                                        </Tooltip>
									</ButtonGroup>

									<div className="col-sm-6 pl-0">
										<div className="form-group col-md-6 mb-0 pr-0 pl-1 d-inline-block">
											<select id="schema-list" name="schema-list" className="form-control" default="empty" onChange={ this.selectChange }>
												<option value="empty">Schema</option>
                                                <optgroup label="Testers">
						                            { schema_opts }
                                                </optgroup>
                                                <optgroup label="Custom">
						                            <option value="file">File...</option>
												    <option value="url">URL...</option>
                                                </optgroup>
											</select>
										</div>

										<div id="schema-file-group" className={ "form-group col-md-6 px-1" + (this.state.schema.file ? ' d-inline-block' : ' d-none') } >
											<input type="file" className="btn btn-light form-control-file" id="schema-file" name="schema-file" accept=".jadn" onChange={ this.fileChange } />
										</div>

										<div id="schema-url-group" className={ "form-group col-md-6 px-1" + (this.state.schema.url ? ' d-inline-block' : ' d-none') }>
											<div className="input-group">
												<div className="input-group-prepend">
													<Button color="info" onClick={ () => this.loadURL('schema') }>Load URL</Button>
												</div>
												<input type="text" className="form-control" default='' onChange={ (e) => this.setState({ schema: {...this.state.schema, url_str: e.target.value }}) } />
											</div>
										</div>
									</div>
								</div>

                                <div className="form-control border card-body p-0" style={{height: this.schema_height}}>
                                    <JSONInput
                                        id='jadn_schema'
                                        placeholder={ this.state.schema.schema }
                                        onChange={ (val) => {
                                            if (val.jsObject) {
                                                this.setState({ schema: {...this.state.schema, schema: val.jsObject }})
                                            }
                                        }}
                                        theme='light_mitsuketa_tribute'
                                        locale={ locale }
                                        reset={ false }
                                        height='100%'
                                        width='100%'
                                    />
                                </div>
							</div>
						</div>
					</div>
                </div>
            </fieldset>
        )
    }

    message() {
		// list of options - <option value="{{ opt.name }}" decode="{{ opt.type }}">{{ opt.name }}</option>
        let msg_opts = Object.entries(this.props.messages).map(([n, t], i) => <option key={ i } value={ n } decode={ t } >{ n }</option>)

        let decodeExports = this.state.schema.decodeTypes.exports.map((dt, i) => <option key={ i } value={ dt } >{ dt }</option>)
        let decodeAll = this.state.schema.decodeTypes.all.map((dt, i) => <option key={ i } value={ dt } >{ dt }</option>)

        if (typeof(this.state.message.message) != 'string') {
            setTimeout(() => this.format('message'), 5)
        }

        return (
            <fieldset>
                <legend>Message</legend>
                <div className="form-row">
                    <div className="col-md-12 mb-3">
						<ul className={"nav nav-tabs" + (this.state.message.json.placeholder ? ' d-none' : '') }>
							<li className="nav-item">
								<a className="nav-link active show" data-toggle="tab" href="#message-card">Original</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#json-card">JSON</a>
							</li>
						</ul>

						<div className="tab-content">
							<div id="message-card" className="tab-pane fade active show">
								<div className="card">
									<div className="card-header">
									    <ButtonGroup className="float-right">
											<Button outline color="secondary" onClick={ () => this.format('message') }>Format</Button>
											<Button outline color="secondary" onClick={ () => this.minify('message') }>Minify</Button>
										</ButtonGroup>

										<div className="col-sm-6 pl-0">
											<div className="form-group col-md-6 mb-0 pr-0 pl-1 d-inline-block">
												<select id="message-list" name="message-list" className="form-control" default="empty" onChange={ this.selectChange }>
												    <option value="empty">Message</option>
                                                    <optgroup label="Testers">
						                                { msg_opts }
                                                    </optgroup>
                                                    <optgroup label="Custom">
						                                <option value="file">File...</option>
													    <option value="url">URL...</option>
                                                    </optgroup>
												</select>
											</div>

											<div id="message-file-group" className={ "form-group col-md-6 px-1" + (this.state.message.file ? ' d-inline-block' : ' d-none') }>
												<input type="file" className="btn btn-light form-control-file" id="message-file" name="message-file" accept=".json,.jadn,.xml,.cbor" onChange={ this.fileChange } />
											</div>

											<div id="message-url-group" className={ "form-group col-md-6 px-1" + (this.state.message.url ? ' d-inline-block' : ' d-none') }>
												<div className="input-group">
													<div className="input-group-prepend">
														<Button color="info" onClick={ () => this.loadURL('message') }>Load URL</Button>
													</div>
													<input type="text" className="form-control" default='' onChange={ (e) => this.setState({ message: {...this.state.message, url_str: e.target.value }}) } />
												</div>
											</div>
										</div>
									</div>

                                    <div className="form-control border card-body p-0" style={{height: this.schema_height}}>
                                        <textarea
                                            placeholder="Paste message to be validated here"
                                            style={{
                                                resize: 'none',
                                                outline: 'none',
                                                width: 100+'%',
                                                padding: 10+'px',
                                                border: 'none',
                                                height: 100+'%',
                                            }}
                                            required=""
                                            value={ this.state.message.message }
                                            onChange={ (e) => this.setState({ message: {...this.state.message, message: e.target.value }}) }
                                        />
                                    </div>
                                    <div className="card-footer">
                                        <div className="float-left form-group col-md-3 col-sm-6 pr-1 pl-1">
                                            <label className="control-label" htmlFor="message-format">Message Format</label>
                                            <select className="form-control" id="message-format" name="message-format" required="" value={ this.state.message.format } onChange={ (e) => this.setState({ message: {...this.state.message, format: e.target.value }}) } >
                                                <option value="">Message Format</option>
                                                <option value="json">json</option>
                                                <option value="cbor">cbor</option>
                                                <option value="xml">xml</option>
                                            </select>
                                        </div>

                                        <div className="float-left form-group col-md-3 col-sm-6 pr-1 pl-1">
                                            <label className="control-label" htmlFor="message-decode">Message Type</label>
                                            <select className="form-control" id="message-decode" name="message-decode" required="" value={ this.state.message.decode } onChange={ (e) => this.setState({ message: {...this.state.message, decode: e.target.value }}) }>
                                                <optgroup label="Exports">
                                                    { decodeExports }
                                                </optgroup>
                                                <optgroup label="All">
                                                    { decodeAll }
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
								</div>
							</div>

							<div id="json-card" className="tab-pane fade">
								<div className="card">
									<div className="card-header">
										<ButtonGroup className="float-right">
											<Button outline color="secondary" onClick={ () => this.format('message-json', 2) }>Verbose</Button>
											<Button outline color="secondary" onClick={ () => this.minify('message-json') }>Minify</Button>
										</ButtonGroup>
									</div>

                                    <div className="form-control border card-body p-0" style={{height: this.schema_height}}>
									    <textarea
                                            placeholder={ JSON.stringify(this.state.message.json) }
                                            style={{
                                                resize: 'none',
                                                outline: 'none',
                                                width: 100+'%',
                                                padding: 10+'px',
                                                border: 'none',
                                                height: 100+'%',
                                            }}
                                            id="message-json"
                                            rows="10"
                                            value={ this.state.message.json }
                                            readOnly
									    />
                                    </div>
								</div>
							</div>
						</div>
					</div>
                </div>
            </fieldset>
        )
    }

    render() {
        return (
            <DocumentMeta { ...this.meta } extend >
                <div className='row mx-auto'>
                    <Form className="mx-auto col-12 position-relative" onSubmit={ this.submitForm.bind(this) }>
                        <div className="form-group position-absolute" style={{ right: 1.25+'em', zIndex: 100 }}>
                            <Button outline color="primary" id="val_tooltip">Validate</Button>
                            <Tooltip placement="bottom" isOpen={ this.state.val_tooltip } target="val_tooltip" toggle={ () => this.setState({ val_tooltip: !this.state.val_tooltip }) }>
                                Validate the message against the given schema
                            </Tooltip>
                            <Button outline color="danger" type="reset">Reset</Button>
                        </div>

                        { this.jadn() }

                        { this.message() }
                    </Form>
                </div>
            </DocumentMeta>
        )
    }
}

function mapStateToProps(state) {
    return {
		messages: state.Validate.messages,
		loadedMessages: state.Util.loaded.messages || {},
		validMessage: state.Validate.valid.message || {},

		schemas: state.Validate.schemas,
		loadedSchemas: state.Util.loaded.schemas || {},
		validSchema: state.Validate.valid.schema || {},

		siteTitle: state.Util.site_title
    }
}


function mapDispatchToProps(dispatch) {
    return {
		info: () => dispatch(ValidateActions.info()),
		loadFile: (t, f) => dispatch(UtilActions.load(t, f)),

        validateSchema: (s) => dispatch(ValidateActions.validateSchema(s)),
        validateMessage: (s, d, t, f) => dispatch(ValidateActions.validateMessage(s, d, t, f))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Validator)

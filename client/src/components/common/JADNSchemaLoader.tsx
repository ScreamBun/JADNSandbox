import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { getAllSchemas } from "../../reducers/util";
import { info, loadFile, setSchema } from "../../actions/util";
import { validateSchema } from "../../actions/validate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sbToastError, sbToastSuccess } from "./SBToast";
import SBCopyToClipboard from "./SBCopyToClipboard";
import { format } from "actions/format";
import SBEditor from "./SBEditor";
import { LANG_JSON } from "components/utils/constants";


const JADNSchemaLoader = (props: any) => {
    const dispatch = useDispatch();

    const { selectedFile, setSelectedFile, loadedSchema, setLoadedSchema, decodeMsg, setDecodeMsg, setDecodeSchemaTypes } = props;
    const [isValidJADN, setIsValidJADN] = useState(false);
    const schemaOpts = useSelector(getAllSchemas);

    useEffect(() => {
        dispatch(info());
    }, [dispatch])

    const onFileSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFile(e.target.value);
        if (e.target.value == "" || e.target.value == "file") {
            setLoadedSchema('');
            setIsValidJADN(false);
        } else {
            try {
                dispatch(loadFile('schemas', e.target.value))
                    .then((loadFileVal) => {

                        try {
                            let schemaObj = loadFileVal.payload.data;
                            let schemaStr = JSON.stringify(schemaObj);
                            validateJADN(schemaStr);
                            dispatch(format(schemaStr))
                                .then(formatVal => {
                                    setLoadedSchema(formatVal.payload.schema);
                                })
                            dispatch(setSchema(schemaObj))

                            if (setDecodeSchemaTypes && setDecodeMsg) {
                                loadDecodeTypes(schemaObj);
                            }
                        } catch (err) {
                            if (err instanceof Error) {
                                sbToastError(err.message);
                                return;
                            }
                        }
                    })
                    .catch((loadFileErr) => {
                        setSelectedFile('');
                        setLoadedSchema(JSON.stringify(loadFileErr.payload.data));
                    })
            } catch (err) {
                setLoadedSchema(null);
                setIsValidJADN(false);
            }
        }
    };

    const loadDecodeTypes = (schemaObj: any) => {
        let decodeTypes = {
            all: [],
            exports: []
        };
        let msgDecode = '';

        if (schemaObj.info !== undefined) {
            if (schemaObj.info.exports !== undefined) {
                decodeTypes.exports = schemaObj.info.exports;
            }
        }
        if (schemaObj.types !== undefined) {
            decodeTypes.all = schemaObj.types.map((def: any[]) => def[0]);
            decodeTypes.all = decodeTypes.all.filter(dt => !decodeTypes.exports.includes(dt));
            decodeTypes.all.sort();
        }
        if (decodeMsg === '' || !decodeTypes.all.includes(decodeMsg)) {
            if (decodeTypes.exports.length >= 1) {
                msgDecode = decodeTypes.exports[0];
            } else if (decodeTypes.all.length >= 1) {
                msgDecode = decodeTypes.all[0];
            }
        }
        setDecodeSchemaTypes(decodeTypes);
        setDecodeMsg(msgDecode);
    }

    const formatJSON = (jsonToFormat: string) => {
        if (!jsonToFormat) {
            sbToastError(`Nothing to format`)
            return;
        }

        jsonToFormat = jsonToFormat.trim();
        dispatch(format(jsonToFormat))
            .then(formatVal => {
                if (formatVal.error) {
                    sbToastError(`Unable to format: ${formatVal.payload.response.message}`)
                    return;
                }
                setLoadedSchema(formatVal.payload.schema);
                sbToastSuccess(`Data Formatted`);

            })
            .catch(formatFail => {
                sbToastError(`Unable to format: ${formatFail}`)
                return;
            })
    }

    const validateJSON = (jsonToValidate: any, onErrorReturnOrig?: boolean, showErrorPopup?: boolean) => {
        let jsonObj = null;

        if (!jsonToValidate) {
            setIsValidJADN(false);
            sbToastError(`No data found`)
            return jsonObj;
        }

        try {
            jsonObj = JSON.parse(jsonToValidate);
        } catch (err: any) {
            setIsValidJADN(false);
            if (showErrorPopup) {
                sbToastError(`Invalid Format: ${err.message}`)
            }
        }

        if (onErrorReturnOrig && !jsonObj) {
            jsonObj = jsonToValidate
        }

        return jsonObj;
    }

    const validateJADN = (jsonToValidate: any) => {
        setIsValidJADN(false);
        let jsonObj = validateJSON(jsonToValidate);
        if (!jsonObj) {
            sbToastError(`Invalid JSON. Cannot validate JADN`);
            return;
        }

        try {
            dispatch(validateSchema(jsonObj))
                .then((validateSchemaVal: any) => {
                    if (validateSchemaVal.payload.valid_bool) {
                        setIsValidJADN(true);
                        dispatch(setSchema(jsonObj))
                        sbToastSuccess(validateSchemaVal.payload.valid_msg);
                    } else {
                        sbToastError(validateSchemaVal.payload.valid_msg);
                    }
                })
                .catch((validateSchemaErr) => {
                    sbToastError(validateSchemaErr.payload.valid_msg)
                })
        } catch (err) {
            if (err instanceof Error) {
                sbToastError(err.message)
            }
        }
    }

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = (ev: ProgressEvent<FileReader>) => {
                if (ev.target) {
                    let dataStr = ev.target.result;
                    try {
                        dispatch(setSchema(dataStr));
                        setLoadedSchema(dataStr);
                        validateJADN(dataStr);
                        if (setDecodeSchemaTypes && setDecodeMsg) {
                            loadDecodeTypes(JSON.parse(dataStr));
                        }
                    } catch (err) {
                        sbToastError(`File cannot be loaded`)
                    }
                }
            };
            fileReader.readAsText(file);
        }
    }

    const onFormatClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
        formatJSON(loadedSchema);
    }

    const sbEditorOnChange = () => {
        setIsValidJADN(false);

        if (setDecodeSchemaTypes && setDecodeMsg) {
            loadDecodeTypes(loadedSchema);
        }
    }    

    const onValidateJADNClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
        validateJADN(loadedSchema);
    }

    return (
        <div className="card">
            <div className="card-header p-2">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <select id="schema-list" name="schema-list" className="form-control form-control-sm" value={selectedFile} onChange={onFileSelect}>
                            <option value="">Select a Schema...</option>
                            <optgroup label="Testers">
                                {schemaOpts.map((s: any) => <option key={s} value={s} >{s}</option>)}
                            </optgroup>
                            <optgroup label="Custom">
                                <option value="file">File...</option>
                            </optgroup>
                        </select>
                        <Input type="file" id="schema-file" name="schema-file" className={`form-control form-control-sm ${selectedFile == 'file' ? '' : ' d-none'}`} accept=".jadn" onChange={onFileChange} />
                    </div>
                    <div className="col">
                        <SBCopyToClipboard buttonId='copySchema' data={loadedSchema} customClass='float-right' />
                        <Button id='validateJADNButton' className="float-right btn-sm mr-1" color="info" title="JADN schema must be valid" onClick={onValidateJADNClick}>
                            <span className="m-1">Validate JADN</span>
                            {isValidJADN ? (
                                <span className="badge badge-pill badge-success">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>) : (
                                <span className="badge badge-pill badge-danger">
                                    <FontAwesomeIcon icon={faXmark} />
                                </span>)
                            }
                        </Button>
                        <Button id='formatButton' className="float-right btn-sm mr-1" color="info" onClick={onFormatClick}
                            title='Attempts to Parse and Format.'>
                            <span className="m-1">Format JADN</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="card-body p-0">
                <SBEditor data={loadedSchema} setData={setLoadedSchema} convertTo={LANG_JSON}></SBEditor>                
            </div>          
        </div>
    )
}
export default JADNSchemaLoader;

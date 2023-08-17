import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { getAllSchemas } from "../../reducers/util";
import { info, loadFile, setSchema } from "../../actions/util";
import { validateSchema } from "../../actions/validate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dismissAllToast, sbToastError, sbToastSuccess } from "./SBToast";
import SBCopyToClipboard from "./SBCopyToClipboard";
import SBEditor from "./SBEditor";
import { LANG_JSON } from "components/utils/constants";
import SBFileUploader from "./SBFileUploader";
import SBSaveFile from "./SBSaveFile";
import SBSelect, { Option } from "./SBSelect";
import SBSpinner from "./SBSpinner";
import { format } from "actions/format";

const JADNSchemaLoader = (props: any) => {
    const dispatch = useDispatch();

    const { selectedFile, setSelectedFile, setLoadedSchema, decodeMsg, setDecodeMsg, setDecodeSchemaTypes } = props;
    const [isValidJADN, setIsValidJADN] = useState(false);
    const [isValidating, setIsValidating] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const schemaOpts = useSelector(getAllSchemas);
    const [currSchema, setCurrSchema] = useState(''); //setLoadedSchema if JADN is valid
    const [fileName, setFileName] = useState('');
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        dispatch(info());
    }, [dispatch])

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
        setDecodeMsg({ value: msgDecode, label: msgDecode });
    }

    const onFormatClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleFormatJADN(currSchema);
    }

    const handleFormatJADN = (schemaStr: string) => {
        dispatch(format(schemaStr))
            .then((rsp: { payload: { schema: any; }; }) => {
                setCurrSchema(rsp.payload.schema);
            })
            .catch((_err: any) => {
                sbToastError('Failed to format: Invalid JSON')
            })
    }

    const onValidateJADNClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
        validateJADN(currSchema);
    }

    const validateJADN = (jsonToValidate: any) => {
        setIsValidJADN(false);
        setLoadedSchema(null);
        setIsValidating(true);
        let jsonObj = validateJSON(jsonToValidate);
        if (!jsonObj) {
            setIsValidating(false);
            sbToastError(`Invalid JSON. Cannot validate JADN`);
            return false;
        }

        try {
            dispatch(validateSchema(jsonObj))
                .then((validateSchemaVal: any) => {
                    if (validateSchemaVal.payload.valid_bool == true) {
                        setIsValidJADN(true);
                        setLoadedSchema(jsonObj);
                        setIsValidating(false);
                        sbToastSuccess(validateSchemaVal.payload.valid_msg);
                        return true;
                    } else {
                        setIsValidating(false);
                        sbToastError(validateSchemaVal.payload.valid_msg);
                        return false;
                    }
                })
                .catch((validateSchemaErr) => {
                    setIsValidating(false);
                    sbToastError(validateSchemaErr.payload.valid_msg)
                    return false;
                })
        } catch (err) {
            if (err instanceof Error) {
                setIsValidating(false);
                sbToastError(err.message)
                return false;
            }
        }
        return false;
    }

    const validateJSON = (jsonToValidate: any, onErrorReturnOrig?: boolean, showErrorPopup?: boolean) => {
        let jsonObj = null;

        if (!jsonToValidate) {
            sbToastError(`No data found`)
            return jsonObj;
        }

        try {
            jsonObj = JSON.parse(jsonToValidate);
        } catch (err: any) {
            if (showErrorPopup) {
                sbToastError(`Invalid Format: ${err.message}`)
            }
        }

        if (onErrorReturnOrig && !jsonObj) {
            jsonObj = jsonToValidate
        }

        return jsonObj;
    }

    const sbEditorOnChange = (data: string) => {
        dispatch(setSchema(data));
        setIsValidJADN(false);
        setLoadedSchema(null);
        setCurrSchema(data);
        try {
            if (setDecodeSchemaTypes && setDecodeMsg) {
                loadDecodeTypes(JSON.parse(data));
            }
        } catch {
            return;
        }
    }

    const onFileSelect = (e: Option) => {
        setIsValidJADN(false);
        setLoadedSchema(null);
        setCurrSchema('');
        setSelectedFile(e);
        if (e == null) {
            return;
        } else if (e.value == "file") {
            ref.current?.click();
        } else {
            setFileName(e.label.split('.')[0]);
            setIsLoading(true);

            dispatch(loadFile('schemas', e.value))
                .then((loadFileVal) => {
                    if (loadFileVal.error) {
                        setIsLoading(false);
                        sbToastError(loadFileVal.payload.response);
                        return;
                    }
                    setIsLoading(false);
                    let schemaObj = loadFileVal.payload.data;
                    let schemaStr = JSON.stringify(schemaObj);
                    validateJADN(schemaStr);
                    handleFormatJADN(schemaStr);
                    dispatch(setSchema(schemaObj));

                    if (setDecodeSchemaTypes && setDecodeMsg) {
                        loadDecodeTypes(schemaObj);
                    }
                })
                .catch((loadFileErr) => {
                    setIsLoading(false);
                    sbToastError(loadFileErr.payload.data);
                })
        }
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        dismissAllToast();
        setIsValidJADN(false);
        setLoadedSchema(null);
        setCurrSchema('');
        if (e.target.files && e.target.files.length != 0) {
            setIsLoading(true);
            const file = e.target.files[0];
            setSelectedFile({ 'value': file.name, 'label': file.name });
            setFileName(file.name.split('.')[0]);
            const fileReader = new FileReader();
            fileReader.onload = (ev: ProgressEvent<FileReader>) => {
                if (ev.target) {
                    let dataStr = ev.target.result;
                    try {
                        setIsLoading(false);
                        dispatch(setSchema(JSON.parse(dataStr)));
                        validateJADN(dataStr);
                        setCurrSchema(dataStr);
                        if (setDecodeSchemaTypes && setDecodeMsg) {
                            loadDecodeTypes(JSON.parse(dataStr));
                        }
                    } catch (err) {
                        setIsLoading(false);
                        sbToastError(`File cannot be loaded: Invalid JSON`);
                    }
                }
            };
            fileReader.readAsText(file);
        }
    }

    const onCancelFileUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dismissAllToast();
        setIsLoading(false);
        setIsValidating(false);
        setIsValidJADN(false);
        setLoadedSchema(null);
        setCurrSchema('');
        setSelectedFile(null);
        setFileName('');
        if (ref.current) {
            ref.current.value = '';
        }
    }

    return (
        <div className="card">
            <div className="card-header p-2">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <div className={`${selectedFile?.value == 'file' ? ' d-none' : ''}`}>
                            <div className="input-group">
                                <SBSelect id={"schema-list"} data={schemaOpts} onChange={onFileSelect}
                                    placeholder={'Select a schema...'}
                                    loc={'schemas'}
                                    value={selectedFile}
                                    isGrouped isFileUploader />
                                <div className="input-group-btn ml-1">
                                    <SBSaveFile buttonId="saveSchema" toolTip={'Save Schema'} data={currSchema} loc={'schemas'} customClass={"float-right mr-1"} filename={fileName} setDropdown={setSelectedFile} />
                                </div>
                            </div>
                        </div>
                        <div className={`${selectedFile?.value == 'file' ? '' : ' d-none'}`} style={{ display: 'inline' }}>
                            <SBFileUploader ref={ref} id={"schema-file"} accept={".jadn"} onCancel={onCancelFileUpload} onChange={onFileChange} />
                        </div>
                    </div>
                    <div className="col">
                        <SBCopyToClipboard buttonId='copySchema' data={currSchema} customClass='float-right mr-1' />
                        {isValidating ? <SBSpinner action={"Validating"} color={"primary"} /> : <Button id='validateJADNButton' className="float-right btn-sm mr-1" color="primary" title={isValidJADN ? "JADN schema is valid" : "JADN must be valid. Click to validate JADN"} onClick={onValidateJADNClick}>
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
                        }
                        <Button id='formatButton' className="float-right btn-sm mr-1" color="primary" onClick={onFormatClick}
                            title='Attempts to Parse and Format.'>
                            <span className="m-1">Format JADN</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="card-body p-0">
                {isLoading ? <SBSpinner action={'Loading'} isDiv /> :
                    <SBEditor data={currSchema} onChange={sbEditorOnChange} convertTo={LANG_JSON}></SBEditor>}
            </div>
        </div>
    )
}
export default JADNSchemaLoader;

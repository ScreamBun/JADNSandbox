import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllSchemas } from "../../reducers/util";
import { getSchemaConversions } from "reducers/convert";
import { info, setSchema } from "../../actions/util";
import { validateSchema } from "actions/validate";
import { dismissAllToast, sbToastError, sbToastSuccess } from "./SBToast";
import SBCopyToClipboard from "./SBCopyToClipboard";
import SBSelect, { Option } from "./SBSelect";
import SBSpinner from "./SBSpinner";
import SBFormatBtn from "./SBFormatBtn";
import SBEditor from "./SBEditor";
import SBSchemaLoader from "./SBSchemaLoader";


const JADNSchemaLoader = (props: any) => {
    const dispatch = useDispatch();

    const { selectedFile, setSelectedFile, loadedSchema, setLoadedSchema, decodeMsg, setDecodeMsg, setDecodeSchemaTypes, acceptFormat, schemaFormat, setSchemaFormat } = props;
    const [isValidJADN, setIsValidJADN] = useState(false);
    const [isValidating, setIsValidating] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState({
        name: '',
        ext: 'jadn'
    });
    const schemaOpts = useSelector(getAllSchemas);
    const validSchemaFormatOpt = useSelector(getSchemaConversions);
    const ref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (fileName.ext) {
            setSchemaFormat({ value: fileName.ext, label: fileName.ext })
        }
    }, [fileName])

    useEffect(() => {
        if (!loadedSchema) {
            setIsValidJADN(false);
            setSelectedFile('');
            setSchemaFormat(null);
        }

    }, [loadedSchema])

    useEffect(() => {
        dispatch(info());
    }, [dispatch])

    const loadDecodeTypes = (schemaObj: any) => {
        let decodeTypes: { all: any[], exports: any[] } = {
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

    const onFormatClick = (formattedSchema: object) => {
        if (formattedSchema) {
            setLoadedSchema(formattedSchema);
        }
    }

    const onValidateJADNClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let schemaStr = loadedSchema;
        if (typeof loadedSchema != 'string') {
            schemaStr = JSON.stringify(loadedSchema);
        }

        const result = handleValidation('jadn', schemaStr);
        if (result != false) {
            sbToastSuccess(result);
        }
    }

    const onValidateJSONClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        let schemaStr = loadedSchema;
        if (typeof loadedSchema != 'string') {
            schemaStr = JSON.stringify(loadedSchema);
        }

        const result = handleValidation('json', schemaStr);
        if (result != false) {
            sbToastSuccess('Valid JSON');
        }
    }

    const handleValidation = (type: 'jadn' | 'json' = 'jadn', schemaStr: string) => {
        let result;
        if (type == 'jadn') {
            result = validateJADN(schemaStr)
        } else {
            result = validateJSON(schemaStr)
        }

        const resultBool = result != false ? true : false;
        setIsValidJADN(resultBool);
        setIsValidating(false);
        return result;
    }


    const validateJADN = (jsonToValidate: any) => {
        dismissAllToast();
        setIsValidJADN(false);
        setIsValidating(true);
        let jsonObj = validateJSON(jsonToValidate);
        if (jsonObj == false) {
            sbToastError(`Invalid JSON. Cannot validate JADN`);
            return false;
        }

        dispatch(validateSchema(jsonObj))
            .then((validateSchemaVal: any) => {
                if (validateSchemaVal.payload.valid_bool == true) {
                    dispatch(setSchema(jsonObj));
                    return (validateSchemaVal.payload.valid_msg);
                } else {
                    sbToastError(validateSchemaVal.payload.valid_msg);
                    return false;
                }
            })
            .catch((validateSchemaErr) => {
                sbToastError(validateSchemaErr.payload.valid_msg)
                return false;
            })
    }

    const validateJSON = (jsonToValidate: any) => {
        let jsonObj;

        if (!jsonToValidate) {
            sbToastError(`No data found`);
            return false;
        }

        try {
            jsonObj = JSON.parse(jsonToValidate);
        } catch (err: any) {
            sbToastError(`Invalid Format: ${err.message}`);
            return false;
        }

        dispatch(setSchema(jsonObj));
        return jsonObj;
    }

    const sbEditorOnChange = (data: string) => {
        setIsValidJADN(false);
        setLoadedSchema(data);
        dispatch(setSchema(null));
        try {
            if (setDecodeSchemaTypes && setDecodeMsg) {
                loadDecodeTypes(JSON.parse(data));
            }
        } catch {
            return;
        }
    }

    const onFileChange = (schemaStr: any) => {
        setIsLoading(false);
        if (schemaStr) {
            handleValidation(fileName.ext, schemaStr);
        }
        const schemaObj = JSON.parse(schemaStr);
        setLoadedSchema(schemaObj);
        if (setDecodeSchemaTypes && setDecodeMsg) {
            loadDecodeTypes(schemaObj);
        }
    };

    const onCancelFileUpload = (e: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        dismissAllToast();
        setIsLoading(false);
        setIsValidating(false);
        setIsValidJADN(false);
        setLoadedSchema('');
    }

    return (
        <div className="card">
            <div className="card-header p-2">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <SBSchemaLoader
                            schemaOpts={schemaOpts}
                            selectedSchemaOpt={selectedFile}
                            loadedSchema={loadedSchema}
                            fileName={fileName}
                            setFileName={setFileName}
                            schemaFormat={schemaFormat?.value}
                            setSelectedFile={setSelectedFile}
                            acceptFormat={acceptFormat}
                            onCancelFileUpload={onCancelFileUpload}
                            onFileChange={onFileChange}
                            ref={ref}
                        />
                    </div>
                    <div className="col">
                        {acceptFormat &&
                            <SBSelect id={"schema-format-list"}
                                data={validSchemaFormatOpt}
                                onChange={(e: Option) => { setSchemaFormat(e); setIsValidJADN(false); }}
                                value={schemaFormat}
                                placeholder={'Schema format...'}
                                isSmStyle
                            />
                        }
                    </div>
                    <div className="col">
                        <SBCopyToClipboard buttonId='copySchema' data={loadedSchema} customClass='float-end me-1' />
                        <SBFormatBtn customClass="float-end me-1" handleFormatClick={onFormatClick} ext={schemaFormat?.value} data={loadedSchema} />
                        {isValidating ? <SBSpinner action={"Validating"} color={"primary"} /> :
                            <button id='validateJADNButton' type='button' className='btn btn-sm btn-primary float-end ms-1 me-1' title={isValidJADN ? "Schema is valid" : "Click to validate Schema"}
                                onClick={schemaFormat?.value == 'jadn' ? onValidateJADNClick : onValidateJSONClick}>
                                <span className="m-1">Valid</span>
                                {isValidJADN ? (
                                    <span className="badge rounded-pill text-bg-success">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>) : (
                                    <span className="badge rounded-pill text-bg-danger">
                                        <FontAwesomeIcon icon={faXmark} />
                                    </span>)
                                }
                            </button>}
                    </div>
                </div>
            </div>
            <div className="card-body-page">
                {isLoading ? <SBSpinner action={'Loading'} isDiv /> :
                    <SBEditor data={loadedSchema || ""} onChange={sbEditorOnChange}></SBEditor>}
            </div>
        </div>
    )
}
export default JADNSchemaLoader;

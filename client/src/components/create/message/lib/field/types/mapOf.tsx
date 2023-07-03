
//ArrayOf
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import Field from '../Field';
import { isOptional } from '../../GenMsgLib';
import { InfoConfig, SchemaJADN, StandardFieldArray, TypeArray } from '../../../../schema/interface';
import { opts2obj } from '../../../../schema/structure/editors/options/consts';
import { useAppSelector } from '../../../../../../reducers';
import { validateOptDataElem } from '../../utils';
import { hasProperty } from 'components/utils';
import { $MINV } from 'components/create/consts';

// Interface
interface MapOfFieldProps {
    def: StandardFieldArray;
    optChange: (n: string, v: any, i?: number) => void;
    parent?: string;
    config: InfoConfig;
}

// MapOf Field Component
const MapOfField = (props: MapOfFieldProps) => {
    const { def, parent, optChange, config } = props;
    const schema = useAppSelector((state) => state.Util.selectedSchema) as SchemaJADN;

    const [count, setCount] = useState(1);
    const [min, setMin] = useState(false);
    const [max, setMax] = useState(false);
    const [opts, setOpts] = useState<any[]>([]); //opts: let every obj have a key and value [{key: '', value:''}, ...]
    const [errMsg, setErrMsg] = useState<string[]>([]);


    var optData: Record<string, any> = {};
    const [_idx, name, type, args, comment] = def;
    const msgName = (parent ? [parent, name] : [name]).join('.');

    const addOpt = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //check if max fields has been created
        const maxCount = hasProperty(optData, 'maxv') && optData.maxv != 0 ? optData.maxv : config.$MaxElements;
        setMax(maxCount <= count);
        setCount(count + 1);
    }

    const removeOpt = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //check if min fields exist
        const minCount = hasProperty(optData, 'minv') && optData.minv != 0 ? optData.minv : $MINV;
        setMin(count <= minCount);
        if (count <= minCount) {
            return;
        }
        //remove from end of arr
        var updatedOpts = opts.filter((_obj, index) => {
            return index != count - 1;
        });
        setOpts(updatedOpts);
        //TODO? filter null values?
        //validate data
        const errCheck = validateOptDataElem(config, optData, updatedOpts);
        setErrMsg(errCheck);

        //update data
        optChange(msgName, Array.from(new Set(Object.values(updatedOpts))));
        setCount(count - 1);
    }

    const onChange = (k: string, v: any, i: number) => {
        //data : reduce opts to key:value pairs 
        if (Number.isNaN(v)) {
            v = undefined;
        }

        //determine if key is of key or value type
        const ktype = msgName + "." + optData.ktype.toLowerCase();
        const vtype = msgName + "." + optData.vtype.toLowerCase();

        //add obj {[key/value]: v} at i 
        //update v if obj exists at i 
        let updatedOpts = [];
        if (i <= opts.length - 1) {
            //update
            updatedOpts = opts.map((opt, index) => {
                if (i === index) {
                    if (k == ktype) {
                        //change key
                        return { ...opt, ['key']: v };
                    } else if (k == vtype) {
                        //change val
                        return { ...opt, ['value']: v };
                    }
                } else {
                    return opt;
                }
            });
            setOpts(updatedOpts);

        } else {
            //add 
            if (k == ktype) {
                //add key
                setOpts([...opts, { ['key']: v, ['value']: '' }]);
                updatedOpts = [...opts, { ['key']: v, ['value']: '' }];
            } else if (k == vtype) {
                //add val
                setOpts([...opts, { ['key']: '', ['value']: v }]);
                updatedOpts = [...opts, { ['key']: '', ['value']: v }];
            }
        }

        //TODO?: filter - remove null values.
        const errCheck = validateOptDataElem(config, optData, updatedOpts);
        setErrMsg(errCheck);

        //TODO?: fix JSON --- currently {key: value} rather than {[keyName: key] : [valueName: value]}
        //TODO: check for nested MapOf
        // JSON object if ktype is a String type
        // A MapOf type where ktype is Enumerated is equivalent to a Map.
        // JSON array if ktype is not a String type. 
        let data;
        if (updatedOpts && typeof updatedOpts[0]['key'] == "string") {
            data = updatedOpts.reduce((opts, obj) => ({ ...opts, [obj.key]: obj.value }), {});
        } else {
            //data = updatedOpts;
            data = [];
            updatedOpts?.forEach(obj => {
                data.push(obj.key);
                data.push(obj.value);
            });
        }
        optChange(msgName, data);
    }

    const typeDefs: TypeArray[] = schema.types.filter(t => t[0] === type);
    const typeDef = typeDefs.length === 1 ? typeDefs[0] : [];
    if (typeDef.length != 0) {
        optData = (opts2obj(typeDef[2]));
    }
    // MUST include ktype and vtype options.


    // if ktype is enum/pointer = derived enum else ktype
    var keyDef; //keyDef == defined or based type
    var keyField;
    if (optData.ktype.startsWith("#") || optData.ktype.startsWith(">")) {
        optData.ktype = optData.ktype.slice(1);
        const keyDefs: TypeArray[] = schema.types.filter((t: any) => t[0] === optData.ktype);
        //CURRENTLY IN TypeKey = 'name' | 'type' | 'options' | 'comment' | 'fields';
        //no fields in def
        //StandardFieldKey = 'id' | 'name' | 'type' | 'options' | 'comment';
        keyDefs.length === 1 ? keyDef = keyDefs[0] : keyDef = keyDefs;

        keyField = [0, keyDef.toLowerCase(), 'Enumerated', [], keyDef[keyDef.length - 1]];

    } else {
        const keyDefs: TypeArray[] = schema.types.filter((t: any) => t[0] === optData.ktype);
        keyDefs.length === 1 ? keyDef = keyDefs[0] : keyDef = keyDefs;

        //CHECK IF THERE ARE FIELDS (type array vs standard field array)
        keyField = keyDef.length === 4 ? [0, keyDef[0].toLowerCase(), keyDef[0], [], keyDef[keyDef.length - 1]]
            : [0, keyDef[0].toLowerCase(), keyDef[0], [], keyDef[keyDef.length - 2]];

        // TODO? : definition not found = unresolved schema (validate JADN should have failed)
    }

    // if vtype is enum/pointer = derived enum
    var valDef;
    var valField;
    if (optData.vtype.startsWith("#") || optData.vtype.startsWith(">")) {
        optData.vtype = optData.vtype.slice(1);
        const valDefs: TypeArray[] = schema.types.filter((t: any) => t[0] === optData.vtype);
        valDefs.length === 1 ? valDef = valDefs[0] : valDef = valDefs;
        valField = [0, valDef.toLowerCase(), 'Enumerated', [], valDef[valDef.length - 1]];

    } else {
        const valDefs: TypeArray[] = schema.types.filter((t: any) => t[0] === optData.vtype);
        valDefs.length === 1 ? valDef = valDefs[0] : valDef = valDefs;

        valField = valDef.length === 4 ? [0, valDef[0].toLowerCase(), valDef[0], [], valDef[valDef.length - 1]]
            : [0, valDef[0].toLowerCase(), valDef[0], [], valDef[valDef.length - 2]];

        // TODO? : definition not found = unresolved schema (validate JADN should have failed)

    }

    const fields: any[] = [];
    for (let i = 0; i < count; ++i) {
        fields.push(
            <div className='form-group' key={i}>
                <div className='card'>
                    <div className='card-header p-2'>
                        <p className='card-title m-0'>
                            {name} {i + 1}
                        </p>
                    </div>
                    <div className='card-body mx-2'>
                        <Field key={"key"} def={keyField} parent={msgName} optChange={onChange} idx={i} config={config} />
                        <Field key={"value"} def={valField} parent={msgName} optChange={onChange} idx={i} config={config} />
                    </div>
                </div>
            </div >
        );
    }

    const err = errMsg.map((msg, index) =>
        <div key={index}><small className='form-text' style={{ color: 'red' }}>{msg}</small></div>
    );

    return (
        <div className='form-group'>
            <div className='card'>
                <div className='card-header p-2'>
                    <p className='card-title m-0'>
                        {`${name}${isOptional(def) ? '' : '*'}`}
                    </p>
                    <Button
                        color="danger"
                        className={`float-right p-1${min ? ' disabled' : ''}`}
                        onClick={removeOpt}
                    >
                        <FontAwesomeIcon icon={faMinusSquare} size="lg" />
                    </Button>
                    <Button
                        color="primary"
                        className={`float-right p-1${max ? ' disabled' : ''}`}
                        onClick={addOpt}
                    >
                        <FontAwesomeIcon icon={faPlusSquare} size="lg" />
                    </Button>
                    {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                    {err}
                </div>

                <div className='card-body mx-2'>
                    {fields}
                </div>
            </div>
        </div>
    );
}

export default MapOfField;

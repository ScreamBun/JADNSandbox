import React, { useState } from "react";
import { hasProperty } from "react-json-editor/dist/utils";
import { Button, Input } from "reactstrap";
import { isOptional, validateBinary, validateOptData, validateOptDataBinary } from "../../utils";
import { v4 as uuid4 } from 'uuid';
import dayjs from 'dayjs';

//This component is used to help users format/serialize data into valid JSON
//input fields, basic input validation, and parsing
//e.g. ipv4 addr : fields for [ipv4][/CIDR ] with field validation then gets parsed into JSON as => ipv4/CIDR 

const FormattedField = (props: any) => {

    const { basicProps, optData, isValid, setisValid, err } = props;
    const { arr, def, optChange, parent } = basicProps;
    const [_idx, name, _type, _opts, comment] = def;
    const msgName = parent ? [parent, name] : [name];

    //UUID
    const [uuid, setUUID] = useState('');
    const createUUID = () => {
        const randomID = uuid4();
        setUUID(randomID);
        optChange(msgName.join('.'), randomID, arr);
    }

    //ipv4-net 
    //ipv6-net
    const [ipValue, setIpValue] = useState<any[]>(['', '']);
    const ipvNetOnchg = (k: string, v: any, idx: number, ipvType: string) => {
        const newArr = ipValue.map((obj, i) => {
            if (i === idx) {
                return v;
            } else {
                return obj;
            }
        });
        setIpValue(newArr);

        const newValue = `${newArr[0]}${newArr[1] ? `/${newArr[1]}` : ``}`;

        //validate data
        if (newArr[0]) {
            const isBinary = validateBinary(newArr[0], ipvType);
            if (isBinary) {
                const validMsg = validateOptDataBinary(optData, newArr[0]);
                setisValid(validMsg);
                optChange(k, newValue);
            } else {
                setisValid({
                    color: 'red',
                    msg: ["Error: Invalid Binary value"]
                })
                optChange(k, '');
            }
        }
    }


    switch (optData.format) {
        case 'date-time':
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                name={name}
                                type={"datetime-local"}
                                step="any"
                                min={dayjs().format('YYYY-MM-DDTHH:mm:ssZ[Z]')}
                                onChange={e => {
                                    const validMsg = validateOptData(optData, dayjs(e.target.value).format('YYYY-MM-DDTHH:mm:ssZ[Z]'));
                                    setisValid(validMsg);
                                    optChange(msgName.join('.'), dayjs(e.target.value).format('YYYY-MM-DDTHH:mm:ssZ[Z]'), arr);
                                }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'date':
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                name={name}
                                type={"date"}
                                step="any"
                                min={dayjs().format('YYYY-MM-DD')}
                                onChange={e => {
                                    const validMsg = validateOptData(optData, dayjs(e.target.value).format('YYYY-MM-DD'));
                                    setisValid(validMsg);
                                    optChange(msgName.join('.'), dayjs(e.target.value).format('YYYY-MM-DD'), arr);
                                }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'time':
        case 'duration':
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                name={name}
                                type={"time"}
                                step="any"
                                min={dayjs().format('HH:mm:ssZ[Z]')}
                                onChange={e => {
                                    const validMsg = validateOptData(optData, dayjs(e.target.value).format('HH:mm:ssZ[Z]'));
                                    setisValid(validMsg);
                                    optChange(msgName.join('.'), dayjs(e.target.value).format('HH:mm:ssZ[Z]'), arr);
                                }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'email':
        case 'idn-email':
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={'email'}
                                name={name}
                                defaultValue={hasProperty(optData, 'default') ? optData.default : ''}
                                onChange={e => {
                                    const validMsg = validateOptData(optData, e.target.value);
                                    setisValid(validMsg);
                                    optChange(msgName.join('.'), e.target.value, arr);
                                }}
                                style={{ borderColor: isValid.color }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'ipv4'://TODO
        case 'ipv4-addr'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={'text'}
                                name={name}
                                defaultValue={hasProperty(optData, 'default') ? optData.default : ''}
                                onChange={e => {
                                    const isBinary = validateBinary(e.target.value, 'ipv4');
                                    if (isBinary) {
                                        const validMsg = validateOptDataBinary(optData, e.target.value);
                                        setisValid(validMsg);
                                        optChange(msgName.join('.'), e.target.value, arr);
                                    } else {
                                        setisValid({
                                            color: 'red',
                                            msg: ["Error: Invalid Binary value"]
                                        })
                                        optChange(msgName.join('.'), '', arr);
                                    }
                                }}
                                style={{ borderColor: isValid.color }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'ipv4-net':
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0 input-group'>
                            <Input
                                type={'text'}
                                name={name}
                                defaultValue={hasProperty(optData, 'default') ? optData.default : ''}
                                onChange={e =>
                                    ipvNetOnchg(msgName.join('.'), e.target.value, 0, "ipv4")}
                                style={{ borderColor: isValid.color }}
                            />
                            <span className="input-group-text"> / </span>
                            <Input
                                type={'number'}
                                name={name}
                                defaultValue={hasProperty(optData, 'default') ? optData.default : ''}
                                onChange={e =>
                                    ipvNetOnchg(msgName.join('.'), e.target.value, 1, "ipv4")}
                                style={{ borderColor: isValid.color }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'ipv6'://TODO
        case 'ipv6-addr'://TODO
        case 'eui': //TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={'text'}
                                name={name}
                                defaultValue={hasProperty(optData, 'default') ? optData.default : ''}
                                onChange={e => {
                                    const isBinary = validateBinary(e.target.value, 'ipv6');
                                    if (isBinary) {
                                        const validMsg = validateOptDataBinary(optData, e.target.value);
                                        setisValid(validMsg);
                                        optChange(msgName.join('.'), e.target.value, arr);
                                    } else {
                                        setisValid({
                                            color: 'red',
                                            msg: ["Error: Invalid Binary value"]
                                        })
                                        optChange(msgName.join('.'), '', arr);
                                    }
                                }}
                                style={{ borderColor: isValid.color }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'ipv6-net':
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0 input-group'>
                            <Input
                                type={'text'}
                                name={name}
                                defaultValue={hasProperty(optData, 'default') ? optData.default : ''}
                                onChange={e =>
                                    ipvNetOnchg(msgName.join('.'), e.target.value, 0, "ipv6")}
                                style={{ borderColor: isValid.color }}
                            />
                            <span className="input-group-text"> / </span>
                            <Input
                                type={'number'}
                                name={name}
                                defaultValue={hasProperty(optData, 'default') ? optData.default : ''}
                                onChange={e =>
                                    ipvNetOnchg(msgName.join('.'), e.target.value, 1, "ipv6")}
                                style={{ borderColor: isValid.color }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'uuid':
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <Button color='primary' className='float-right' onClick={createUUID}>Generate UUID</Button>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                value={uuid}
                                type={'text'}
                                name={name}
                                onChange={e => {
                                    setUUID(e.target.value);
                                    const validMsg = validateOptData(optData, e.target.value);
                                    setisValid(validMsg);
                                    optChange(msgName.join('.'), e.target.value, arr);
                                }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'i8':
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={'number'}
                                min={-128}
                                max={127}
                                name={name}
                                defaultValue={hasProperty(optData, 'default') ? optData.default : ''}
                                onChange={e => {
                                    const isBinary = validateBinary(e.target.value, 'i8');
                                    if (isBinary) {
                                        const validMsg = validateOptDataBinary(optData, e.target.value);
                                        setisValid(validMsg);
                                        optChange(msgName.join('.'), e.target.value, arr);
                                    } else {
                                        setisValid({
                                            color: 'red',
                                            msg: ["Error: Invalid Binary value"]
                                        })
                                        optChange(msgName.join('.'), '', arr);
                                    }
                                }}
                                style={{ borderColor: isValid.color }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'i16':
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={'number'}
                                min={-32768}
                                max={32767}
                                name={name}
                                defaultValue={hasProperty(optData, 'default') ? optData.default : ''}
                                onChange={e => {
                                    const isBinary = validateBinary(e.target.value, 'i16');
                                    if (isBinary) {
                                        const validMsg = validateOptDataBinary(optData, e.target.value);
                                        setisValid(validMsg);
                                        optChange(msgName.join('.'), e.target.value, arr);
                                    } else {
                                        setisValid({
                                            color: 'red',
                                            msg: ["Error: Invalid Binary value"]
                                        })
                                        optChange(msgName.join('.'), '', arr);
                                    }
                                }}
                                style={{ borderColor: isValid.color }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'i32':
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={'number'}
                                name={name}
                                min={-2147483648}
                                max={2147483647}
                                defaultValue={hasProperty(optData, 'default') ? optData.default : ''}
                                onChange={e => {
                                    const isBinary = validateBinary(e.target.value, 'i32');
                                    if (isBinary) {
                                        const validMsg = validateOptDataBinary(optData, e.target.value);
                                        setisValid(validMsg);
                                        optChange(msgName.join('.'), e.target.value, arr);
                                    } else {
                                        setisValid({
                                            color: 'red',
                                            msg: ["Error: Invalid Binary value"]
                                        })
                                        optChange(msgName.join('.'), '', arr);
                                    }
                                }}
                                style={{ borderColor: isValid.color }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'u\\d+':
            const n = optData.format.substring(1); // digit after u
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={'number'}
                                min={0}
                                max={2 ** (n - 1)}
                                name={name}
                                defaultValue={hasProperty(optData, 'default') ? optData.default : ''}
                                onChange={e => {
                                    const isBinary = validateBinary(e.target.value, 'u');
                                    if (isBinary) {
                                        const validMsg = validateOptDataBinary(optData, e.target.value);
                                        setisValid(validMsg);
                                        optChange(msgName.join('.'), e.target.value, arr);
                                    } else {
                                        setisValid({
                                            color: 'red',
                                            msg: ["Error: Invalid Binary value"]
                                        })
                                        optChange(msgName.join('.'), '', arr);
                                    }
                                }}
                                style={{ borderColor: isValid.color }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'x'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={'text'}
                                name={name}
                                defaultValue={hasProperty(optData, 'default') ? optData.default : ''}
                                onChange={e => {
                                    const isBinary = validateBinary(e.target.value, 'binary');
                                    if (isBinary) {
                                        const validMsg = validateOptDataBinary(optData, e.target.value);
                                        setisValid(validMsg);
                                        optChange(msgName.join('.'), e.target.value, arr);
                                    } else {
                                        setisValid({
                                            color: 'red',
                                            msg: ["Error: Invalid Binary value"]
                                        })
                                        optChange(msgName.join('.'), '', arr);
                                    }
                                }}
                                style={{ borderColor: isValid.color }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );


        case 'hostname':
        case 'idn-hostname':
        case 'uri':
        case 'uri-reference':
        case 'iri':
        case 'iri-reference':
        case 'uri-template':
        case 'json-pointer':
        case 'relative-json-pointer':
        case 'regex': //check for pattern?
        default:
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={'text'}
                                name={name}
                                defaultValue={hasProperty(optData, 'default') ? optData.default : ''}
                                onChange={e => {
                                    const validMsg = validateOptData(optData, e.target.value);
                                    setisValid(validMsg);
                                    optChange(msgName.join('.'), e.target.value, arr);
                                }}
                                style={{ borderColor: isValid.color }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );
    }
}
export default FormattedField;
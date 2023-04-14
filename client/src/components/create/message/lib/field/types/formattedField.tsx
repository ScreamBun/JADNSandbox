import React, { useState } from "react";
import { hasProperty } from "react-json-editor/dist/utils";
import { Button, Input } from "reactstrap";
import { isOptional, validateOptData } from "../../utils";
import { v4 as uuid4 } from 'uuid';
import dayjs from 'dayjs';

const FormattedField = (props: any) => {

    const { basicProps, typeDef, optData, isValid, setisValid, err } = props;
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
                                    const validMsg = validateOptData(optData, dayjs(e.target.value));
                                    setisValid(validMsg);
                                    optChange(msgName.join('.'), dayjs(e.target.value), arr);
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
                                    const validMsg = validateOptData(optData, dayjs(e.target.value));
                                    setisValid(validMsg);
                                    optChange(msgName.join('.'), dayjs(e.target.value), arr);
                                }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'time':
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
                                    const validMsg = validateOptData(optData, dayjs(e.target.value));
                                    setisValid(validMsg);
                                    optChange(msgName.join('.'), dayjs(e.target.value), arr);
                                }}
                            />
                        </div>
                        {err}
                    </div>
                </div>
            );

        case 'duration': //TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'email'://TODO
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

        case 'idn-email'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'hostname'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'idn-hostname'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'ipv6'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'uri'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'uri-reference'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'iri'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'iri-reference'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'uri-template'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'json-pointer'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'relative-json-pointer'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'regex'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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
                                type={typeDef}
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

        // JADN Formats
        case 'eui'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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
                                type={typeDef}
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

        case 'ipv6-addr'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'ipv4-net'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'ipv6-net'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'i8'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'i16'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'i32'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        case 'u\\d+'://TODO
            return (
                <div className='form-group'>
                    <div className='card'>
                        <div className='card-header p-2'>
                            <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
                            {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
                        </div>
                        <div className='card-body m-0 p-0'>
                            <Input
                                type={typeDef}
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

        // Serialization
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
                                type={typeDef}
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
                                type={typeDef}
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
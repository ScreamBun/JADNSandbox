import React, { memo, useState } from 'react';
import {
    Button, ButtonGroup, FormGroup, Input, Label
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faSquareCaretDown, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';
import {
    FieldObject, EnumeratedFieldObject, EnumeratedFieldKeys, StandardFieldKeys, StandardFieldObject
} from '../consts';
import OptionsModal from '../options/OptionsModal';
import { EnumeratedFieldArray, FieldArray, InfoConfig, StandardFieldArray } from '../../../interface';
import { objectValues, zip } from '../../../../../utils';
import { useAppSelector } from '../../../../../../reducers';
import { sbToastError } from 'components/common/SBToast';
import SBCreatableSelect from 'components/common/SBCreatableSelect';
import { Option } from 'components/common/SBSelect';

// Interface
interface FieldEditorProps {
    enumerated?: boolean;
    dataIndex: number;
    value: EnumeratedFieldArray | StandardFieldArray;
    change: (_v: EnumeratedFieldArray | StandardFieldArray, _i: number) => void;
    remove: (_i: number) => void;
    config: InfoConfig;
    changeIndex: (_v: FieldArray, _i: number, _j: number) => void;
}

// Field Editor
const FieldEditorBtnStyle = memo(function FieldEditorBtnStyle(props: FieldEditorProps) {
    const { enumerated, value, dataIndex, change, config, changeIndex } = props;

    const types = useAppSelector((state) => ({
        base: state.Util.types.base,
        schema: Object.keys(state.Util.types.schema) || {}
    }));

    const [modal, setModal] = useState(false);
    const fieldKeys = enumerated ? EnumeratedFieldKeys : StandardFieldKeys;
    const valueObjInit = zip(fieldKeys, value) as FieldObject;
    const [valueObj, setValueObj] = useState(valueObjInit);
    const val = valueObj as StandardFieldObject;
    const [valType, setValType] = useState({ value: val.type, label: val.type });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { placeholder, value } = e.target;
        if (enumerated) {
            if (!value) {
                sbToastError('Value required for Enum');
            }
        }
        const key = placeholder.toLowerCase();
        setValueObj({ ...valueObj, [key]: value });
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { placeholder, value } = e.target;

        if (placeholder == "Name") {
            if (value.includes('/')) {
                sbToastError('Error: FieldNames MUST NOT contain the JSON Pointer field separator "/", which is reserved for use in the Pointers extension.');
                return;
            }
            if (value.length >= 64) {
                sbToastError('Error: Max length reached');
                return;
            }
            const regex = new RegExp(config.$FieldName, "g");
            if (!regex.test(value)) {
                sbToastError('Error: FieldName format is not permitted');
            }
        }

        const key = placeholder.toLowerCase();
        const updatevalue = { ...valueObj, [key]: value }
        if (JSON.stringify(valueObjInit) == JSON.stringify(updatevalue)) {
            return;
        }
        setValueObj(updatevalue);
        change(objectValues(updatevalue as Record<string, any>) as FieldArray, dataIndex);
    }

    const onSelectChange = (e: Option) => {
        var updatevalue
        //clear type options 
        if (e == null) {
            //default field type is String
            setValType({ value: 'String', label: 'String' });
            updatevalue = { ...valueObj, options: [], ['type']: 'String' };

        } else {
            setValType(e);
            updatevalue = { ...valueObj, options: [], ['type']: e.value };
        }

        setValueObj(updatevalue);
        change(objectValues(updatevalue as Record<string, any>) as FieldArray, dataIndex);
    }

    const removeAll = () => {
        const { dataIndex, remove } = props;
        remove(dataIndex);
    }

    const saveModal = (modalData: Array<string>) => {
        toggleModal();
        const prevState = [...valueObj.options];
        if (JSON.stringify(prevState) === JSON.stringify(modalData)) {
            return;
        }
        const updatevalue = { ...valueObj, options: modalData }
        setValueObj(updatevalue);
        change(objectValues(updatevalue as Record<string, any>) as FieldArray, dataIndex);
    }

    const toggleModal = () => {
        setModal(modal => !modal);
    }

    const makeOptions = () => {
        if (enumerated) {
            const val = valueObj as EnumeratedFieldObject;
            return (
                <div className="col-md-4">
                    <Label>Value</Label>
                    <Input type="text" placeholder="Value" value={val.value} onChange={onChange} onBlur={onBlur} />
                </div>
            );
        }

        return (
            <div className="col-md-10 p-0 m-0">
                <div className="col-md-4 d-inline-block">
                    <Label>Name</Label>
                    <Input type="text" placeholder="Name" maxLength={64} value={val.name} onChange={onChange} onBlur={onBlur} />
                </div>

                <div className="col-md-4 d-inline-block">
                    <Label>Type</Label>
                    <SBCreatableSelect id="Type" name="Type" value={valType} onChange={onSelectChange} data={types} isGrouped />
                </div>

                <div className="col-md-4 d-inline-block">
                    <Button color="primary" className='btn-sm p-2' onClick={toggleModal}>Field Options</Button>
                    <OptionsModal
                        optionValues={val.options}
                        isOpen={modal}
                        saveModal={saveModal}
                        toggleModal={toggleModal}
                        optionType={val.type}
                        fieldOptions
                    />
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="card border-secondary mb-2">
                <div className="card-header px-2 py-2">
                    <span>{enumerated ? (valueObj as EnumeratedFieldObject).value : (valueObj as StandardFieldObject).name}</span>
                    <ButtonGroup size="sm" className="float-right">
                        <Button color="danger" onClick={removeAll}
                            title={`Delete Field`}>
                            <FontAwesomeIcon icon={faMinusCircle} />
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup size="sm" className="float-right mr-1">
                        <Button color="primary" onClick={() => changeIndex(value, dataIndex, dataIndex - 1)}
                            title={`Move Field Up`}>
                            <FontAwesomeIcon icon={faSquareCaretUp} />
                        </Button>
                        <Button color="primary" onClick={() => changeIndex(value, dataIndex, dataIndex + 1)}
                            title={`Move Field Down`} >
                            <FontAwesomeIcon icon={faSquareCaretDown} />
                        </Button>
                    </ButtonGroup>         
                </div>
                <div className="card-body px-2 py-2">
                    <div className="row m-0">
                        <div className={enumerated ? 'col-md-3' : 'col-md-2'}>
                            <Label>ID</Label>
                            <Input type="number" placeholder="ID" value={valueObj.id} onChange={onChange} onBlur={onBlur} />
                        </div>

                        {makeOptions()}

                        <div className={enumerated ? 'col-md-4' : 'col-md-12'}>
                            <Label>Comment</Label>
                            <Input
                                type="textarea"
                                placeholder="Comment"
                                rows={1}
                                value={valueObj.comment}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        </div>
                    </div>
                </div>
            </div>        
        </>
    );
});

FieldEditorBtnStyle.defaultProps = {
    enumerated: false
};

export default FieldEditorBtnStyle;
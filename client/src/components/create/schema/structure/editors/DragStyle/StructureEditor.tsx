import React, { memo, useEffect, useState } from 'react';
import {
  Button, ButtonGroup, Input
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown19, faCircleChevronDown, faCircleChevronUp, faMinusCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { PrimitiveTypeObject, StandardTypeObject, TypeKeys } from '../consts';
import OptionsModal from '../options/OptionsModal';
import {
  EnumeratedFieldArray, FieldArray, InfoConfig, StandardFieldArray, TypeArray
} from '../../../interface';
import { zip } from '../../../../../utils';
import { sbToastError } from 'components/common/SBToast';
import { useAppSelector } from 'reducers';
import { ModalSize } from '../options/ModalSize';
import { flushSync } from 'react-dom';
import SBOutlineFields, { DragItem } from './SBOutlineFields';


interface StructureEditorProps {
  dataIndex: number; //index changes based on obj in arr (tracks the parent index)
  value: TypeArray;
  change: (v: PrimitiveTypeObject, i: number) => void;
  remove: (i: number) => void;
  changeIndex: (v: PrimitiveTypeObject, dataIndex: number, i: number) => void;
  config: InfoConfig;
  collapseAllFields: boolean;
}

const StructureEditor = memo(function StructureEditor(props: StructureEditorProps) {
  const { value, change, dataIndex, config, collapseAllFields, remove } = props;
  const predefinedTypes = useAppSelector((state) => [...state.Util.types.base]);

  const [fieldCollapse, setFieldCollapse] = useState(false);
  const [modal, setModal] = useState(false);
  const valueObjInit = zip(TypeKeys, value) as StandardTypeObject;
  const [valueObj, setValueObj] = useState(valueObjInit);
  const isEditableID = valueObj.type == 'Record' || valueObj.type == 'Array' ? false : true;

  useEffect(() => {
    setFieldCollapse(collapseAllFields)
  }, [collapseAllFields]);

  const getFieldPropValue = (field: JSX.Element, propPos: number) => {
    let propValue: any = null;
    if (field.props &&
      field.props.item &&
      field.props.item.props &&
      field.props.item.props.value &&
      field.props.item.props.value[propPos]) {
      propValue = field.props.item.props.value[propPos];
      //fields.filter(field => field.props.value[1] == val[1]);
    }
    return propValue;
  }

  const sortFields = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    let tmpFields = [...valueObj.fields];
    //sort fields
    tmpFields.sort(function (a, b) {
      return a[0] - b[0];
    });

    const updatevalue = { ...valueObj, fields: tmpFields };
    setValueObj(updatevalue);
    change(updatevalue, dataIndex);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { placeholder, value } = e.target;
    const key = placeholder.toLowerCase();
    setValueObj({ ...valueObj, [key]: value });
  }

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { placeholder, value } = e.target;

    //VALIDATE NAME
    if (placeholder == "Name") {
      if (predefinedTypes.includes(value.toLowerCase())) {
        sbToastError('Error: TypeName MUST NOT be a JADN predefined type');
      }
      if (value.length >= 64) {
        sbToastError('Error: Max length reached');
        return;
      }
      if (value.includes(config.$Sys)) {
        sbToastError('Error: TypeNames SHOULD NOT contain the System character');
      }
      const regex = new RegExp(config.$TypeName, "g");
      if (!regex.test(value)) {
        sbToastError('Error: TypeName format is not permitted');
      }
    }

    const key = placeholder.toLowerCase();
    const updatevalue = { ...valueObj, [key]: value };
    if (JSON.stringify(valueObjInit) == JSON.stringify(updatevalue)) {
      return;
    }
    setValueObj(updatevalue);
    change(updatevalue, dataIndex);
  }

  const removeAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    remove(dataIndex);
  }

  const onAddField = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let field: EnumeratedFieldArray | StandardFieldArray;
    //check field count
    if (config.$MaxElements && valueObj.fields?.length > config.$MaxElements) {
      sbToastError(`Error: Field count exceeds $MaxElements. Please remove ${valueObj.fields?.length - config.$MaxElements} field(s).`);
      return;
    } else if (config.$MaxElements && valueObj.fields?.length == config.$MaxElements) {
      sbToastError('Error: Field count meets $MaxElements. Cannot add more fields.');
      return;
    }

    let f_count = valueObj.fields?.length + 1;
    const listOfIDs = valueObj.fields.map((field) => { return field[0]; })
    if (listOfIDs.includes(f_count)) {
      //Create Unique ID
      const currMaxID = Math.max(...listOfIDs);
      f_count = currMaxID + 1;
    }

    const fieldName = 'field_value_' + f_count;
    if (valueObj.type.toLowerCase() === 'enumerated') {
      field = [f_count, fieldName, ''] as EnumeratedFieldArray;
    } else {
      //default field type is String
      field = [f_count, fieldName, 'String', [], ''] as StandardFieldArray;
    }

    const tmpFieldValues = [...valueObj.fields, field];
    const updatevalue = { ...valueObj, fields: tmpFieldValues };

    flushSync(() => {
      setValueObj(updatevalue);
    });

    change(updatevalue, dataIndex);
    setFieldCollapse(false);
  }

  const fieldChange = (val: FieldArray, idx: number) => {
    //check field ID and field name
    const fieldIDsFound = valueObj.fields.filter(field => {
      const fieldPropValID = getFieldPropValue(field, 0);
      if (fieldPropValID) {
        return fieldPropValID == val[0]
      } else {
        return null;
      }
    });

    if (fieldIDsFound.length > 1) {
      sbToastError('Error: FieldID must be unique');
      return;
    }

    const fieldNamesFound = valueObj.fields.filter(field => {
      const fieldPropValName = getFieldPropValue(field, 1);
      if (fieldPropValName) {
        return fieldPropValName == val[1]
      } else {
        return null;
      }
    });

    if (fieldNamesFound.length > 1) {
      sbToastError('Error: FieldName must be unique');
      return;
    }

    if (typeof val[0] != 'number') {
      val[0] = parseInt(val[0]); //force index to type number
    }

    const tmpFieldValues = [...valueObj.fields];
    tmpFieldValues[idx] = val;

    const updatevalue = { ...valueObj, fields: tmpFieldValues };
    setValueObj(updatevalue);
    change(updatevalue, dataIndex);
  };

  const onFieldRemoval = (idx: number) => {
    const tmpFieldValues = [...valueObj.fields];

    if (idx + 1 == valueObj.fields?.length) {
      tmpFieldValues.pop();
    } else {
      tmpFieldValues.splice(idx, 1);
    }

    const updatevalue = { ...valueObj, fields: tmpFieldValues };
    setValueObj(updatevalue);
    change(updatevalue, dataIndex);
  };

  const saveModal = (modalData: Array<string>) => {
    toggleModal();
    const prevState = [...valueObj.options];
    if (JSON.stringify(prevState) === JSON.stringify(modalData)) {
      return;
    }
    var updatevalue = { ...valueObj, options: modalData }
    // if EnumeratedField && enum || pointer, remove fields 
    if (updatevalue.type == "Enumerated" && (updatevalue.options.find(str => str.startsWith('#'))) || (updatevalue.options.find(str => str.startsWith('>')))) {
      updatevalue = { ...updatevalue, fields: [] }
    }
    setValueObj(updatevalue);
    change(updatevalue, dataIndex);
  }

  const toggleModal = () => {
    setModal(modal => !modal);
  }

  // If the Derived Enumerations or Pointers extensions are present in type options, the Fields array MUST be empty.
  // TODO: Is this used?
  if ((valueObj.options.find(str => str.startsWith('#'))) || (valueObj.options.find(str => str.startsWith('>')))) {
    return (
      <>
        <div className="card border-secondary mb-3">
          <div className="card-header px-2 py-2">
            <span id={valueObj.name} className="col-sm-10 px-1 my-1">{`${valueObj.name} (${valueObj.type})`}</span>
            <ButtonGroup size="sm" className="float-right">
              <Button color="danger" onClick={removeAll} >
                <FontAwesomeIcon icon={faMinusCircle} />
              </Button>
            </ButtonGroup>
          </div>
          <div className="card-body px-2 py-2">
            <div className="row">
              <div className="col-md-12">
                <div className='row'>
                  <div className='col-md-4'>
                    <label htmlFor="name" className='mb-0'>Name</label>
                  </div>
                  <div className='col-md-6 offset-md-2'>
                    <label htmlFor="name" className='mb-0'>Comment</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <Input name="structureName" type="text" placeholder="Name" className='form-control' maxLength={64} value={valueObj.name}
                      onChange={onChange} onBlur={onBlur} />
                  </div>
                  <div className="col-md-2 text-center px-0">
                    <Button color="primary" className='btn-sm p-2' onClick={toggleModal}>Type Options</Button>
                    <OptionsModal
                      optionValues={valueObj.options}
                      isOpen={modal}
                      optionType={valueObj.type}
                      toggleModal={toggleModal}
                      saveModal={saveModal}
                      modalSize={ModalSize.lg}
                      fieldOptions={false}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input name="structureComment" type="textarea" placeholder="Comment" className='form-control text-area-w100' rows={1}
                      value={valueObj.comment} onChange={onChange} onBlur={onBlur} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  const onOutlineDrop = (item: DragItem) => {
    let reordered_types: any[] = [...valueObj.fields];

    const old_index = reordered_types.findIndex(f => f[0] == item.id);
    reordered_types.splice(old_index, 1);
    reordered_types.splice(item.dataIndex, 0, item.value);

    //If BaseType is Array or Record, FieldID MUST be the ordinal position of the field within the type, numbered consecutively starting at 1.
    if (!isEditableID) {
      reordered_types = reordered_types.map((item, index) => {
        item[0] = index + 1;
        return item;
      });
    }

    let updatedData = {
      ...valueObj,
      fields: reordered_types
    };
    setValueObj(updatedData);
    change(updatedData, dataIndex);
  };

  return (
    <>
      <div className={`card border-secondary mb-2`}>
        <div className="card-header px-2 py-2" >
          <div className='row'>
            <div className='col'>
              <span id={valueObj.name} className="card-title">{`${valueObj.name} (${valueObj.type})`}</span>
            </div>
            <div className='col'>
              <Button color="danger" className="float-right btn-sm" onClick={removeAll} title={`Delete ${valueObj.type}`}>
                <FontAwesomeIcon icon={faMinusCircle} />
              </Button>
            </div>
          </div>
        </div>
        <div className="card-body px-2 pt-2 pb-3">
          <div className="row">
            <div className="col-md-12">
              <div className='row'>
                <div className='col-md-4'>
                  <label htmlFor="name" className='mb-0'>Name</label>
                </div>
                <div className='col-md-6 offset-md-2'>
                  <label htmlFor="name" className='mb-0'>Comment</label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Input name="structureName" type="text" className='form-control' placeholder="Name" maxLength={64} value={valueObj.name}
                    onChange={onChange} onBlur={onBlur} />
                </div>
                <div className="col-md-2 text-center px-0">
                  <Button color="primary" className='btn-sm p-2' onClick={toggleModal}>Type Options</Button>
                  <OptionsModal
                    optionValues={valueObj.options}
                    isOpen={modal}
                    optionType={valueObj.type}
                    toggleModal={toggleModal}
                    saveModal={saveModal}
                    modalSize={ModalSize.lg}
                  />
                </div>
                <div className="col-md-6">
                  <Input name="structureComment" type="textarea" placeholder="Comment" className='form-control' rows={1} value={valueObj.comment}
                    onChange={onChange} onBlur={onBlur} />
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-12">
              <legend>
                {valueObj.type == 'Enumerated' ? 'Items' : 'Fields'} <span className="badge badge-pill badge-secondary">{valueObj.fields?.length}</span>

                <span
                  className="badge badge-pill badge-primary ml-1 cursor-pointer"
                  title='Add Field'
                  onClick={onAddField}>
                  <FontAwesomeIcon icon={faPlusSquare} />
                </span>

                <a href="#" role="button"
                  onClick={() => setFieldCollapse(!fieldCollapse)}>
                  <FontAwesomeIcon icon={fieldCollapse ? faCircleChevronDown : faCircleChevronUp}
                    className='float-right btn btn-sm'
                    title={fieldCollapse ? ' Show Fields' : ' Hide Fields'} />
                </a>

                {isEditableID ? <a href="#" role="button" onClick={sortFields}>
                  <FontAwesomeIcon icon={faArrowDown19}
                    className='float-right btn btn-sm'
                    title={'Sort Fields by ID'} />
                </a> : ''}

              </legend>

              {!fieldCollapse ? valueObj.fields?.length == 0 ? <p> No fields to show</p> :
                <div>
                  <SBOutlineFields
                    id={'fields-outline'}
                    items={valueObj.fields}
                    onDrop={onOutlineDrop}
                    isEnumerated={valueObj.type.toLowerCase() === 'enumerated'}
                    fieldChange={fieldChange}
                    fieldRemove={onFieldRemoval}
                    editableID={isEditableID}
                    config={config}
                    acceptableType={`${dataIndex}`}
                  />
                </div>
                : ''
              }

              {!fieldCollapse ?
                <Button color="primary" onClick={onAddField} className='btn btn-sm btn-block rounded-pill'
                  title='Add Field'>
                  <FontAwesomeIcon icon={faPlusSquare} />
                </Button>
                : ''
              }

            </div>
          </div>
        </div>
      </div >

    </>
  );
});

export default StructureEditor;
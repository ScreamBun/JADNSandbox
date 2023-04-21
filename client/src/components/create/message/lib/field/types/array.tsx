import React, { useEffect, useRef, useState } from 'react';
import Field from '../Field';
import { isOptional } from '../../GenMsgLib';
import { SchemaJADN, StandardFieldArray } from '../../../../schema/interface';
import { useAppSelector } from '../../../../../../reducers';
import { opts2obj } from 'components/create/schema/structure/editors/options/consts';
import { validateOptDataElem } from '../../utils';
import { hasProperty } from 'react-json-editor/dist/utils';
import FormattedField from './formattedField';

// Interface
interface ArrayFieldProps {
  def: StandardFieldArray;
  optChange: (n: string, v: any) => void;
  parent?: string;
}

// Component
const ArrayField = (props: ArrayFieldProps) => {
  const schema = useAppSelector((state) => state.Util.selectedSchema) as SchemaJADN
  var optData: Record<string, any> = {};

  const { def, optChange, parent } = props;
  const [_idx, name, _type, _args, comment] = def;
  const msgName = (parent ? [parent, name] : [name]).join('.');
  const [count, setCount] = useState(0);
  const [data, setData] = useState<string[]>([]); //track elements
  const [errMsg, setErrMsg] = useState<{ color: string, msg: string[] }>({
    color: '',
    msg: []
  });

  const ref = useRef(true);
  useEffect(() => {
    const firstRender = ref.current;
    if (firstRender) {
      ref.current = false;
      const validMsg = validateOptDataElem(optData, count);
      setErrMsg(validMsg);
    }
  });

  const onChange = (_k: string, v: any, i: number) => {
    var updatedArr;
    if (data.length - 1 < i) {
      //add 
      setData([...data, v]);
      updatedArr = [...data, v];

    } else {
      //update arr at index
      updatedArr = data.map((field, idx) => {
        if (idx === i) {
          return v;
        } else {
          return field;
        }
      });
      setData(updatedArr);
    }
    //remove empty fields?
    setCount(updatedArr.length);
    const errCheck = validateOptDataElem(optData, updatedArr.length, optData.format ? true : false, updatedArr);
    setErrMsg(errCheck);

    optChange(msgName, updatedArr);
  }

  const typeDefs = schema.types.filter(t => t[0] === def[2]);
  const typeDef = typeDefs.length === 1 ? typeDefs[0] : [];
  if (typeDef) {
    optData = (opts2obj(typeDef[2]));
  }

  let err: any[] = [];
  (errMsg.msg).forEach(msg => {
    err.push(<div><small className='form-text' style={{ color: 'red' }}> {msg}</small></div>)
  });

  if (hasProperty(optData, 'format')) {
    return (<FormattedField
      basicProps={props} optData={optData}
      errMsg={errMsg} setErrMsg={setErrMsg}
      err={err} />);
  }

  //Expected: fields (typeDef.length  == 5)
  const fieldDef = typeDef[typeDef.length - 1].map((d: any, i: number) =>
    <div className="col my-1 px-0">
      <Field key={d[0]} def={d} parent={msgName} optChange={onChange} idx={i} />
    </div>
  )

  return (
    <div className='form-group'>
      <div className='card'>
        <div className='card-header p-2'>
          <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
          {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
          {err}
        </div>
        <div className='card-body mx-2'>
          <div className='row'>
            {fieldDef}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArrayField;

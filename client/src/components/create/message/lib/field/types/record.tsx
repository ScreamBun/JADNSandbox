import React, { useEffect, useRef, useState } from 'react';
import Field from '../Field';
import { isOptional } from '../../GenMsgLib';
import { SchemaJADN, StandardFieldArray } from '../../../../schema/interface';
import { useAppSelector } from '../../../../../../reducers';
import { opts2obj } from 'components/create/schema/structure/editors/options/consts';
import { validateOptDataElem } from '../../utils';

// Interface
interface RecordFieldProps {
  def: StandardFieldArray;
  optChange: (n: string, v: any) => void;
  parent?: string;
}

// Component
const RecordField = (props: RecordFieldProps) => {
  const { def, optChange, parent } = props;
  const schema = useAppSelector((state) => state.Util.selectedSchema) as SchemaJADN;
  var optData: Record<string, any> = {};

  const [_idx, name, type, _args, comment] = def;
  const msgName = (parent ? [parent, name] : [name]).join('.');
  const [count, setCount] = useState(0);
  const [data, setData] = useState<string[]>([]); //track elements
  const [isValid, setisValid] = useState<{ color: string, msg: string[] }>({
    color: '',
    msg: []
  });

  const ref = useRef(true);
  useEffect(() => {
    const firstRender = ref.current;
    if (firstRender) {
      ref.current = false;
      const validMsg = validateOptDataElem(optData, count);
      setisValid(validMsg);
    }
  });

  const onChange = (k: string, v: any) => {
    if (!data.includes(k)) {
      //add
      setData(data => [...data, k]);
      setCount(count => count + 1);
      const validMsg = validateOptDataElem(optData, count + 1);
      setisValid(validMsg);
    } else {
      if (v == '' || v == undefined || v == null || (typeof v == 'object' && v.length == 0) || Number.isNaN(v)) {
        //remove
        setData(data => data.filter((elem) => {
          return elem != k;
        }));
        setCount(count => count - 1);
        const validMsg = validateOptDataElem(optData, count - 1);
        setisValid(validMsg);
      }//else value is updated
    }
    optChange(k, v)
  }

  const typeDefs = schema.types.filter(t => t[0] === type);
  const typeDef = typeDefs.length === 1 ? typeDefs[0] : [];
  if (typeDef) {
    optData = (opts2obj(typeDef[2]));
  }

  //Expected: fields (typeDef.length == 5)
  const fieldDef = typeDef[typeDef.length - 1].map((d: any) => <Field key={d[0]} def={d} parent={msgName} optChange={onChange} />)

  let err: any[] = [];
  (isValid.msg).forEach(msg => {
    err.push(<div><small className='form-text' style={{ color: 'red' }}> {msg}</small></div>)
  });

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
            <div className="col my-1 px-0">
              {fieldDef}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordField;

import React from 'react';
import Field from '../Field';
import { isOptional } from '../../GenMsgLib';
import { SchemaJADN, StandardFieldArray } from '../../../../schema/interface';
import { useAppSelector } from '../../../../../../reducers';
import { opts2obj } from 'components/create/schema/structure/editors/options/consts';
import { hasProperty } from 'react-json-editor/dist/utils';
import { $MAX_STRING, $MINV } from 'components/create/consts';

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
  /*   const [isValid, setisValid] = useState({
      color: '',
      msg: []
    }) */

  const typeDefs = schema.types.filter(t => t[0] === type);
  const typeDef = typeDefs.length === 1 ? typeDefs[0] : [];
  if (typeDef) {
    optData = (opts2obj(typeDef[2]));
    //TODO type opts: extend, minv, and maxv 
  }

  const fieldDef = typeDef[typeDef.length - 1].map((d: any) => <Field key={d[0]} def={d} parent={msgName} optChange={optChange} />)

  /* 
    let valc = '';
    let valm = [];
    if (optData && fieldDef.length) {
      if (hasProperty(optData, 'minv')) {
        if (fieldDef.length < optData.minv) {
          valc = 'red';
          valm.push('Minv Error: must be more than' + optData.minv);
        }
      } else {
        optData.minv = $MINV;
        if (fieldDef.length < optData.minv) {
          valc = 'red';
          valm.push('Minv Error: must be more than' + optData.minv);
        }
      }
      if (hasProperty(optData, 'maxv')) {
        if (fieldDef.length > optData.maxv) {
          valc = 'red';
          valm.push('Maxv Error: must be less than ' + optData.maxv);
        }
      } else {
        optData.maxv = $MAX_STRING;
        if (fieldDef.length.length > optData.maxv) {
          valc = 'red';
          valm.push('Maxv Error: must be less than ' + optData.maxv);
        }
      }
    }
    setisValid({ color: valc, msg: valm });
  
  
    let err: any[] = [];
    (isValid.msg).forEach(msg => {
      err.push(<div><small className='form-text' style={{ color: 'red' }}> {msg}</small></div>)
    }); */

  return (
    <div className='form-group'>
      <div className='card'>
        <div className='card-header p-2'>
          <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
          {comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
          {/*  {err} */}
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

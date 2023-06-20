import React from 'react';
import { isOptional } from '../../GenMsgLib';
import { SchemaJADN, StandardFieldArray } from '../../../../schema/interface';
import { useAppSelector } from '../../../../../../reducers';
import { opts2obj } from 'components/create/schema/structure/editors/options/consts';
import { hasProperty } from 'react-json-editor/dist/utils';

// Interface
interface EnumeratedFieldProps {
  def: StandardFieldArray;
  optChange: (n: string, v: any) => void;
  parent?: string;
}

// Component
const EnumeratedField = (props: EnumeratedFieldProps) => {
  const { def, optChange, parent } = props;
  const schema = useAppSelector((state) => state.Util.selectedSchema) as SchemaJADN;

  var optData: Record<string, any> = {};
  const [idx, name, type, opts, comment] = def;
  const msgName = (parent ? [parent, name] : [name]).join('.');
  const typeDefs = schema.types.filter(t => t[0] === type);
  const typeDef = typeDefs.length === 1 ? typeDefs[0] : def;

  if (typeDefs.length === 1) {
    optData = (opts2obj(typeDef[2]));
  } else {
    optData = (opts2obj(opts));
  }

  let defOpts;
  if (hasProperty(optData, 'enum')) {
    const typeDefs = schema.types.filter(t => t[0] === optData.enum);
    const typeDef = typeDefs.length === 1 ? typeDefs[0] : [];

    defOpts = typeDef[typeDef.length - 1].map((opt: any) => <option key={opt[0]} data-subtext={opt[2]} value={hasProperty(optData, 'id') && optData.id ? opt[0] : opt[1]}>{opt[1]}</option>);

  } else if (hasProperty(optData, 'pointer')) {
    const typeDefs = schema.types.filter(t => t[0] === optData.pointer);
    const typeDef = typeDefs.length === 1 ? typeDefs[0] : [];
    defOpts = typeDef[typeDef.length - 1].map((opt: any) => {
      let optCount = 1;
      //TODO: check for dir, replace Pointer extension with an Enumerated type containing a JSON Pointer pathname 
      if (hasProperty(optData, 'dir') && optData.dir) {
        <option key={optCount} data-subtext={opt[2]} value={hasProperty(optData, 'id') && optData.id ? opt[0] : optCount}>{opt[1]}</option>
        optCount += 1;
        
      } else {
        <option key={optCount} data-subtext={opt[2]} value={hasProperty(optData, 'id') && optData.id ? opt[0] : opt[1]}>{opt[1]}</option>
      }

    });

  } else {
    defOpts = typeDef[typeDef.length - 1].map((opt: any) => <option key={opt[0]} data-subtext={opt[2]} value={hasProperty(optData, 'id') && optData.id ? opt[0] : opt[1]}>{opt[1]}</option>);
  }

  return (
    <div className='form-group'>
      <div className='card'>
        <div className='card-header p-2'>
          <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
          {idx != 0 && comment ? <small className='card-subtitle form-text text-muted'>{comment}</small> : ''}
        </div>
        <div className='card-body m-0 p-0'>
          <div className='row'>
            <div className="col">
              <select
                name={name}
                title={name}
                className="custom-select"
                onChange={e => {
                  if (hasProperty(optData, 'id') && optData.id) {
                    optChange(msgName, parseInt(e.target.value))
                  } else {
                    optChange(msgName, e.target.value)
                  }
                }}
              >
                <option data-subtext={`${name} options`} value='' >{`${name} options`}</option>
                {defOpts}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnumeratedField;

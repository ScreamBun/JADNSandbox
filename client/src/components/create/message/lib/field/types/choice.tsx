import React, { useState } from 'react';
import Field from '../Field';
import { isOptional } from '../../GenMsgLib';
import { InfoConfig, SchemaJADN, StandardFieldArray } from '../../../../schema/interface';
import { useAppSelector } from '../../../../../../reducers';
import { opts2obj } from 'components/create/schema/structure/editors/options/consts';
import { hasProperty } from 'components/utils';
import SBSelect, { Option } from 'components/common/SBSelect';

// Interface
interface ChoiceFieldProps {
  def: StandardFieldArray;
  optChange: (n: string, v: any) => void;
  parent?: string;
  config: InfoConfig;
}

// Component
const ChoiceField = (props: ChoiceFieldProps) => {
  const { def, optChange, parent, config } = props;
  const schema = useAppSelector((state) => state.Util.selectedSchema) as SchemaJADN;
  const [selectedValue, setSelectedValue] = useState<Option | string>('');


  const handleChange = (e: Option) => {
    //const { optChange, def } = props;
    if (e == null) {
      setSelectedValue('');
    } else {
      setSelectedValue(e);
    }
    optChange(def[1], undefined);
    //target is undefined 
    //this resets selected choice
    //e.target.selectedOptions[0].text
  }

  const [_idx, name, type, _args, comment] = def;
  const msgName = (parent ? [parent, name] : [name]).join('.');
  var optData: Record<string, any> = {};

  const typeDefs = schema.types.filter(t => t[0] === type);
  const typeDef = typeDefs.length === 1 ? typeDefs[0] : [];
  if (typeDef.length != 0) {
    optData = (opts2obj(typeDef[2]));
  }

  let defOpts; //select dropdown options
  if (Array.isArray(typeDef[typeDef.length - 1])) {
    defOpts = typeDef[typeDef.length - 1].map((opt: any) => ({ value: `${hasProperty(optData, 'id') && optData.id ? opt[0] : opt[1]}`, label: opt[1] }));
  }

  let selectedOpts;
  if (selectedValue >= '0') {
    let selectedDefs; //get opt where the key = selected
    if (hasProperty(optData, 'id') && optData.id) {
      selectedDefs = typeDef[typeDef.length - 1].filter((opt: any) => opt[0] === selectedValue.value);
    } else {
      selectedDefs = typeDef[typeDef.length - 1].filter((opt: any) => opt[1] === selectedValue.value);
    }
    const selectedDef = selectedDefs.length === 1 ? selectedDefs[0] : [];
    selectedOpts = <Field key={selectedDef[1]} def={selectedDef} parent={msgName} optChange={optChange} config={config} />;
  }

  return (
    <div className='form-group'>
      <div className='card'>
        <div className='card-header p-2'>
          <p className='card-title m-0'>{`${name}${isOptional(def) ? '' : '*'}`}</p>
          {comment && <small className='card-subtitle form-text text-muted'>{comment}</small>}
        </div>
        <div className='card-body m-0 p-0'>
          <div className='row'>
            <div className="col mb-2">
              <SBSelect id={name} name={name} data={defOpts}
                onChange={handleChange}
                placeholder={`${name} options`}
                value={selectedValue}
              />
            </div>
          </div>
          <div className='row'>
            <div className="col">
              {selectedOpts}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoiceField;

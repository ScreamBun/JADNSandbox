import React from 'react';
import {
  BasicField, EnumeratedField, ChoiceField, RecordField, MapField, ArrayOfField, ArrayField, MapOfField
} from './types/Types';
import {
  InfoConfig,
  SchemaJADN, StandardFieldArray
} from '../../../schema/interface';
import { useAppSelector } from '../../../../../reducers';
import { opts2obj } from 'components/create/schema/structure/editors/options/consts';
import { hasProperty } from 'react-json-editor/dist/utils';
import LinkField from './types/linkField';

// Interfaces
interface FieldProps {
  def: StandardFieldArray;
  optChange: (k: string, v: any, i?: number) => void;
  idx?: number;
  parent?: string;
  config: InfoConfig;
  children: JSX.Element;
}

// Component
const Field = (props: FieldProps) => {
  const schema = useAppSelector((state) => state.Util.selectedSchema) as SchemaJADN
  const { def, idx, optChange, parent, config, children } = props;
  const [_idx, name, type, opts, _comment] = def;

  const parentName = parent || '';
  const typeDefs = schema.types.filter(t => t[0] === type);
  var typeDef = typeDefs.length === 1 ? typeDefs[0][1] : type; //find type otherwise, type is JADN type
  const args = {
    def,
    parent: parentName,
    config,
    children,
    optChange: (k: string, v: any) => optChange(k, v, idx)
  };

  //Circular Dependency Check: Create Primitive Field
  if (name && parent && parent.split('.').includes(name)) {
    return <BasicField {...args} />;
  }

  //Link Check
  if (opts) {
    const foptData = (opts2obj(opts));
    if (hasProperty(foptData, 'link')) {
      return <LinkField {...args} />;
    }
  }

  switch (typeDef) {
    case 'Enumerated':
      return <EnumeratedField {...args} />;
    case 'Choice':
      return <ChoiceField {...args} />;
    case 'Record':
      return <RecordField {...args} />;
    case 'Map':
      return <MapField {...args} />;
    case 'MapOf':
      return <MapOfField {...args} />;
    case 'ArrayOf':
      return <ArrayOfField {...args} />;
    case 'Array':
      return <ArrayField {...args} />;
    default:
      return <BasicField {...args} />;
  }
}

export default Field;


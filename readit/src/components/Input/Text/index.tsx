import React from 'react';

import { FormGroup, FormInput, FormLabel } from './styles';

import { Props } from './interface';

const Text: React.FC<Props> = ({ value, onChange, placeholder }: Props) => {
  const hasValue = value.length > 0;

  return (
    <FormGroup>
      <FormInput type="text" value={value} onChange={onChange} />
      <FormLabel hasValue={hasValue} htmlFor="first">
        {placeholder}
      </FormLabel>
    </FormGroup>
  );
};

export default Text;

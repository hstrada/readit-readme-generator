import React from 'react';

import { FormGroup, FormInput, FormLabel } from './styles';

import { Props } from './interface';

const Input: React.FC<Props> = ({
  value,
  onChange,
  key,
  placeholder,
}: Props) => {
  const hasValue = value.length > 0;

  return (
    <FormGroup>
      <FormInput type="text" key={key} value={value} onChange={onChange} />
      <FormLabel hasValue={hasValue} htmlFor="first">
        {placeholder}
      </FormLabel>
    </FormGroup>
  );
};

export default Input;

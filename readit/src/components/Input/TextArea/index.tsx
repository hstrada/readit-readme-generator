import React from 'react';

import { FormGroup, FormInput, FormLabel } from './styles';

import { Props } from './interface';

const InputText: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  maxLength = 360,
}: Props) => {
  return (
    <FormGroup>
      <FormLabel htmlFor="first">{placeholder}</FormLabel>
      <FormInput value={value} maxLength={maxLength} onChange={onChange} />
    </FormGroup>
  );
};

export default InputText;

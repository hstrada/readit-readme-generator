import React from 'react';

import { Container } from './styles';

interface Props {
  value: string;
  placeholder?: string;
  key: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  value,
  onChange,
  key,
  placeholder,
}: Props) => {
  return (
    <Container
      type="text"
      key={key}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;

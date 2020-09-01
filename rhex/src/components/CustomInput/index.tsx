import React from 'react';

import { Container, Input } from './styles';

let a = 5;

const CustomInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange?: (event: React.ChangeEvent<{}>) => void;
}) => {
  return (
    <Container>
      <Input value={value} onChange={onChange} />
    </Container>
  );
};

export default CustomInput;

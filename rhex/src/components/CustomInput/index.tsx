import React from 'react';

import { Container, Input } from './styles';

const CustomInput = ({
  value,
  onChange,
  blah,
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

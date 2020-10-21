import React from 'react';

import { Container } from './styles';

import { Props } from './interface';

const Outline: React.FC<Props> = ({ linkTo, label, ...rest }: Props) => {
  return (
    <Container to={linkTo} {...rest}>
      {label}
    </Container>
  );
};

export default Outline;

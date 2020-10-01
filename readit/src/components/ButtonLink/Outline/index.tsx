import React from 'react';

import { Container } from './styles';

import { Props } from './interface';

const Outline: React.FC<Props> = ({ linkTo, ...rest }: Props) => {
  return (
    <Container to={linkTo} {...rest}>
      Support us
    </Container>
  );
};

export default Outline;

import React from 'react';
import { IButtonVariants } from './interface';

import { Container } from './styles';

const Flat = ({ variant = 'primary' }: IButtonVariants) => {
  return <Container>Generate</Container>;
};

export default Flat;

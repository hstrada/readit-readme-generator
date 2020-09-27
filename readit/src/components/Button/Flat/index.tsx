import React from 'react';
import { Props } from './interface';

import { Container } from './styles';

const Flat = ({ label }: Props) => {
  return <Container>{label}</Container>;
};

export default Flat;

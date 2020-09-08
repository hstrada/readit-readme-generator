import React from 'react';

import { Container } from './styles';

import { IButtonVariants } from './interface';

const Flat = ({ variant }: IButtonVariants) => {
  return <Container variant={variant}>Flat</Container>;
};

export default Flat;

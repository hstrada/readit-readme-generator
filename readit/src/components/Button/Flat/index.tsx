import React from 'react';

import { Container, ContainerB } from './styles';

import { IButtonVariants } from './interface';

const Flat = ({ variant }: IButtonVariants) => {
  return (
    <>
      <Container>Generate</Container>
      <ContainerB>Contact Us</ContainerB>
    </>
  );
};

export default Flat;

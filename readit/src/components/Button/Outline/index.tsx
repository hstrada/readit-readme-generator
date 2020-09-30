import React from 'react';

import { Container } from './styles';

interface Props {
  linkTo: string;
}

const Outline: React.FC<Props> = ({ linkTo, ...rest }: Props) => {
  return (
    <Container to={linkTo} {...rest}>
      Support us
    </Container>
  );
};

export default Outline;

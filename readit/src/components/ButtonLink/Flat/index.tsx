import React from 'react';
import { Props } from './interface';

import { Container } from './styles';

const Flat: React.FC<Props> = ({
  label,
  small = false,
  linkTo,
  ...rest
}: Props) => {
  return (
    <Container to={linkTo} small={small} {...rest}>
      {label}
    </Container>
  );
};

export default Flat;

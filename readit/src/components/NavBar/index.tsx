import React from 'react';
import Button from '../Button';

import { Container, Nav } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <Nav>
        <ul>
          <li>
            read<span>.</span>it
          </li>
        </ul>
        <ul>
          <li>
            <img src={require('../../assets/imgs/moon.png')} />
          </li>
          <li>
            <img src={require('../../assets/imgs/github.png')} />
          </li>
          <li>
            <Button.Flat
              variant="primary"
              label="Generate"
              linkTo="generator"
              small
            />
          </li>
        </ul>
      </Nav>
    </Container>
  );
};

export default NavBar;

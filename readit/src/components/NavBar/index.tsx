import React from 'react';
import ButtonLink from '../ButtonLink';

import { Container, Nav } from './styles';

import { IProps } from './interface';

const NavBar: React.FC<IProps> = ({ toggleTheme, theme }: IProps) => {
  const chooseIconTheme =
    theme === 'light'
      ? require('../../assets/imgs/moon.png')
      : require('../../assets/imgs/sun.png');

  return (
    <Container>
      <Nav>
        <ul>
          <li>
            read<span>.</span>it
          </li>
        </ul>
        <ul>
          <li onClick={toggleTheme}>
            <img src={chooseIconTheme} />
          </li>
          <li>
            <img src={require('../../assets/imgs/github.png')} />
          </li>
          <li>
            <ButtonLink.Flat
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

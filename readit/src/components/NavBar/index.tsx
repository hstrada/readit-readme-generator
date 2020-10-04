import React from 'react';
import ButtonLink from '../ButtonLink';

import { Container, Nav, Div, Logo } from './styles';

import { IProps } from './interface';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const NavBar: React.FC<IProps> = ({ toggleTheme, theme }: IProps) => {
  const chooseIconTheme =
    theme === 'light'
      ? require('../../assets/imgs/moon.png')
      : require('../../assets/imgs/sun.png');

  return (
    <Container>
      <Div>
        <Nav>
          <ul>
            <Logo
              onClick={() => {
                history.push('/');
                window.location.reload(false);
              }}
            >
              read<span>.</span>it
            </Logo>
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
      </Div>
    </Container>
  );
};

export default NavBar;

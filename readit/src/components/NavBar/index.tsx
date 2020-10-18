import React from 'react';
import ButtonLink from '../ButtonLink';

import { Container, Nav, Div, Logo } from './styles';

import { IProps } from './interface';

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

interface IconProps {
  light: {
    icon: string;
    github: string;
  };
  dark: {
    icon: string;
    github: string;
  };
}

const NavBar: React.FC<IProps> = ({ toggleTheme, theme }: IProps) => {
  const chooseIconTheme: IconProps = {
    light: {
      icon: require('../../assets/imgs/moon.png'),
      github: require('../../assets/imgs/github.png'),
    },
    dark: {
      icon: require('../../assets/imgs/sun.png'),
      github: require('../../assets/imgs/github-light.png'),
    },
  };

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
              <img src={chooseIconTheme[theme].icon} />
            </li>
            <li>
              <img src={chooseIconTheme[theme].github} />
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

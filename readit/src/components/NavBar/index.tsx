import React from 'react';
import ButtonLink from '../ButtonLink';

import {
  Container,
  Nav,
  Div,
  Logo,
  GithubIcon,
  SunIcon,
  MoonIcon,
  GlobeIcon,
} from './styles';

import { IProps } from './interface';

import { createBrowserHistory } from 'history';

// import i18n from '../../config/i18n';

import { useTranslation } from 'react-i18next';

const history = createBrowserHistory();

const NavBar: React.FC<IProps> = ({ toggleTheme, theme }: IProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: 'pt' | 'en') => {
    i18n.changeLanguage(lng);
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
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </li>
            <li>
              <a href="https://github.com/hstrada/readit-readme-generator">
                <GithubIcon />
              </a>
            </li>
            <li onClick={() => changeLanguage('en')}>
              <GlobeIcon />
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

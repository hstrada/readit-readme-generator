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

import { useTranslation } from 'react-i18next';

const history = createBrowserHistory();

const NavBar: React.FC<IProps> = ({ toggleTheme, theme }: IProps) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === 'en') i18n.changeLanguage('pt');
    else i18n.changeLanguage('en');
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
            <li onClick={() => changeLanguage()}>
              <GlobeIcon />
            </li>
            <li>
              <ButtonLink.Flat
                variant="primary"
                label={t('navbar.button')}
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

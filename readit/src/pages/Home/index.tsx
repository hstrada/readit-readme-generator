import React from 'react';

import {
  Main,
  Title,
  SubTitle,
  Container,
  Content,
  Image,
  ContentButton,
  ContentText,
  ButtonSupport,
} from './styles';

import { ButtonLink } from '../../components';

import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Main>
      <Container>
        <Content>
          <ContentText>
            <Title>
              {t('home.title')}
              <span>.</span>
            </Title>

            <SubTitle>{t('home.subtitle')}</SubTitle>
          </ContentText>
          <ContentButton>
            <ButtonLink.Flat
              label={t('home.buttons.generate')}
              linkTo="generator"
            />
            <ButtonSupport
              target="_blank"
              href="https://github.com/hstrada/readit-readme-generator/stargazers"
            >
              {t('home.buttons.supportUs')}
            </ButtonSupport>
          </ContentButton>
        </Content>

        <Image>
          <img
            alt="readme preview"
            src={require('../../assets/imgs/readme-light.png')}
          />
        </Image>
      </Container>
    </Main>
  );
};

export default Home;

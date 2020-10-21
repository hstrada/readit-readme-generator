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
            <ButtonLink.Outline
              linkTo="teste"
              label={t('home.buttons.supportUs')}
            />
          </ContentButton>
        </Content>

        <Image>
          <img src={require('../../assets/imgs/readme-light.png')} />
        </Image>
      </Container>
    </Main>
  );
};

export default Home;

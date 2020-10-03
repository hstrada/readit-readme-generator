import React from 'react';

import {
  Main,
  Title,
  Container,
  Content,
  Image,
  ContentButton,
  ContentText,
} from './styles';

import { ButtonLink, NavBar } from '../../components';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />

      <Main>
        <Container>
          <Content>
            <ContentText>
              <Title>
                Make github project readme easy and fast<span>.</span>
              </Title>

              <p>
                A generator that help you to make beautiful and complete readme.
                Let’s take a look?
              </p>
            </ContentText>
            <ContentButton>
              <ButtonLink.Flat label="Generate" linkTo="generator" />

              <ButtonLink.Outline linkTo="teste" />
            </ContentButton>
          </Content>

          <Image>
            <img src={require('../../assets/imgs/readme-light.png')} />
          </Image>
        </Container>
      </Main>
    </>
  );
};

export default Home;

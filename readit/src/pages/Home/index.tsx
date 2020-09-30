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

import { Button, NavBar } from '../../components';

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
              <Button.Flat label="Generate" linkTo="generator" />

              <Button.Outline linkTo="teste" />
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

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

import { Button } from '../../components';

const Home: React.FC = () => {
  return (
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
            <Button.Flat label="Generate" />
            <Button.Outline />
          </ContentButton>
        </Content>

        <Image>
          <p>aqui vai a imagem</p>
        </Image>
      </Container>
    </Main>
  );
};

export default Home;

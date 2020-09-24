import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  @media (min-width: 720px) {
    padding: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 720px) {
    max-width: 1120px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 560px 1fr;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContentText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 36px;
`;

export const ContentButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 720px) {
    flex-direction: row;
  }

  button + button {
    margin-top: 20px;
    @media (min-width: 720px) {
      margin-top: 0;
      margin-left: 48px;
    }
  }
`;

export const Title = styled.h1`
  font: 700 44px Poppins;
  color: #202020;
  text-align: left;
  line-height: 57px;
  margin-bottom: 24px;
  & > span {
    color: #1771f7;
  }
`;

export const Image = styled.div`
  display: none;
  @media (min-width: 720px) {
    display: inline;
  }
`;

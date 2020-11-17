import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background};
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

  a + a {
    margin-top: 20px;
    @media (min-width: 720px) {
      margin-top: 0;
      margin-left: 48px;
    }
  }
`;

export const Title = styled.h1`
  font: 700 44px Poppins;
  color: ${({ theme }) => theme.colors.text.title};
  text-align: left;
  line-height: 57px;
  margin-bottom: 24px;
  & > span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.text.subtitle};
`;

export const Image = styled.div`
  display: none;
  @media (min-width: 720px) {
    display: inline;
  }
`;

export const ButtonSupport = styled.a`
  padding: 12px 24px;
  font: 600 20px Poppins;
  text-align: center;
  text-decoration: none;
  border: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.button.outline.background};
  border: 2px solid ${({ theme }) => theme.colors.button.outline.border};
  color: ${({ theme }) => theme.colors.button.outline.font};
  &:hover {
    background-color: #f6f6f6;
  }

  @media (min-width: 720px) {
    width: initial;
  }
`;

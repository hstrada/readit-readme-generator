import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 20px;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const ContentText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 36px;

  @media (min-width: 1200px) {
    max-width: 560px;
  }
`;

export const ContentButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width:  1200px) {
    flex-direction: row;
  max-width: 560px;
  }

  a + a {
    margin-top: 20px;
    @media (min-width: 1200px) {
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
  @media (min-width: 1200px) {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 80%;
    display: inline;
  }

  > img {
    height: 100%;
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
  

  @media (min-width: 1200px) {
    width: initial;
  }
`;

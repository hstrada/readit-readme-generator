import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 0 24px;
  @media (min-width: 720px) {
    padding: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 720px) {
    max-width: 1120px;
    margin: 0 auto;
  }
`;

import styled from 'styled-components';

export const Container = styled.header`
  top: 0;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  width: 100%;
  height: 60px;
  z-index: 5;
  padding: 12px 24px;
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.primary};
  @media (min-width: 720px) {
    max-width: 100%;
  }
`;

export const Div = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    align-content: center;
    align-items: center;

    li {
      display: inline;
      & > span {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    :last-child {
      li {
        padding-left: 24px;
      }
    }
  }
`;

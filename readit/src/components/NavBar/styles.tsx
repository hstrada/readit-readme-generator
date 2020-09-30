import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  height: 60px;
  z-index: 5;
  padding: 12px 24px;
  @media (min-width: 720px) {
    width: 1120px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    padding: 12px 0 0 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex: 1;
  height: 100%;
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

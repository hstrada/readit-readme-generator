import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  height: 54px;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-width: 0px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 20px;
  padding-left: 12px;
  color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 720px) {
    width: 70%;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  &:focus {
    border-color: rgba(23, 113, 247, 0.7);
    border-width: 2px;
    border-style: solid;
  }
`;

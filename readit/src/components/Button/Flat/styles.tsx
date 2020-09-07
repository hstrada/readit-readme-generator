import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: ${({ theme }) => theme.colors.tertiary};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: ${({ theme }) => theme.units.button.width};
  height: ${({ theme }) => theme.units.button.height};

  &:hover {
    background-color: #085ddd;
  }
`;

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
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 14px;

  &:hover {
    background-color: #085ddd;
  }
`;

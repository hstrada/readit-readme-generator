import styled from 'styled-components';

export const Container = styled.input`
  width: 430px;
  height: 54px;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-width: 0px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 20px;
  padding-left: 12px;
`;

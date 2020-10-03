import styled, { css } from 'styled-components';

import { StyledProps } from './interface';

export const FormGroup = styled.div`
  position: relative;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 54px;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-width: 0px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 20px;
  padding-left: 12px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 24px;

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

const floatingConfig = css`
  top: -20px;
  left: 0px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral};
`;

export const FormLabel = styled.label<StyledProps>`
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 14px;
  transition: 0.3s ease all;
  color: ${({ theme }) => theme.colors.tertiary};

  ${({ hasValue }) => hasValue && floatingConfig};

  ${FormInput}:focus ~ & {
    ${floatingConfig}
  }
`;

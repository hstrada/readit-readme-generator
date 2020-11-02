import styled from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.textarea`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.input.background};
  border-width: 0px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-size: 16px;
  padding-left: 12px;
  color: ${({ theme }) => theme.colors.input.color};
  margin-bottom: 24px;
  resize: none;
  padding: 24px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  &:focus {
    border-bottom-color: rgba(23, 113, 247, 1);
    border-bottom-width: 2px;
    border-bottom-style: solid;
  }
`;

export const FormLabel = styled.label`
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 12px;
  font-size: 20px;
`;

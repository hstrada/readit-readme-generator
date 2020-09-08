import styled from 'styled-components';

import { Variants, IButtonVariants } from './interface';
import colors from '../../../theme/colors';

const ButtonVariants: Variants = {
  primary: {
    backgroundColor: colors.primary,
    fontColor: 'tertiary',
    fullWidth: false,
    fontSize: '14px',
    width: '90px',
    height: '40px',
  },
  secondary: {
    backgroundColor: colors.secondary,
    fontColor: 'tertiary',
    fullWidth: false,
    fontSize: '20px',
    width: '140px',
    height: '50px',
  },
};

export const DefaultContainer = styled.button`
  padding: 12px 24px;
  margin: 12px 24px;
  font: 20px Poppins;
  text-align: center;
  text-decoration: none;
  border: 0;
`;

// small - 8px 12px
// font-size: 14px

export const Container = styled(DefaultContainer)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.tertiary};
  &:hover {
    background-color: #085ddd;
  }
`;

export const ContainerB = styled(DefaultContainer)`
  background-color: transparent;
  border: 2px solid #000;
  color: #000;
  &:hover {
    background-color: red;
  }
`;

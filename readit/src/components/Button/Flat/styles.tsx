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

export const Container = styled.button<IButtonVariants>`
  background-color: ${({ variant }) => ButtonVariants[variant].backgroundColor};
  border: none;
  color: ${({ theme }) => theme.colors.tertiary};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: ${({ variant }) => ButtonVariants[variant].width};
  height: ${({ theme }) => theme.units.button.height};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 14px;

  &:hover {
    background-color: #085ddd;
  }
`;

export interface IButtonVariants {
  variant?: 'primary' | 'secondary';
}

interface Props {
  backgroundColor: string;
  fontColor: string;
  fullWidth: boolean;
  fontSize: string;
  width: string;
  height: string;
}

export interface Variants {
  primary: Props;
  secondary: Props;
}

export interface Props {
  variant?: 'primary' | 'secondary';
  label: string;
  small?: boolean;
  onClick?: () => void;
}

export interface StyledProps {
  small?: boolean;
}

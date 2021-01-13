export interface StyledProps {
  hasValue?: boolean;
}

export interface Props {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

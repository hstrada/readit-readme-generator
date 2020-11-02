export interface StyledProps {
  hasValue?: boolean;
}

export interface Props {
  value: string;
  placeholder?: string;
  key: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Props {
  value: string;
  placeholder?: string;
  key: string | number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength?: number;
}

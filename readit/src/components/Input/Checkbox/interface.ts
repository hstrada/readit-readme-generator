export interface IItem {
  text: string;
  isCompleted: boolean;
}

export interface Props {
  value?: string;
  todo: IItem;
  index: number;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
  onChange: (e: any) => any;
}

export interface StyledProps {
  isCompleted?: boolean;
}

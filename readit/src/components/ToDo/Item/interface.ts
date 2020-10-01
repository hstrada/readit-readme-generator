export interface IItem {
  text: string;
  isCompleted: boolean;
}

export interface Props {
  todo: IItem;
  index: number;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

export interface StyledProps {
  isCompleted?: boolean;
}

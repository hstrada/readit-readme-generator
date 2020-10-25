import React from 'react';

import { Container, ButtonAdd, ButtonDelete } from './styles';

import { Props } from './interface';

const Item: React.FC<Props> = ({
  todo,
  index,
  completeTodo,
  removeTodo,
}: Props) => {
  return (
    <Container isCompleted={todo.isCompleted}>
      {todo.text}
      <div>
        <ButtonAdd onClick={() => completeTodo(index)}>
          {todo.isCompleted ? (
            <img
              alt="check item"
              src={require('../../../assets/imgs/check.png')}
            />
          ) : (
            <img
              alt="uncheck item"
              src={require('../../../assets/imgs/unchecked.png')}
            />
          )}
        </ButtonAdd>
        <ButtonDelete onClick={() => removeTodo(index)}>
          <img
            alt="delete item"
            src={require('../../../assets/imgs/delete.png')}
          />
        </ButtonDelete>
      </div>
    </Container>
  );
};

export default Item;

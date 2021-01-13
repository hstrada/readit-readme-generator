import React, { useState } from 'react';

import { Container, Check, Icon, Label, ContainerCheck } from './styles';

import { Props } from './interface';

const Checkbox: React.FC<Props> = ({
  todo,
  value,
  index,
  removeTodo,
  completeTodo,
  onChange,
}: Props) => {
  const [labelValue, setLabelValue] = useState(value);

  return (
    <Container>
      <ContainerCheck
        onClick={() => completeTodo(index)}
        isCompleted={todo.isCompleted}
      >
        <Check />
      </ContainerCheck>
      <Label
        data-testid="future-improvements"
        type="text"
        value={labelValue}
        onChange={e => {
          onChange(e);
          setLabelValue(e.target.value);
        }}
      />
      <Icon onClick={() => removeTodo(index)} />
    </Container>
  );
};

export default Checkbox;

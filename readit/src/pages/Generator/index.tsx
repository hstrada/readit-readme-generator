import React, { useState } from 'react';

import { generate } from '../../utils';

import { Button, ToDo, TextArea } from '../../components';

import { Main, Container, ContainerButton, ContainerForm } from './styles';

import { IItem } from '../../components/ToDo/Item/interface';
import { IQuestions } from './interface';

const defaultQuestions: IQuestions[] = [
  {
    question: 'Project Name',
    answer: '',
  },
  {
    question: 'Project Description',
    answer: '',
  },
];

const Generator: React.FC = () => {
  const todoList: Array<IItem> = [];

  const answeredQuestions: IQuestions[] = [];
  defaultQuestions.forEach(val =>
    answeredQuestions.push(Object.assign({}, val)),
  );

  const [values, setValues] = useState({
    questions: answeredQuestions,
    todoList: todoList,
  });

  const handleQA = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number,
  ) => {
    const allQA = [...values.questions];

    const selectedQA = allQA[index];
    selectedQA.answer = e.target.value;

    setValues({ ...values, questions: allQA });
  };

  const addTodo = (text: string) => {
    const newTodos = [
      ...values.todoList.concat({ text: text, isCompleted: false }),
    ];
    setValues({ ...values, todoList: newTodos });
  };

  const completeTodo = (index: number) => {
    const newTodos = [...values.todoList];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setValues({ ...values, todoList: newTodos });
  };

  const removeTodo = (index: number) => {
    const newTodos = [...values.todoList];
    newTodos.splice(index, 1);
    setValues({ ...values, todoList: newTodos });
  };

  const downloadReadme = () =>
    generate.download({
      questions: values.questions,
      futureImprovements: values.todoList,
    });

  const cleanForm = () => {
    setValues({
      ...values,
      questions: defaultQuestions,
      todoList: [],
    });
  };

  return (
    <Main>
      <Container>
        {values.questions.map((value, index) => {
          return (
            <TextArea
              key={index}
              value={value.answer}
              placeholder={value.question}
              onChange={e => handleQA(e, index)}
            />
          );
        })}

        <ContainerForm>
          <ToDo.Form addTodo={addTodo} />
        </ContainerForm>

        {values.todoList.map((todo: IItem, index: number) => (
          <ToDo.Item
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}

        <ContainerButton>
          <Button.Outline label="Clean" onClick={cleanForm} />
          <Button.Flat onClick={downloadReadme} label="Download" />
        </ContainerButton>
      </Container>
    </Main>
  );
};

export default Generator;

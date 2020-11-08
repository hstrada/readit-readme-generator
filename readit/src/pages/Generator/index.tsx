import React, { useState } from 'react';

import { generate } from '../../utils';

import { Button, Input } from '../../components';

import {
  Main,
  Container,
  ContainerButton,
  ContainerForm,
  ContainerInputValues,
  ContainerInputTitle,
  ContainerFormButton,
  PlusIcon,
} from './styles';

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

  const editTodo = (editText: string, index: number) => {
    const editTodos = [...values.todoList];
    editTodos[index].text = String(editText);
    setValues({ ...values, todoList: editTodos });
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
            <Input.TextArea
              key={index}
              value={value.answer}
              placeholder={value.question}
              onChange={e => handleQA(e, index)}
            />
          );
        })}

        <ContainerInputValues>
          <ContainerInputTitle>Future Improvements</ContainerInputTitle>
          {values.todoList.map((todo: IItem, index: number) => (
            <Input.Checkbox
              key={index}
              index={index}
              todo={todo}
              value={todo.text}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              onChange={e => editTodo(e.target.value, index)}
            />
          ))}
        </ContainerInputValues>

        <ContainerForm>
          <ContainerFormButton onClick={() => addTodo('')}>
            <PlusIcon />
            Add new topic
          </ContainerFormButton>
        </ContainerForm>

        <ContainerButton>
          <Button.Outline label="Clean" onClick={cleanForm} />
          <Button.Flat onClick={downloadReadme} label="Download" />
        </ContainerButton>
      </Container>
    </Main>
  );
};

export default Generator;

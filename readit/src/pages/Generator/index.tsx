import React, { useState, FormEvent } from 'react';

import { generate } from '../../utils';

import { Input, NavBar, Button, ToDo } from '../../components';

import {
  Main,
  Container,
  Form,
  ContainerButton,
  List,
  InputList,
} from './styles';

const Generator = () => {
  const questions = [
    {
      question: 'Project Name',
      answer: '',
    },
    {
      question: 'Project Description',
      answer: '',
    },
  ];

  const todoList: Array<{ text: string; isCompleted: boolean }> = [];

  const [values, setValues] = useState({
    questions: questions,
    todoList: todoList,
  });

  const [todoItem, setTodoItem] = useState({ text: '', isCompleted: false });

  const handleQA = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const allQA = [...values.questions];

    const selectedQA = allQA[index];
    selectedQA.answer = e.target.value;

    setValues({ ...values, questions: allQA });
  };

  const [todos, setTodos] = React.useState<any>([]);

  const addTodo = (text: any) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index: any) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index: any) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <NavBar />

      <Main>
        <Container>
          {values.questions.map((value, index) => {
            return (
              <Input
                key={index}
                value={value.answer}
                placeholder={value.question}
                onChange={e => handleQA(e, index)}
              />
            );
          })}

          {/* <Form onSubmit={handleTodoList}>
            <Input
              value={todoItem.text}
              key="todoItem"
              placeholder="item description"
              onChange={e => setTodoItem(e.target.value)}
            />
            <Button.Flat label="Add" />
          </Form> */}
          <InputList>
            <input type="checkbox" />
            <span>exemplo</span>
          </InputList>
          {values.todoList.map((element, index) => {
            return (
              <InputList>
                <input type="checkbox" />
                <span>{element}</span>
              </InputList>
            );
          })}

          {todos.map((todo: any, index: any) => (
            <ToDo.Item
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <ToDo.Form addTodo={addTodo} />

          <ContainerButton>
            <Button.Outline label="Clean" />
            {/* <Button.Flat
              onClick={() =>
                generate.download({
                  questions: values.questions,
                  futureImprovements: values.todoList,
                })
              }
              label="Download"
            /> */}
          </ContainerButton>
        </Container>
      </Main>
    </div>
  );
};

// return (
//   <div className="app">
//     <div className="todo-list">
//       {todos.map((todo: any, index: any) => (
//         <ToDo.Item
//           key={index}
//           index={index}
//           todo={todo}
//           completeTodo={completeTodo}
//           removeTodo={removeTodo}
//         />
//       ))}
//       <ToDo.Form addTodo={addTodo} />
//     </div>
//   </div>
// );

export default Generator;

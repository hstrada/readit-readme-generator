import React, { useState } from 'react';

import { generate } from '../../utils';

import { Input, NavBar, Button, ToDo } from '../../components';

import { Main, Container, ContainerButton, ContainerForm } from './styles';
import { IItem } from '../../components/ToDo/Item/interface';

const Generator: React.FC = () => {
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

  const todoList: Array<IItem> = [];

  const [values, setValues] = useState({
    questions: questions,
    todoList: todoList,
  });

  const handleQA = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const allQA = [...values.questions];

    const selectedQA = allQA[index];
    selectedQA.answer = e.target.value;

    setValues({ ...values, questions: allQA });
  };

  const addTodo = (text: any) => {
    const newTodos = [
      ...values.todoList.concat({ text: text, isCompleted: false }),
    ];
    setValues({ ...values, todoList: newTodos });
  };

  const completeTodo = (index: any) => {
    const newTodos = [...values.todoList];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setValues({ ...values, todoList: newTodos });
  };

  const removeTodo = (index: any) => {
    const newTodos = [...values.todoList];
    newTodos.splice(index, 1);
    setValues({ ...values, todoList: newTodos });
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
            <Button.Outline label="Clean" />
            <Button.Flat
              onClick={() =>
                generate.download({
                  questions: values.questions,
                  futureImprovements: values.todoList,
                })
              }
              label="Download"
            />
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

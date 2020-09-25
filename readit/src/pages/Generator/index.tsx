import React, { useState, FormEvent } from 'react';

import '../../styles/global.css';

import { generate } from '../../utils';

import { Button, Row, Col } from '../../components';

const TextInput = ({
  value,
  onChange,
  key,
}: {
  value: string;
  key: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <input type="text" key={key} value={value} onChange={onChange} />
  </div>
);

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

  const todoList: Array<string> = [];

  const [values, setValues] = useState({
    questions: questions,
    todoList: todoList,
  });

  const [todoItem, setTodoItem] = useState('');

  const handleQA = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const allQA = [...values.questions];

    const selectedQA = allQA[index];
    selectedQA.answer = e.target.value;

    setValues({ ...values, questions: allQA });
  };

  const download = () => {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' +
        encodeURIComponent(
          generate.readme({
            qa: values.questions,
            futureImprovements: values.todoList,
          }),
        ),
    );
    element.setAttribute('download', 'README.md');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const handleTodoList = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValues({ ...values, todoList: [...values.todoList.concat(todoItem)] });
    setTodoItem('');
  };

  return (
    <div>
      Perguntas
      <br />
      {values.questions.map((value, index) => {
        console.log(value);
        return (
          <label>
            {value.question}
            <TextInput
              key={index}
              value={value.answer}
              onChange={e => handleQA(e, index)}
            />
          </label>
        );
      })}
      <br />
      ToDo List
      <br />
      <form onSubmit={handleTodoList}>
        <input
          type="text"
          value={todoItem}
          onChange={e => setTodoItem(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
      <br />
      {values.todoList.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
      <br />
      <button onClick={() => download()}>Download Readme</button>
      <br />
    </div>
  );
};

export default Generator;

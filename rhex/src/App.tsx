import React, { useState, FormEvent } from 'react';

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

const App = () => {
  const questions = [
    {
      question: 'Pergunta A',
      answer: '',
    },
    {
      question: 'Pergunta B',
      answer: '',
    },
  ];

  const [values, setValues] = useState(questions);
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState<Array<string>>([]);

  const handleQA = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const allQA = [...values];

    const selectedQA = allQA[index];
    selectedQA.answer = e.target.value;

    setValues(allQA);
  };

  const download = () => {
    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent('texto'),
    );
    element.setAttribute('download', 'README.md');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const handleTodoList = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodoList([...todoList.concat(todoItem)]);
    setTodoItem('');
  };

  return (
    <div>
      <button onClick={() => download()}>clique-me</button>
      <br />
      Perguntas
      {values.map((value, index) => {
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
      {todoList.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </div>
  );
};

export default App;

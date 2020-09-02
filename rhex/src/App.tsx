import React, { useState } from 'react';

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
  }

  return (
    <div>
      <button onClick={() => download()}>clique-me</button>
      <br />
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
    </div>
  );
};

export default App;

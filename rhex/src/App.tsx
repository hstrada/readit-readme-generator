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

  return (
    <div>
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

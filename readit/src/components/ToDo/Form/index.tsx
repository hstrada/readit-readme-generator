import React from 'react';

const Form = ({ addTodo }: any) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button onClick={handleSubmit}>teste</button>
    </form>
  );
};

export default Form;

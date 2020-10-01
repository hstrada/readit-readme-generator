import React from 'react';

import Input from '../../Input';

const Form = ({ addTodo }: any) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        key="input"
        placeholder="item description"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export default Form;

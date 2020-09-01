import React from 'react';

import { CustomInput } from './components';

function App() {
  return (
    <div className="App">
      hello world
      <CustomInput value="hello" onChange={(e) => console.log(e)} />
    </div>
  );
}

export default App;

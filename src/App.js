import React from 'react';
import './App.css';

/* eslint-disable no-console, no-param-reassign */

const App = () => (
  <div className="App">
    <div
      role="presentation"
      style={{ padding: '15px 0px' }}
      onClick={() => {
        const c = 30;
        console.log(c);
      }}
    >
      <img src="https://reactjs.org/logo-og.png" alt="test" />
    </div>
  </div>
);

export default App;

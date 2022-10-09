import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Test1 from './features/counter/Test1';
import Test2 from './features/counter/Test2';
import Test3 from './features/counter/Test3';
import Test4 from './features/counter/Test4';
import Test5 from './features/counter/Test5';
import Test6 from './features/counter/Test6';
import { Homeric, HomericKey } from './Homeric';

const a: HomericKey = 'abbreviations_click';
console.log(a)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {Homeric.ABBREVIATIONS_CLICK}
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      {/* <Test1 /> */}
      {/* <Test2 />
      <Test3 /> */}
      {/* <Test4 /> */}
      <Test5 />
      <Test6 />
    </div>
  );
}

export default App;

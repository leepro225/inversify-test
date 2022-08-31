import React, { useEffect } from 'react';
import logo from './logo.svg';
import "./App.css";
import init from "./test/main";
import solution1 from "./test/solution1";
import solution2 from "./test/solution2";

function App() {
  useEffect(() => {
    init();
    solution1();
    solution2();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>콘솔을 확인하세요.</p>
      </header>
    </div>
  );
}

export default App;

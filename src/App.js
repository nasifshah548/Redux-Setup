import React from "react";
// import store from "./store/store";
// import StoreContext from "./contexts/storeContext";
// import { Provider } from "react-redux";
// import TaskClass from "./components/TaskClass";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  return (
    <div>
      <AddTask />
      <Tasks />
    </div>
  );
};

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

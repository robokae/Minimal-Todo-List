import React, { useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import WebFont from 'webfontloader';

function App() {
  useEffect(() => {
    WebFont.load({
        google: {
            families: ['Inter']
        }
    });
  }, []);
  
  return (
    <div className="App">
      <h1 className="title">Minimal Todo List</h1>
      <span className="subtitle">(Made with React)</span>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;

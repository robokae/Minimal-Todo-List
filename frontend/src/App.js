import React, { useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import WebFont from 'webfontloader';

function App() {
  // Load Google fonts
  useEffect(() => {
    WebFont.load({
        google: {
            families: ['Karla', 'Karla:bold']
        }
    });
  }, []);
  
  return (
    <div className="App">
      <h1 className="title">Minimal Todo List</h1>
      <span className="subtitle">(Made with React)</span>
      <AddTodo />
    </div>
  );
}

export default App;

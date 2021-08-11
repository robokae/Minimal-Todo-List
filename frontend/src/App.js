import React, { useEffect } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import WebFont from 'webfontloader';

function App() {
  // Load Google fonts
  useEffect(() => {
    WebFont.load({
        google: {
            families: ['Inter', 'Inter:bold']
        }
    });
  }, []);
  
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">{Date().toLocaleString()}</h1>
        {/* <span className="subtitle">(Made with React)</span> */}
        <AddTodo />
      </div>
    </div>
  );
}

export default App;

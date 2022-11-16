import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
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

  // Determining the time of day (morning, afternoon, or evening)
  const hour = new Date().getHours();
  let timeOfDay = "";

  if (hour >= 0 && hour < 12) {
    timeOfDay = "Morning"
  } else if (hour => 12 && hour < 6) {
    timeOfDay = "Afternoon"
  } else {
    timeOfDay = "Evening"
  }
  
  return (
    <div className="App">
      <Navbar /> 
      <div className="container">
        <h1 className="title">Good {timeOfDay}</h1>
        <AddTodo />
      </div>
    </div>
  );
}

export default App;

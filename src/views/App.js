import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Navbar from "../components/Navbar";
import AddTodo from "../components/AddTodo";
import WebFont from "webfontloader";
import TodoList from "../components/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todoToAdd) => {
    setTodoList((currentTodos) => [...currentTodos, todoToAdd]);
  };

  const deleteTodo = (todoIndex) => {
    setTodoList(todoList.filter((todo, index) => index !== todoIndex));
  };

  // Load Google fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter", "Inter:bold"],
      },
    });
  }, []);

  // Determining the time of day (morning, afternoon, or evening)
  const getTimeOfDay = () => {
    const hour = new Date().getHours();

    if (hour >= 0 && hour < 12) {
      return "Morning";
    } else if (hour >= 12 && hour < 6) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1 className="title">Good {getTimeOfDay()}</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default App;

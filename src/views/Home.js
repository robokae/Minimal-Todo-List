import React, { useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todoToAdd) => {
    setTodoList((currentTodos) => [...currentTodos, todoToAdd]);
  };

  const deleteTodo = (todoIndex) => {
    setTodoList(todoList.filter((todo, index) => index !== todoIndex));
  };

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
    <div className="home">
      <div className="home__content">
        <h2 className="home__heading">Good {getTimeOfDay()}</h2>
        <AddTodo addTodo={addTodo} />
        <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default Home;

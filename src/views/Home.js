import React from "react";
import AddTodo from "../components/todo/AddTodoInput";
import TodoList from "../components/todo/TodoList";

const Home = () => {
  // Determining the time of day (morning, afternoon, or evening)
  const getTimeOfDay = () => {
    const hour = new Date().getHours();

    if (hour >= 0 && hour < 12) {
      return "Morning";
    } else if (hour >= 12 && hour < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };

  return (
    <div className="home">
      <div className="home__content">
        <h2 className="home__heading">Good {getTimeOfDay()}</h2>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default Home;

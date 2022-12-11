import React from "react";
import AddTodo from "../components/todo/CreateTodo";
import TodoList from "../components/todo/TodoList";
import getTimeOfDay from "../util/getTimeOfDay";

const Home = () => {
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

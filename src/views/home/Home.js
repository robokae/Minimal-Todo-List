import React from "react";
import AddTodo from "../../components/todo/CreateTodo";
import TodoList from "../../components/todo/TodoList";
import getTimeOfDay from "../../util/getTimeOfDay";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Good {getTimeOfDay()}</h2>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default Home;

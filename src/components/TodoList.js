import React from "react";
import "../styles/TodoList.css";
import Todo from "./Todo";

const TodoList = ({ todoList, deleteTodo }) => {
  return (
    <div className="todoList">
      {todoList.length === 0 ? (
        <p className="noTodosMessage">You currently do not have any todos!</p>
      ) : (
        todoList.map((todo, index) => (
          <Todo
            key={index}
            todoIndex={index}
            todo={todo}
            deleteTodo={deleteTodo}
            displayLine={index === 0 ? true : false}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;

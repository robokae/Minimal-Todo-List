import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, deleteTodo }) => {
  return (
    <div className="todo-list">
      <div className="todo-list__content">
        {todoList.length === 0 ? (
          <p className="todo-list__no-todos-message">
            You currently do not have any todos!
          </p>
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
    </div>
  );
};

export default TodoList;

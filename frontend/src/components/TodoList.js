import React from 'react';
import './TodoList.css';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let noTodosMessage = <p className="noTodosMessage">You currently do not have any todos!</p>;

        return (
            <div className="todoList">
                <h2 className="subheading">Todos</h2>
                {this.props.todos.length == 0 
                    ? noTodosMessage 
                    : this.props.todos.map((todoEntry) => <Todo todoEntry={todoEntry} />
                )}
            </div>
        );
    } 
}

export default TodoList;
import React, { useState } from 'react';
import './AddTodo.css';
import TodoList from './TodoList';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoToAdd: '',
            todos: []
        };

        this.addTodoToList = this.addTodoToList.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    addTodoToList(e) {
        const newTodoList = this.state.todos.concat(this.state.todoToAdd);

        this.setState({
            todos: newTodoList
        });

        e.preventDefault();
    }

    updateValue(e) {
        this.setState({
            todoToAdd: e.target.value
        });
    }

    render() {
        let noTodosMessage = <p>You currently have no todos!</p>
        return (
            <div>
                <form onSubmit={this.addTodoToList}>
                    <input type="text" value={this.state.todoToAdd} onChange={this.updateValue} name="todoToAdd" className="todoToAdd" placeholder="Add a todo" autoComplete="off"/>
                </form>
                <TodoList todos={this.state.todos} />
            </div>
        );
        
    }
}

export default AddTodo;
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
        // Adds the new todo to a new array
        const newTodoList = this.state.todos.concat(this.state.todoToAdd);

        // Updating the state with the new array
        this.setState({
            todoToAdd: '',
            todos: newTodoList
        });

        e.preventDefault();
    }

    // Updates the todo with the user input
    updateValue(e) {
        this.setState({
            todoToAdd: e.target.value
        });
    }

    render() {
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
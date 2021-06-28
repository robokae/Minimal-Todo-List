import React from 'react';
import './AddTodo.css';
import TodoList from './TodoList';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoToAdd: '',
            todos: [],
            completedTodos: []
        };

        this.addTodoToList = this.addTodoToList.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.addToCompletedTodos = this.addToCompletedTodos.bind(this);
        this.removeFromCompletedTodos = this.removeFromCompletedTodos.bind(this);
    }

    addTodoToList(e) {
        // Adds the new todo to a new array
        const newTodoList = this.state.todos.concat({todo: this.state.todoToAdd, completed: false});

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

    addToCompletedTodos(todoIndex) {
        const completedTodo = this.state.todos[todoIndex];
        // this.state.todos.splice(todoIndex, 1);

        this.setState({
            completedTodos: this.state.completedTodos.concat(completedTodo)
        });

    }

    removeFromCompletedTodos(todoIndex) {
        const todo = this.state.todos[todoIndex].todo;

        for (let i = 0; i < this.state.completedTodos.length; i++) {
            if (this.state.completedTodos[i].todo === todo) {
                this.state.completedTodos.splice(i, 1);
            }
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.addTodoToList}>
                    <input type="text" value={this.state.todoToAdd} onChange={this.updateValue} name="todoToAdd" className="todoToAdd" placeholder="Add a todo" autoComplete="off"/>
                </form>
                <TodoList addToComplete={this.addToCompletedTodos} removeFromComplete={this.removeFromCompletedTodos} todos={this.state.todos} />
            </div>
        );
        
    }
}

export default AddTodo;
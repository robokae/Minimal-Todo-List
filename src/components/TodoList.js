import React from 'react';
import './styles/TodoList.css';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {numCompletedTodos: 0};
        
        this.addTodoToComplete = this.addTodoToComplete.bind(this);
        this.removeTodoFromComplete = this.removeTodoFromComplete.bind(this);
    }

    addTodoToComplete(todoIndex) {
        this.setState({numCompletedTodos: this.state.numCompletedTodos + 1});
        this.props.addToComplete(todoIndex);
    }

    removeTodoFromComplete(todoIndex) {
        this.setState({numCompletedTodos: this.state.numCompletedTodos - 1});
        this.props.removeFromComplete(todoIndex);
    }

    getNumTodos() {
        let numTodos = 0;

        for (let i = 0; i < this.props.todos.length; i++) {
            if (this.props.todos[i].completed === false) {
                numTodos++;
            }
        }

        return numTodos;
    }

    render() {
        let noTodosMessage = <p className="noTodosMessage">You currently do not have any todos!</p>;
        let todosLength = this.props.todos.length;
        let message;

        if (todosLength === 0) {
            message = "Todo";
        }

        else if (todosLength - this.state.numCompletedTodos === 0) {
            message = "All Done";
        }

        else if (todosLength === 1 || todosLength - this.state.numCompletedTodos === 1) {
            message = "Todo";
        }

        else {
            message = "Todos";
        }

        return (
            <div className="todoList">
                <h2 className="subheading">
                    {/* Display gramatically correct string */}
                    {todosLength - this.state.numCompletedTodos === 0 ? '' : todosLength - this.state.numCompletedTodos + ' '}  
                    {message}               
                </h2>
                {/* <div className="horizontalLine"></div> */}
                <div className="verticalLine"></div>
                <h2 className="subheading completedSubheading">Completed</h2>
                {todosLength === 0 
                    ? noTodosMessage                                                            // Display no todos message if no todos in array
                    : this.props.todos.map((todoEntry, index) =>                                // Else, display each todo
                        <Todo 
                            addTodoToComplete={this.addTodoToComplete}
                            removeTodoFromComplete={this.removeTodoFromComplete}
                            todoIndex={index}
                            todoEntry={todoEntry} 
                            displayLine={todoEntry.todo === this.props.todos[0].todo            // Display the top horizontal line for the first todo only
                                ? true
                                : false
                            }
                        />
                )}
            </div>
        );
    } 
}

export default TodoList;
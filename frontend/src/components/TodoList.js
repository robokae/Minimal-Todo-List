import React from 'react';
import './TodoList.css';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let noTodosMessage = <p className="noTodosMessage">You currently do not have any todos!</p>;
        let todosLength = this.props.todos.length;
        
        return (
            <div className="todoList">
                <h2 className="subheading">
                    {/* Display gramatically correct string */}
                    {todosLength == 0 ? '' : todosLength + ' '}                 
                    {todosLength <= 1 ? 'Todo' : ' Todos'}</h2>
                {todosLength === 0 
                    ? noTodosMessage                                            // Display no todos message if no todos in array
                    : this.props.todos.map((todoEntry) =>                       // Else, display each todo
                        <Todo 
                            todoEntry={todoEntry} 
                            displayLine={todoEntry === this.props.todos[0]      // Display the top horizontal line for the first todo only
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
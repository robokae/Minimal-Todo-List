import React from 'react';
import './TodoList.css';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 className="subheading">Todos</h2>
                <Todo />
            </div>
        );
    } 
}

export default TodoList;
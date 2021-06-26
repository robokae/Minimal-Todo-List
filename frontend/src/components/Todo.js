import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="horizontalLine"></div>
                <div className="todoItemContainer">
                    <div className="todoItem">{this.props.todoEntry}</div>
                    <div className="todoOptionsContainer"></div>
                </div>
                <div className="horizontalLine"></div>
            </div>
        );
    }
}

export default Todo;
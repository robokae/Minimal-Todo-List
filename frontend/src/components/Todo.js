import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <hr />
                <div className="todoItem">A placeholder todo</div>
                <div className="todoOptionsContainer"></div>
                <hr />
            </div>
        );
    }
}

export default Todo;
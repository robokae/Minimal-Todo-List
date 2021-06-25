import React from 'react';
import './AddTodo.css';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form action="">
                    <input type="text" name="todoToAdd" className="todoToAdd" placeholder="Add a todo"/>
                </form>
            </div>
        );
        
    }
}

export default AddTodo;
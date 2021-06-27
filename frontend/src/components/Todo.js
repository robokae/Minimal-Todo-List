import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* Display top horizontal line for the first todo only */}
                {this.props.displayLine === true && <div className="horizontalLine"></div>}         
                <div className="todoItemContainer">
                    <FontAwesomeIcon icon={["far", "thumbs-up"]} className="thumbsUpIcon" />
                    <div className="todoItem">{this.props.todoEntry}</div>
                    <div className="todoOptionsContainer">
                        <FontAwesomeIcon icon={["far","star"]} className="starIcon" />
                        <FontAwesomeIcon icon={["fas", "trash"]} className="trashIcon" />
                        <FontAwesomeIcon icon={["fas", "ellipsis-h"]} className="ellipsisIcon" />
                    </div>
                </div>
                <div className="horizontalLine"></div>
            </div>
        );
    }
}

export default Todo;
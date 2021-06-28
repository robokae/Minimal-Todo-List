import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Todo.css';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: "invisible",
            animation: ""
        };

        this.todoItemContainerRef = React.createRef();
        this.deleteButtonRef = React.createRef();

        this.updateTodoStatus = this.updateTodoStatus.bind(this);
        this.changeVisibility = this.changeVisibility.bind(this);
    }

    updateTodoStatus(e) {
        if (this.props.todoEntry.completed === false) {
            this.props.todoEntry.completed = true;
            this.props.addTodoToComplete(this.props.todoIndex);
        } 
        
        else {
            this.props.todoEntry.completed = false;
            this.props.removeTodoFromComplete(this.props.todoIndex);
        }

        e.preventDefault();
    }

    changeVisibility() {
        // let todoItemContainer = this.todoItemContainerRef.current;
        // let deleteButton = this.deleteButtonRef.current;

        // let todoItemContainerXPosRight = todoItemContainer.getBoundingClientRect().right;
        // let deleteButtonXPos = deleteButton.getBoundingClientRect().left;
        // alert(todoItemContainerXPosRight + ", " + deleteButtonXPos);

        if (this.state.visibility === "invisible") {
            this.setState({
                visibility: "visible",
                animation: "animateOpen"
            });
        }
        else {
            this.setState({
                visibility: "invisible",
                animation: "animateClose"
            });
        }
    }

    render() {
        return (
            <div>
                {/* Display top horizontal line for the first todo only */}
                {this.props.displayLine === true && <div className="horizontalLine"></div>}         
                <div className="todoItemContainer" ref={this.todoItemContainerRef}>
                    <FontAwesomeIcon icon={'thumbs-up'} className={this.props.todoEntry.completed ? "thumbsUpIconCompleted" : "thumbsUpIcon"} onClick={this.updateTodoStatus}/>
                    {/* Display strike through todo when completed */}
                    <div className={this.props.todoEntry.completed ? "todoItemCompleted" : "todoItemNotCompleted"}>{this.props.todoEntry.todo}</div>
                    <div className="todoOptionsContainer">
                        <FontAwesomeIcon icon={["far","star"]} className="starIcon" />
                        <FontAwesomeIcon icon={["fas", "trash"]} className="trashIcon" onClick={this.changeVisibility}/>
                        <FontAwesomeIcon icon={["fas", "ellipsis-h"]} className="ellipsisIcon" />
                    </div>
                    <div className={"deleteOptions " + this.state.visibility + " " + this.state.animation}>
                        {/* <div className="deleteButtonContainer"> */}
                            <button className="deleteButton" ref={this.deleteButtonRef}>Delete</button>
                        {/* </div> */}
                        {/* <div className="cancelDeleteButtonContainer"> */}
                            <button className="cancelDeleteButton" onClick={this.changeVisibility}>Cancel</button>
                        {/* </div> */}
                    </div>
                </div>
                <div className="horizontalLine"></div>
            </div>
        );
    }
}

export default Todo;
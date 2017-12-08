import React, { Component } from 'react';

class TodoItem extends Component {

    handleChange = () => {
        console.log(this.props.todo.id);
        this.props.onChangePriority(this.props.todo.id);
    }

    isPriority = () => this.props.todo.priority;

    render() {
        return (
            <li className={this.isPriority() ? 'priority-task' : ''}>
                <span>{this.props.todo.text}</span>
                <button className='btn priority' onClick={this.handleChange}>Priority</button>
            </li>
        );
    }
}

export default TodoItem;
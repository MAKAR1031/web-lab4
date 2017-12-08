import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTodo } from '../actions/todo_actions';

class TodoInput extends Component {
    state = { value: 'asd' };

    disabled = () => this.props.todos.length >= 10;

    changeText = evt => this.setState({ value: evt.target.value });
    
    handleAdd = () => {
        this.props.addTodo(this.state.value);
        this.setState({ value: '' })
    }

    render() {
        return (
            <div>
                <div className="input-container">
                    <input id="title" type="text" 
                        disabled={this.disabled()}
                        onChange={this.changeText}/>
                    <button 
                        disabled={this.disabled()}
                        value={this.state.value}
                        className='btn add' onClick={this.handleAdd}>Add</button>
                </div>
                <div>
                    <Link className='nav-link' to="/">Go to list</Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(
    { addTodo },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);
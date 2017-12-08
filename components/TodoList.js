import React, { Component } from "react"
import { Link } from "react-router-dom";
import TodoItem from './TodoItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changePriority, removeAll } from '../actions/todo_actions';

class TodoList extends Component {
    render() {
        return (
            <div>
                <ul id="todos">
                    {
                        this.props.todos.map((todo, i) => (
                            <TodoItem key={todo.id} todo={todo}
                                onChangePriority={this.props.changePriority}/>)
                        )
                    }
                </ul>
                <Link className='nav-link' to="/add">Add new todo</Link>
                <hr/>
                <div>
                    <button className='btn remove'
                        disabled={this.props.todos.length === 0}
                        onClick={this.props.removeAll}>Remove all</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(
    { changePriority, removeAll },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
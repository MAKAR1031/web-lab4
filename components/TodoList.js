import React, { Component } from "react"
import { Link } from "react-router-dom";
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return (
            <div>
                <ul id="todos">
                    {
                        this.props.todos.map((todo, i) => (
                            <TodoItem key={todo.id} todo={todo}
                                onChangePriority={this.props.onChangePriority}/>)
                        )
                    }
                </ul>
                <Link className='nav-link' to="/add">Add new todo</Link>
            </div>
        )
    }
}

export default TodoList;
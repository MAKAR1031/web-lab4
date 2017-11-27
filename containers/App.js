import React, {Component} from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import TodoCounter from '../components/TodoCounter';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addTodo, changePriority } from '../actions/todo_actions';

class App extends Component {

    isDisabledInput = () => this.props.todos.length >= 10;

    render() {
        return (
            <BrowserRouter>
                <div id="content">
                    <div id="content-header">
                        <h1>Todo List</h1>
                    </div>
                    <div>
                        <Route exact path="/" 
                            render={(props) => <TodoList todos={this.props.todos} 
                            onChangePriority={this.props.changePriority}/>}/>
                        <Route path="/add" 
                            render={(props) => <TodoInput disabled={this.isDisabledInput()} 
                                onSubmit={this.props.addTodo}/>}/>
                        <TodoCounter 
                            text="You have todos"
                            count={this.props.todos.length}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(
    { addTodo, changePriority },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
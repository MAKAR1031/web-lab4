import React, {Component} from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import TodoCounter from '../components/TodoCounter';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div id="content">
                    <div id="content-header">
                        <h1>Todo List</h1>
                    </div>
                    <div>
                        <Route exact path="/" component={TodoList}/>
                        <Route path="/add" component={TodoInput}/>
                        <TodoCounter text="You have todos"/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TodoInput extends Component {
    state = { value: '' };

    changeText = evt => this.setState({ value: evt.target.value });
    
    handleAdd = () => {
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' })
    }

    render() {
        return (
            <div>
                <div className="input-container">
                    <input id="title" type="text" 
                        disabled={this.props.disabled}
                        onChange={this.changeText}/>
                    <button 
                        disabled={this.props.disabled}
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

export default TodoInput;
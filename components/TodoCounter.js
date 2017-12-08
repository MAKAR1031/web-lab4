import React, {Component} from "react"
import { connect } from 'react-redux';

class TodoCounter extends Component {
    render() {
        if (this.props.todos.length === 0) {
            return "";
        }
        return (
            <span>
                <p>{this.props.text !== undefined ? this.props.text : 'Todo count'}: {this.props.todos.length}</p>
            </span>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(TodoCounter);
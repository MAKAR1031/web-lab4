import React, {Component} from "react"

class TodoCounter extends Component {
    render() {
        if (this.props.count === 0) {
            return "";
        }
        return (
            <span>
                <p>{this.props.text !== undefined ? this.props.text : 'Todo count'}: {this.props.count}</p>
            </span>
        );
    }
}

export default TodoCounter;
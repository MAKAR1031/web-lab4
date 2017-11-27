import alertify from 'alertify.js'

const initialState = [];

var todoNextId = 0;

const todosReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case 'ADD_TODO':
            if (action.text.trim() === '') {
                alertify.alert('First you need to enter the text of the task!');
                return state;
            }
            for (let i = 0; i < state.length; i++) {
                if (state[i].text.trim() === action.text) {
                    alertify.alert("You have already added such a task!");
                    return state;
                }
            }
            return state.concat({
                id: ++todoNextId,
                text: action.text.trim(),
                priority: false
            });
        case 'CHANGE_PRIORITY':
            state.forEach(function (todo) {
                if (todo.id === action.id)  {
                    console.log(todo.text);
                    todo.priority = !todo.priority;
                }
            });
            return state;
        default:
            return initialState;
    }
};

export default {
    todos: todosReducer
};
export const addTodo = text => dispatch => {
    dispatch({
        type: 'ADD_TODO',
        text
    });
};

export const changePriority = id => dispatch => {
    dispatch({
        type: "CHANGE_PRIORITY",
        id
    });
}
const initialState = '';

export default function filter(state = initialState, action) {
    switch (action.type) {
        case 'FILTER_TODOS':
            return action.searchString;
    }
    return initialState;
};
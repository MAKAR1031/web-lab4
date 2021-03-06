import reducer from './todos';

describe('todos', () => {
    test('returns [] by default', () => {
        const action = {
            type: null
        };
        const newState = reducer([], action);

        expect(newState).toEqual([]);
    });
});

describe('todos', () => {
    test('add todo', () => {
        const todoText = "Test todo"
        const action = {
            type: 'ADD_TODO',
            text: todoText
        };
        const newState = reducer([], action);

        expect(newState).toEqual([{
            id: 1,
            text: todoText,
            priority: false
        }]);
    });
});

describe('todos', () => {
    test('change todo priority', () => {
        const action = {
            type: 'CHANGE_PRIORITY',
            id: 1
        };
        const newState = reducer([{
            id: 1,
            text: "Test todo",
            priority: false
        }], action);

        expect(newState[0].priority).toBeTruthy()
    });
});

describe('todos', () => {
    test('remove all todos', () => {
        const action = {
            type: 'REMOVE_ALL'
        };
        const newState = reducer([{
                id: 1,
                text: "Test todo 1",
                priority: false,
            },
            {
                id: 2,
                text: "Test todo 2",
                priority: false,
            }
        ], action);

        expect(newState).toEqual([]);
    });
});
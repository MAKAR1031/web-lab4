import reducers from './index';

describe('todos', () => {
  test('returns [] by default', () => {
    const reducer = reducers.todos;

    const action = { type: null };
    const newState = reducer(null, action);

    expect(newState).toEqual([]);
  });
});
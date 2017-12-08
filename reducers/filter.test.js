import reducer from './filter';

describe('filter', () => {
    test('returns empty search string by default', () => {
        const action = {
            type: null
        };
        const newState = reducer(null, action);

        expect(newState).toEqual('');
    });
});

describe('filter', () => {
    test('returns empty search string by default', () => {
        const searchString = 'search';
        const action = {
            type: 'FILTER_TODOS',
            searchString
        };
        const newState = reducer(null, action);

        expect(newState).toEqual(searchString);
    });
});
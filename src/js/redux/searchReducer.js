export const searchReducer = (state = [], action) => {
    switch (action.type){
        case 'SEARCH':
            return [ ...state, action.search];
        default:
            return state;
    }
}
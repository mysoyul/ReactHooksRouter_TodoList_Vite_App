import * as types from '@/actions';

//State 객체
const initialState = {
    todos: [
        {
            id: 0,
            text: '',
            checked: false,
        }
    ]
}
//reducer 함수 선언
export const toDoReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO:
        case types.REMOVE_TODO:
        case types.TOGGLE_TODO:                
        case types.FETCH_TODOS:
            return Object.assign({}, state, {todos: action.payload});    
        default:
            return state;
    }
};

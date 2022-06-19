const { default: axios } = require("axios");
const {createStore, applyMiddleware} = require("Redux");
const { default: thunk } = require("redux-thunk");

// CONSTANTS
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// State
const todosInitialState = {
    todos: [],
    isLoading: false,
    error: null
}

// Action
const getTodosRequestAction = () => {
    return {
        type: GET_TODOS_REQUEST
    }
}
const getTodosSucessAction = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos
    }
}
const getTodosFailedAction = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error,
    }
}
// Async action creator
const fetchData = () => {
    return (dispatch)=> {
        dispatch(getTodosRequestAction());
        axios.get(API_URL)
        .then((res)=> {
            const todos = res.data;
            const titles = todos.map(todo => todo.title);
            dispatch(getTodosSucessAction(titles))
        }).catch((error)=>{
            dispatch(getTodosFailedAction(error.message))
        })
    }
}

// Reducer
const todosReducer = (state = todosInitialState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return{
                ...state,
                isLoading: true,
            };
        case GET_TODOS_SUCCESS:
            return{
                todos: action.payload,
                isLoading: false,
                error: null,
            };
        case GET_TODOS_FAILED:
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            };
    
        default:
            return state;
    }
}

// Store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState())
});

store.dispatch(fetchData())
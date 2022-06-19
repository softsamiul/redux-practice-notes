// State
// Action | Increment * Decrement
// Reducer - Logic
//  Store

const {createStore} = require("redux");

// CONSTANTS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const ADD_USER = "ADD_USER";

// State
const initialCounterState = {
    user: ['Samiul'],
    count: 1,
}

// Action
const incrementACtion = () => {
    return {
        type: INCREMENT
    }
}
const decrementACtion = () => {
    return {
        type: DECREMENT
    }
}

const resetAction = () => {
    return{
        type: RESET,
    }
}
const incrementByValueAction = (value) => {
    return{
        type: INCREMENT_BY_VALUE,
        payload: value,
    }
}

const addUserAction = (value) => {
    return{
        type: ADD_USER,
        payload: value,
    }
}

// Reducer
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case RESET:
            return{
                ...state,
                count: state.count = 0
            };
        case INCREMENT_BY_VALUE:
            return{
                ...state,
                count: state.count + action.payload
            };
        case ADD_USER:
            return{
                user: [...state.user, action.payload],
                count: state.count + 1,
            };
    
        default:
            state;
    }
}

const store = createStore(counterReducer)

store.subscribe(()=> {
    console.log(store.getState())
})

// store.dispatch(incrementACtion());
// store.dispatch(incrementACtion());
// store.dispatch(incrementACtion());
// store.dispatch(decrementACtion());
// store.dispatch(resetAction());
// store.dispatch(incrementByValueAction(5));
// store.dispatch(incrementByValueAction(10));
// store.dispatch(resetAction());
store.dispatch(addUserAction("Sakib"));
store.dispatch(addUserAction("Subarna"));
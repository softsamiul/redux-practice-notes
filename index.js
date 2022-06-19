const {createStore} = require("redux");


// Defining constatnts
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// 1. State
// 2. Dispatch action
// 3. reducer
// 4. Store -> getState(), dispatch(), subscribe()

// State
const inisitialCounterState = {
    count: 0,
}

const inittialUsersState = {
    users: [{name: 'Samiul Islam'}]
}


// Action - object have two important things *type *payload to pass data
// Increment counter
// Decrement counter

// ACtion creator function
const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}
const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
}
const addUser = () => {
    return {
        type: ADD_USER,
        payload: {name: 'Sakib'}
    }
}
// const addUser = (user) => {
//     return {
//         type: ADD_USER,
//         payload: user
//     }
// }


// Reducer
// Create a reducer for counter
const countReducer =(state = inisitialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT: 
        return{
            ...state,
            count: state.count - 1
        };
        default:
            state;
    }
}


// Create store
const store = createStore(countReducer)

store.subscribe(()=> {
    console.log(store.getState())
})

//  Dispatch action
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
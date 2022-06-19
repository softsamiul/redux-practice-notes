// state
// action
// reducer
// store
// ============================

const {createStore, combineReducers, applyMiddleware} = require("Redux");
const { default: logger } = require("redux-logger");

// CONSTANTS
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// Product state
const productInitialState = {
    products: ["Sugar", "Salt"],
    count: 2
}
// Cart state
const cartInitialState = {
    cartItems: ["Sugar", "Salt"],
    count: 2
}

// product actions
const getProduct = () => {
    return {
        type: GET_PRODUCTS,
    }
}
const addProduct = (prodctName) => {
    return {
        type: ADD_PRODUCTS,
        payload: prodctName,
    }
}
// cart actions
const getCartItems = () => {
    return {
        type: GET_CART_ITEMS,
    }
}
const addCartItem = (itemName) => {
    return {
        type: ADD_CART_ITEM,
        payload: itemName,
    }
}

// Product reducer
const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            };
        case ADD_PRODUCTS:
            return {
                products: [...state.products, action.payload],
                count: state.count + 1
            };
    
        default:
            return state;
    }
}

// Cart reducer
const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state
            };
        case ADD_CART_ITEM:
            return {
                cartItems: [...state.cartItems, action.payload],
                count: state.count + 1
            };
    
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

store.subscribe(()=>{
    console.log(store.getState())
});

// product dispatch
store.dispatch(getProduct())
store.dispatch(addProduct("Tea"))

// Cart dispatch
store.dispatch(getCartItems())
store.dispatch(addCartItem("Rice"))
import axios from "axios"

const initialState = {
    cart: [],
    loading: false,
    error: false,
    errorMessage: ''
}

const ADD_TO_CART = "ADD_TO_CART"
const GET_CART = "GET_CART"

export function addToCart(product_id) {
    let action = {
        type: ADD_TO_CART,
        payload: axios.post('/api/cart', {product_id})
    }

    return action
}

export function getCart() {
    let action = {
        type: GET_CART,
        payload: axios.get(`/api/cart`)
    }

    return action
}


export default function cartReducer(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART + '_PENDING':
            return {...state, loading: true, error: false, errorMessage: ''}
        case ADD_TO_CART + '_REJECTED':
            return {...state, loading: false, error: true, errorMessage: action.payload.response.data}
        case ADD_TO_CART + '_FULFILLED':
            return {...state, cart: action.payload.data, loading: false, error: false}
        case GET_CART + '_PENDING':
            return {...state, loading: true, error: false, errorMessage: ''}
        case GET_CART + '_REJECTED':
            return {...state, loading: false, error: true, errorMessage: action.payload.response.data}
        case GET_CART + '_FULFILLED':
            return {...state, cart: action.payload.data, loading: false, error: false}
        default: 
            return state;
    }
};
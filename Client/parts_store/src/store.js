import { createStore, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

// history.push('/') move to new path

const initialState = {
    test: '',
    parts: [],
    part: {},
    cart: [],
    loggedIn: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'TEST':
            return {
                ...state,
                test: action.test
            }
        case 'PARTS_FETCH':
            return {
                ...state,
                parts: action.parts
            }
        case 'SET_CURR_PART':
            return {
                ...state,
                part: action.part
            }
        case 'CURR_CART':
            return {
                ...state,
                cart: action.cart
            }
        case 'USER_LOGGED_IN':
            return {
                ...state,
                loggedIn: action.loggedIn
            }
        default:
        return state
    }
}

const middleware = compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const store = createStore(
    reducer,
    initialState,
    middleware
)
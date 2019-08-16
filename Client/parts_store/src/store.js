import { createStore, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

// history.push('/') move to new path

const initialState = {
    test: '',
    parts: []
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
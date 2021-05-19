import {createStore, combineReducers} from 'redux'
import listReducer from './listReducer'

const listReducerCombined = combineReducers({
    listReducer
})

const store = createStore(listReducerCombined)

export default store;
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {roadReducer} from './roadReduser'
import createSageMiddleware from 'redux-saga'
import {rootWatcher} from '../saga'

const sagaMiddleware = createSageMiddleware()

const rootReducer = combineReducers({
	roadReducer:roadReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

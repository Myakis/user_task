import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import settings from './reducers/settings'
import users from './reducers/users'
import auth from './reducers/auth'
import initializeSagas from './sagas'

const reducers = combineReducers({
	users,
	settings,
	auth
})

const bindMiddleware = (middleware) => {
	if (process.env.NODE_ENV !== 'production') {
		const { composeWithDevTools } = require('redux-devtools-extension')
		return composeWithDevTools(applyMiddleware(...middleware))
	}
	return applyMiddleware(...middleware)
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, bindMiddleware([sagaMiddleware]))

sagaMiddleware.run(initializeSagas)

export default store

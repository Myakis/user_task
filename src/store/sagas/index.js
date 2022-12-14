import { all } from 'redux-saga/effects'
import userInit from './users'
import authInit from './auth'

export default function* initializeSagas() {
	yield all([
		userInit(),
		authInit()
	])
}

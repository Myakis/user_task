import { ACTION_STATUS, AUTH_ROLE } from 'constants/common'
import Cookies from 'js-cookie'
import { LOGIN, LOGOUT } from './types'

const getInitialState = () => ({
	token: Cookies.get('token_task') || null,
	authStatus: ACTION_STATUS.IDLE,
	role: AUTH_ROLE.USER
})

export default function auth(state = getInitialState(), action) {
	switch (action.type) {
		case LOGIN.REQUEST:
			return {
				...getInitialState(),
				authStatus: ACTION_STATUS.LOADING
			}
		case LOGIN.RECEIVE:
			return {
				...getInitialState(),
				token: 'asdasd',
				authStatus: ACTION_STATUS.LOADED,
				role: action.payload.role
			}
		case LOGIN.FAILURE:
			return {
				...getInitialState(),
				authStatus: ACTION_STATUS.FAILED
			}
		case LOGOUT:
			return {
				...getInitialState(),
				token: null,
				role: AUTH_ROLE.USER
			}

		default:
			return state
	}
}

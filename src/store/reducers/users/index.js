import { ACTION_STATUS } from 'constants/common'
import { GET_USER, SET_GROUP, UPDATE_USER } from './types'
import JSONFile from 'test.json'

const getInitialState = () => ({
	items: JSONFile.colorsArray,
	usersStatus: ACTION_STATUS.IDLE,
	group: []
})

export default function users(state = getInitialState(), action) {
	switch (action.type) {
		case GET_USER.REQUEST:
			return {
				...state,
				usersStatus: ACTION_STATUS.LOADING
			}
		case GET_USER.RECEIVE:
			return {
				...state,
				items: action.payload,
				usersStatus: ACTION_STATUS.LOADED
			}
		case GET_USER.FAILURE:
			return {
				...state,
				usersStatus: ACTION_STATUS.FAILED
			}
		case UPDATE_USER:
			const { id, ...data } = action.payload
			return {
				...state,
				items: state.items.map((user) => {
					if (user.id === id) return { ...user, ...data }
					return user
				})

			}
		case SET_GROUP:
			return {
				...state,
				group: action.payload
			}

		default:
			return state
	}
}

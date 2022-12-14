import { GET_USER, SET_GROUP, UPDATE_USER } from './types'

const actions = {
	getUsers: (payload) => ({ type: GET_USER.REQUEST, payload }),
	setGroup: (payload) => ({ type: SET_GROUP, payload }),
	updateUser: (payload) => ({ type: UPDATE_USER, payload })
}

export default actions
  
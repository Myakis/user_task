import { LOGIN, LOGOUT } from './types'

const actions = {
  login: (payload) => ({ type: LOGIN.REQUEST, payload }),
  logout: () => ({ type: LOGOUT }),
}

export default actions

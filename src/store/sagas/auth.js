import { call, put, takeEvery } from 'redux-saga/effects'
import api from 'services/api'
import { LOGIN } from '../reducers/auth/types'
import { AUTH_ROLE } from '../../constants/common'
import { v4 as uuId } from 'uuid'

function* getUsers(action) {
	const token = uuId() // при регистрации будет создаваться рандомный токен
	const { userName } = action.payload
	try {
		const response = yield call(
			api.post,
			'login/', {
				...action.payload
			}
		)
		console.log(response)
		if (response.ok) {
			// т.к. данные о пользователе у нас не возвращаются,
			// то будем возвращать моковые
			yield put({
				type: LOGIN.RECEIVE, payload: {
					userName,
					token,
					role: userName === 'digitalwand' ?
						AUTH_ROLE.ADMIN : AUTH_ROLE.USER
				}
			})
		} else {
			yield put({
				type: LOGIN.FAILURE,
				payload: { errors: 'Неверный логин или пароль' }
			})
		}
	} catch (e) {
		console.error(e)
		yield put({ type: LOGIN.FAILURE })
	}
}

export default function* authInit() {
	yield takeEvery(LOGIN.REQUEST, getUsers)
}

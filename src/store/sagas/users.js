import { put, takeEvery, call } from 'redux-saga/effects'
import api from 'services/api'
import { GET_USER } from 'store/reducers/users/types'

function* getUsers(action) {
  try {
    const response = yield call(
      api.post,
      'users/',
    )
    if (response.ok) {
      yield put({ type: GET_USER.RECEIVE })
    } else {
      yield put({
        type: GET_USER.FAILURE,
        payload: { errors: 'Неверный логин или пароль' },
      })
    }
  } catch (e) {
    console.error(e)
    yield put({ type: GET_USER.FAILURE })
  }
}

export default function* userInit() {
  yield takeEvery(GET_USER.REQUEST, getUsers)
}

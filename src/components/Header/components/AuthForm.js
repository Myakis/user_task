import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const AuthForm = () => {
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const onSubmitForm = (e) => {
		e.preventDefault()
		dispatch(actions.auth.login({ userName, password }))

	}

	return (
		<div>
			<form onSubmit={onSubmitForm}>
				<input name={'login'} value={userName} onChange={(e) => setUserName(e.target.value)} />
				<input name={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
				<button type={'submit'}>Войти</button>
			</form>
		</div>

	)
}

export default AuthForm

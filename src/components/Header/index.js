import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from 'store/actions'
import Modal from '../Modal'
import AuthForm from './components/AuthForm'

const Header = () => {
	const { sideMenuOpen } = useSelector(state => state.settings)
	const [isOpenModal, setOpenModal] = useState(false)
	const dispatch = useDispatch()

	const toShowSideMenu = () => {
		dispatch(actions.settings.toggleMenu(!sideMenuOpen))
	}
	const isOpenModalAuth = () => {
		setOpenModal(true)
	}
	return (
		<div>
			<div className='header'>
				<button onClick={toShowSideMenu}>Menu</button>
				<button onClick={isOpenModalAuth}>Вход</button>
			</div>
			<Modal title={'Авторизация'} isOpen={isOpenModal} onClose={() => setOpenModal(false)}>
				<AuthForm />
			</Modal>
		</div>

	)
}

export default Header

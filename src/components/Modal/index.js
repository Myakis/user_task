import React, { useEffect } from 'react'
import Portal from '../Portal'
import './styles.scss'

const Modal = ({
	               className,
	               children,
	               isOpen,
	               onClose,
	               title = '',
	               modifiers = [],
	               header
               }) => {

	const mod = {
		small: false,
		large: false,
		dialog: false,
		auth: false,
		productCard: false,
		sizeTable: false
	}
	modifiers.forEach((item) => {
		mod[item] = true
	})


	useEffect(() => {
		if (isOpen) document.body.style.overflowY = 'hidden'

		return () => {
			document.body.style.overflowY = 'auto'
		}
	}, [isOpen])

	const closeModal = (e) => {
		e.stopPropagation()
		const isOverlay = !e.target.closest(`.modal`)
		if (isOverlay) {
			onClose()
		}
	}

	if (!isOpen) {
		return null
	}

	return (
		<Portal>
			<div className={'modal-overlay'} onMouseDown={closeModal}>
				<div className={'modal-container'}>
					<div
						className={'modal'}
						onClick={(e) => e.stopPropagation()}
					>
						<button type='modal__button-close' onClick={onClose}>
							Закрыть
						</button>

						{title && (
							<div className={'modal__title'}>{title}</div>
						)}
						{header && <div className={'modal__header'}>{header}</div>}
						<div className={'modal__content'}>
							{children}
						</div>
					</div>
				</div>
			</div>
		</Portal>
	)
}

export default Modal

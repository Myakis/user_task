import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from 'store/actions'

class Navigate extends Component {
	constructor(props) {
		const { currentGroup } = props
		super(props)
		this.state = {
			userID: 0,
			isEditName: false,
			isEditDescription: false,
			name: currentGroup[0].name,
			description: currentGroup[0].description
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const { userID } = this.state
		const { currentGroup } = this.props
		if (prevState.userID !== userID) {
			this.setState({
				name: currentGroup[userID].name,
				description: currentGroup[userID].description
			})
		}
		// Сброс id юзера при переключении группы
		if (currentGroup !== prevProps.currentGroup && !currentGroup[userID]) {
			this.setState({
				userID: 0
			})
		}
	}

	onChangeUserName = (e) => {
		const { value: name } = e.target
		this.setState({ name })
	}

	onChangeUserDescription = (e) => {
		const { value: description } = e.target
		this.setState({ description })
	}

	onEditUserName() {
		const { currentGroup } = this.props
		const { isEditName, userID, name } = this.state
		const id = currentGroup[userID].id
		if (isEditName) {
			this.props.updateUser({ id, name })
			this.setState({ isEditName: !isEditName })
		} else {
			this.setState({ isEditName: !isEditName })
		}
	}

	onEditUserDescription() {
		const { isEditDescription, userID, description } = this.state
		const { currentGroup } = this.props
		const id = currentGroup[userID]?.id
		if (isEditDescription) {
			this.props.updateUser({ id, description })
			this.setState({ isEditDescription: !isEditDescription })
		} else {
			this.setState({ isEditDescription: !isEditDescription })
		}
	}


	switchUser(direction) {
		const { userID } = this.state
		const { currentGroup } = this.props
		if (direction === 'next' && userID !== currentGroup.length - 1) {
			this.setState({
				userID: userID + 1
			})
		} else if (userID !== 0) {
			this.setState({
				userID: userID - 1
			})
		}
	}

	render() {
		const { userID, isEditName, isEditDescription } = this.state
		const { currentGroup, name, description } = this.props

		return (
			<div className='nav-users'>
				<div className='navigate'>
					<div className='nav-bar'>
						<button
							className='toLeft'
							onClick={() => this.switchUser('previous')}
							disabled={isEditName || isEditDescription}
						>
							&lt;
						</button>
						<span>
              {userID + 1} from {currentGroup.length}
            </span>
						<button className='toRight'
						        onClick={() => this.switchUser('next')}
						        disabled={isEditName || isEditDescription}
						>
							&gt;
						</button>
					</div>
					<div className='info'>
            <span>
              Name:
	            {isEditName ? (
		            <input
			            defaultValue={currentGroup[userID]?.name}
			            onChange={this.onChangeUserName}
			            value={name}
		            />
	            ) : (currentGroup[userID]?.name
	            )}
            </span>
						<button className='edit' onClick={this.onEditUserName.bind(this)}>
							{isEditName ? 'Save' : 'Edit'}
						</button>
						<br />
						{isEditDescription ?
							<input
								defaultValue={currentGroup[userID]?.description}
								onChange={this.onChangeUserDescription}
								value={description}

							/> :
							(currentGroup[userID]?.description)}
						<button className='edit' onClick={this.onEditUserDescription.bind(this)}>
							{isEditDescription ? 'Save' : 'Edit'}
						</button>
					</div>
				</div>
				<div className='about' ref='about'>
					<span>Text About</span>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		currentGroup: state.users.group
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			updateUser: actions.users.updateUser
		},
		dispatch
	)
}

export default connect(mapStateToProps, matchDispatchToProps)(Navigate)

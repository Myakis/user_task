import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import clsx from 'clsx'
import Navigate from './Navigate'
import actions from 'store/actions'

class Content extends Component {
	constructor(props) {
		super(props)

		this.state = {
			mainContent: true,
			group: 'all'
		}
	}

	componentWillMount() {
		const { group } = this.state
		this.getGroup(group)
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.users !== this.props.users) {
			const { group } = this.state
			this.getGroup(group)

		}
	}

	getGroup(group) {
		const { users, setGroup } = this.props
		this.setState({ group })
		if (group === 'all') {
			return setGroup(users)
		} else if (group === 'first' || group === 'second' || group === 'third') {
			const result = (users || []).filter((user) => user.group === group)
			return setGroup(result)
		}
	}

	render() {
		const { sideMenuOpen } = this.props

		return (
			<div className={clsx('content', sideMenuOpen && 'move')} ref='content'>

				<hr />
				<button onClick={() => this.getGroup('all')}>All</button>
				<button onClick={() => this.getGroup('first')}>First group</button>
				<button onClick={() => this.getGroup('second')}>Second group</button>
				<button onClick={() => this.getGroup('third')}>Third group</button>
				<Navigate />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		users: state.users.items,
		sideMenuOpen: state.settings.sideMenuOpen
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			showSideMenu: actions.settings.toggleMenu,
			setGroup: actions.users.setGroup
		},
		dispatch
	)
}

export default connect(mapStateToProps, matchDispatchToProps)(Content)

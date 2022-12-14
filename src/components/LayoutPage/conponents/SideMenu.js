import React, { Component } from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

class SideMenu extends Component {
  render() {
    const { menuIsOpen } = this.props

    if (!menuIsOpen) return null
    return (
      <aside className={clsx('sideMenu', menuIsOpen && 'show')}>
        <div>
          <Link to={'/'}>Main</Link>
        </div>
        <Link to={'/about'}>About</Link>
      </aside>
    )
  }
}

function mapStateToProps(state) {
  return {
    menuIsOpen: state.settings.sideMenuOpen,
  }
}

export default connect(mapStateToProps)(SideMenu)

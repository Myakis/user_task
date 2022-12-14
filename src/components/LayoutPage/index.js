import React from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import SideMenu from './conponents/SideMenu'
import './styles.scss'

const LayoutPage = ({ children }) => {
  return (
    <div className='page'>
      <Header />
      <div className='page-wrapper'>
        <SideMenu />
        <main className='main'>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default LayoutPage

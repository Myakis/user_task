import About from 'containers/About'
import Main from 'containers/Main'
import React from 'react'

const routes = [
  {
    path: '/',
    element: <Main />,
    key: 'main',
  },
  {
    path: '/about',
    element: <About />,
    key: 'about',
  },
]

export default routes

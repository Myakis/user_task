import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import store from 'store'
import routes from 'routes'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<RouterProvider router={createBrowserRouter(routes)} />
			</Provider>
		)
	}
}

export default App

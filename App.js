  
import React, { Component } from 'react'
import './App.css'
import Form from './components/form'

class App extends Component {
	render() {
		return (
			<div className="App">
        		<h1>Mortgage Calculator</h1>
				<Form />
			</div>
		)
	}
}

export default App
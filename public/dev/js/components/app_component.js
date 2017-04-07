import React, { Component } from 'react';
import Header from '../containers/header_container';
import Body from '../components/body_component';
import Footer from '../components/footer_component';

class App extends Component {
	render() {
		return (
			<div>
        		{this.props.children}
			</div>
		)
	}
}

export default App; 

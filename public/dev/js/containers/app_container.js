import React, { Component } from 'react';
import Header from './header_container';
import Body from '../components/body_component';
import Footer from '../components/footer_component';

class AppContainer extends Component {
	render() {
		return (
			<div>
        		<Header />
        		<Body />
        		<Footer />
			</div>
		)
	}
}

export default AppContainer; 

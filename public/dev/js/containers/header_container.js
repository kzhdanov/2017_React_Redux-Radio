import React, { Component } from 'react';
import Weeks from '../components/weeks_component';
import HeaderComponent from '../components/header_component';

class Header extends Component {
	constructor(props) {
	  super(props);
	  
	  this.state = {
        classIcon: '',
        classContainer: 'wk_container-invisible',
        classVisible: '',
  	  };
	}

	openCardWeek(classContainer) {
		if(classContainer === 'wk_container-invisible') {
			this.setState({
				classIcon: 'wk_icon-active',
				classContainer: 'wk_container-visible',
				classVisible: 'wk_openblock-invisible',
			});
		} else {
			this.setState({
				classIcon: '',
				classContainer: 'wk_container-invisible',
				classVisible: '',
			});
		}
	}

	renderWeeks() {
		return (
			<Weeks />
		)
	}

	render() {
	    return (
	    	<HeaderComponent 
	    		classIcon={this.state.classIcon}
	    		classContainer={this.state.classContainer}
	    		classVisible={this.state.classVisible}
	    		openCardWeek={this.openCardWeek.bind(this, this.state.classContainer)}
	    		renderWeeks={this.renderWeeks}
	    	 />	  
	    );
	}
}

export default Header;
import React, { Component } from 'react';
import Weeks from './weeks_component';

class Header extends Component {
	constructor(props) {
	  super(props);
	  
	  this.state = {
        classIcon: 'wk_icon-passive',
        classContainer: 'wk_container-invisible',
  	  };
	}

	openCardWeek() {
		if(this.state.classContainer === 'wk_container-invisible') {
			this.setState({
				classIcon: 'wk_icon-active',
				classContainer: 'wk_container-visible',
			});
		} else {
			this.setState({
				classIcon: 'wk_icon-passive',
				classContainer: 'wk_container-invisible',
			});
		}
		/*
		<div className={this.state.classIcon + ' wk_icon'}
	      		 onClick={this.openCardWeek.bind(this)}>Недели</div>
		*/
	}

	render() {
		const isOpened = this.state.classContainer === 'wk_container-visible';
	    return (
	      <section className='header'>
	      	<div onClick={this.openCardWeek.bind(this)} className='menu-container'>
		      	<div id='menu-button'>
		      		<div className='menu-line' id='first-line'></div>
		      		<div className='menu-line' id='second-line'></div>
		      		<div className='menu-line' id='third-line'></div>
		      	</div>
		      	<div className='menu-text'>НЕДЕЛИ</div>
		    </div>

	      	<div className={this.state.classContainer + ' wk_container'}>
		      	{isOpened ? (
			        <Weeks />
			    ) : (
			        <span>no any information...</span>
			    )}
	      	</div>
	      </section>
	    );
	}
}

export default Header;
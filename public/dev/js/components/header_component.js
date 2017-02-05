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
	}

	render() {
		const isOpened = this.state.classContainer === 'wk_container-visible';
	    return (
	      <section className='header'>
	      	<div className={this.state.classIcon + ' wk_icon'}
	      		 onClick={this.openCardWeek.bind(this)}>Недели</div>
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
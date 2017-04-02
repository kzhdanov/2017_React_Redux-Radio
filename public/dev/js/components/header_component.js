import React, { Component } from 'react';

class Header extends Component {
	render() {
		const isOpened = this.props.classContainer === 'wk_container-visible';
	    return (
	      <section className='header'>
	      	<div onClick={this.props.openCardWeek} className='menu-container'>
		      	<div id='menu-button' className={this.props.classVisible}>
		      		<div className='menu-line' id='first-line'></div>
		      		<div className='menu-line' id='second-line'></div>
		      		<div className='menu-line' id='third-line'></div>
		      	</div>
		      	<div className={this.props.classIcon + ' close_popupX'}>
		      		<div className='rotate_left'></div>
		      		<div className='rotate_right'></div>
		      	</div>
		      	<div className={this.props.classIcon + ' menu-text'}>НЕДЕЛИ</div>
		    </div>

	      	<div className={this.props.classContainer + ' wk_container'}>
		      	{isOpened ? (
			        this.props.renderWeeks()
			    ) : (
			        <span>no any information...</span>
			    )}
	      	</div>
	      </section>
	    );
	}
}

export default Header;
import React, { Component } from 'react';
import classnames from 'classnames';

class Header extends Component {
	render() {
		const isOpened = this.props.classContainer === 'wk_container-visible';
	    return (
	      <section className='header'>
	      	<div onClick={this.props.openCardWeek} className={classnames('menu-container')}>
		      	<div id='menu-button' className={this.props.classVisible}>
		      		<div className='menu-line' id='first-line'></div>
		      		<div className='menu-line' id='second-line'></div>
		      		<div className='menu-line' id='third-line'></div>
		      	</div>
		      	<div className={classnames('close_popupX', this.props.classIcon)}>
		      		<div className='rotate_left'></div>
		      		<div className='rotate_right'></div>
		      	</div>
		      	<div className={classnames('menu-text', this.props.classIcon)}>НЕДЕЛИ</div>
		    </div>

	      	<div className={classnames('wk_container', this.props.classContainer)}>
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
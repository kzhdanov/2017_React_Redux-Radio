import React, { Component } from 'react';

class Week extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const el = this.props.w;
		console.log(el);
		return (				
			<div className='wk_container-week' style={{backgroundImage: 'url(' + el.src + ')'}}>
				{el.Year}
			</div>
		)
	}
}

export default Week;
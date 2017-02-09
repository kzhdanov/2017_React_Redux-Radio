import React, { Component } from 'react';

class Week extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const el = this.props.w;

		return (				
			<div className='wk_container-week' style={{backgroundImage: 'url(' + el.src + ')'}}>
				<div className='wk_container-week-inner'>
					{el.BandName} <br />
					{el.AlbumName} <br />
					{el.Year + ', ' + el.Genres}
				</div>
			</div>
		)
	}
}

export default Week;
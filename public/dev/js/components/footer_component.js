import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
	      <section className='footer'>
			<div><a href='mailto:radioavance@hotmail.com'>radioavance@hotmail.com</a></div>
			<div><a href='https://twitter.com/radioavance' target='_blank'>twitter.com/radioavance</a></div>
			<div className='footer_download'>
				<div>
					<a href="https://eu3.radioboss.fm:2199/tunein/zepyxjeq8.pls" title="Itunes">itunes</a>
				</div>
				<div>
					<a href="https://eu3.radioboss.fm:2199/tunein/zepyxjeq8.asx" title="Windows Media Player">windows media player</a>
				</div>
				<div>
					<a href="https://eu3.radioboss.fm:2199/tunein/zepyxjeq8.pls" title="Winamp">winamp</a>
				</div>
			</div>
	      </section>
   		)
	}
}

export default Footer;

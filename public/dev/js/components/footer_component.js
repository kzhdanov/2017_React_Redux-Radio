import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
	      <section className='footer'>
			<div><a href='mailto:radioavance@hotmail.com'>radioavance@hotmail.com</a></div>
			<div>
				<a href="https://vk.com/radioavance" title="VK">vk.com/radioavance</a>
			</div>
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
			<div>
				development &mdash; <a href="https://github.com/kzhdanov" target="_blank">k. zhdanov</a>
			</div>
	      </section>
   		)
	}
}

export default Footer;

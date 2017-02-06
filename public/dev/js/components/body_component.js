import React, { Component } from 'react';
import { connect } from 'react-redux';

function WS (callback) {
	let ws = new WebSocket('ws://localhost:8089');
		ws.onmessage = ((message) => {
			var res = JSON.parse(message.data);
			
			callback(res);
    	})
}

class Body extends Component {
	constructor(props) {
		super(props);

		WS((res) => { 
			this.props.setTitles(res);
		});
	}

	AudioActions() {
		if ( document.getElementById('cb').className.indexOf('content_button-play') !== -1 ) {
			document.getElementById('cb').className = 'content_button content_button-stop';
			document.getElementsByClassName('songInfo')[0].className = 'songInfo play-icon';
			document.getElementsByTagName('audio')[0].play();
		} else {
			document.getElementById('cb').className = 'content_button content_button-play';
			document.getElementsByClassName('songInfo')[0].className = 'songInfo';
			document.getElementsByTagName('audio')[0].pause();
		}
	}

	render() {
		var imgStyle = {
      		backgroundImage: "url(" + this.props.content.src.replace(/ /g,'%20') + ")"
    	};

		return (
	      <section className='content'>
			<div className='content_img' style={imgStyle}>
				<div className="songInfo">
		          <div className="songInfo__group">{this.props.content.autor}</div>
		          <div className="songInfo__song">{this.props.content.songName}</div>
		          <div className="songInfo__album">{this.props.content.album}</div>
		        </div>
			</div>
			<div id='cb' className='content_button content_button-play' onClick={this.AudioActions.bind(this)}></div>
			<audio src='http://eu3.radioboss.fm:8022/live' controls style={{display: 'none'}}/>
	      </section>
   		)
	}
}

export default connect(
	(state, ownProps) => ({
		content: state.Audio,
		ownProps
	}),
	dispatch => ({
		setTitles(payload) {	
			dispatch({ type: 'UPDATE_TITLES', payload });
		}
    }),
)(Body);

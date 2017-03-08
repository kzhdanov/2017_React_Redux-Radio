import React, { Component } from 'react';
import { connect } from 'react-redux';
import CONST from '../CONSTANTS';
import InputRange from 'react-input-range';

function WS (callback) {
	let ws = new WebSocket(CONST._WS_URL);
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

		this.state = { value: 60 };
	}

	componentDidMount() {
		document.getElementsByClassName('content_img')[0].addEventListener('click', 
			function(e) {
				window.open('/window/new',"RadioAvance.ru",
					"width=480,height=260,scrollbars=no,status=yes")
			});
	}

	AudioActions() {
		if ( document.getElementById('cb').className.indexOf('content_button-play') !== -1 ) {
			document.getElementById('cb').className = 'content_button content_button-stop';
			document.getElementsByClassName('songInfo')[0].className = 'songInfo play-icon';
			document.getElementsByTagName('audio')[0].volume = Number(this.state.value / 100);
			document.getElementsByTagName('audio')[0].play();
		} else {
			document.getElementById('cb').className = 'content_button content_button-play';
			document.getElementsByClassName('songInfo')[0].className = 'songInfo';
			document.getElementsByTagName('audio')[0].pause();
		}
	}

	ChangeVolume(value) {
		this.setState(value);
		document.getElementsByTagName('audio')[0].volume = Number(this.state.value / 100);
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
	      	 <InputRange
		        maxValue={100}
		        minValue={0}
		        step={10}
		        value={this.state.value}
				onChange={value => this.ChangeVolume({ value })} />
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
			dispatch({ type: CONST.UPDATE_TITLES, payload });
		}
    }),
)(Body);

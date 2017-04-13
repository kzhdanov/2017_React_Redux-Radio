import React from 'react';
import { connect } from 'react-redux';
import { GetWeek } from '../../actions/Admin/admin_action';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { orange500 } from 'material-ui/styles/colors';
import AlbumCard from './album_item_component';
import RaisedButton from 'material-ui/RaisedButton';

import './admin.css';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: orange500
  }
})

class List extends React.Component {
	constructor(props) {
    	super(props);

		this.state = {
			albums: [],
      		isLoading: true
    	};

		this.props.GetWeek().then((al) => {
			this.setState({ albums: al, isLoading: false });
		});
  	}

	render() {
		const { isLoading, albums } = this.state;
		let element = null;
		
		if(isLoading) {
			element = <CircularProgress />;
		} else { 
			element = (
				<div className='albums__container'>
					<div style={{marginLeft: '20px', marginTop: '20px'}}>
						<TextField
					    	hintText="Введите номер недели"
					    	floatingLabelText="Поиск по номеру недели"
					    	style={{width: '200px'}}
						/>
						<RaisedButton 
							label="Поиск" 
							primary={false} 
							style={{marginLeft: '20px'}}
						/>
					</div>
					<div style={{marginLeft: '20px', marginTop: '20px'}}>Неделя: { albums[0].WeekNumber }</div>
					{ albums.map((al) => <AlbumCard album={al} key={al.id}/>) }
				</div>
			);
		}

		return (
			<div>
				<MuiThemeProvider muiTheme={muiTheme}>
					{ element }
				</MuiThemeProvider>
			</div>
		)
	}
}

export default connect(null, { GetWeek })(List);
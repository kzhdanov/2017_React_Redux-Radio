import React from 'react';
import { connect } from 'react-redux';
import { GetWeek } from '../../actions/Admin/admin_action';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { orange500 } from 'material-ui/styles/colors';

//import './admin.css';

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
		console.log('list')
		if(isLoading) {
			element = <CircularProgress />;
		} else { 
			element = <div>date</div>;
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
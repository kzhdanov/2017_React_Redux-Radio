import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/Admin/login_action';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { orange500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import './admin.css';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: orange500
  }
})

class Admin extends React.Component {
	constructor(props) {
    	super(props);

    	this.handelLoginSubmit = this.handelLoginSubmit.bind(this);
  	}

	handelLoginSubmit() {
		let login = this.login.input.value;
		let pass = this.password.input.value;

		this.props.login( { login, pass } ).then(
			(res) => this.context.router.push('/radio_admin/list'),
			(err) => console.log(err)
		)
	}

	render() {
		return(
			<div className='admin__loginform'>
				<MuiThemeProvider muiTheme={muiTheme}>
					<div>
						<TextField hintText="Login" ref={(login) => { this.login = login; }}/>
						<TextField hintText="Password" ref={(password) => { this.password = password; }}/>
						<RaisedButton label="Log in" 
						 primary={true} 
						 style={{marginLeft: '170px', marginTop: '15px'}} 
						 onClick={this.handelLoginSubmit}
						 />
					</div>
				</MuiThemeProvider>
			</div>
		)
	}
}

Admin.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(Admin);
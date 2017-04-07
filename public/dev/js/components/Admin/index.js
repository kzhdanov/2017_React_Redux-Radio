import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import { orange500 } from "material-ui/styles/colors"

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: orange500
  }
})

export default class Admin extends React.Component {
	render() {
		return(
			<div className='admin__loginform'>
				 <MuiThemeProvider muiTheme={muiTheme}>
					<TextField hintText="Login" />
				</MuiThemeProvider>
			</div>
		)
	}
}
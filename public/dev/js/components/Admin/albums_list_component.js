import React from 'react';
import { connect } from 'react-redux';
import { GetWeek, GetWeekByNumber } from '../../actions/Admin/admin_action';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { orange500 } from 'material-ui/styles/colors';
import AlbumItem from './album_item_component';
import AlbumCardNewEdit from './album_card_component';
import RaisedButton from 'material-ui/RaisedButton';
import {default as UUID} from "node-uuid";

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
      		isLoading: true,
      		activeElement: {},
      		hasActive: false,
      		currentWeekNumber: 0
    	};

		this.props.GetWeek().then((al) => {
			const cwn = al[0].WeekNumber;

			this.setState({ 
				albums: al, 
				isLoading: false, 
				activeElement: {},
				currentWeekNumber: cwn
			});
		});

		this.editItem = this.editItem.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeCB = this.handleChangeCB.bind(this);
		this.saveCard = this.saveCard.bind(this);
		this.resetCard = this.resetCard.bind(this);
  	}

  	editItem(id) {
  		const currentEl = this.state.albums.filter((el) => el.id === id);
  		this.setState({ activeElement: currentEl[0], hasActive: true });
  	}

  	handleChange(e) {
  		const el = this.state.activeElement;
  		el[e.target.name] = e.target.value;
  		this.setState({ activeElement: el, hasActive: true });
  	}

  	handleChangeCB(e) {
  		const el = this.state.activeElement;
  		el[e.target.name] = !el[e.target.name];
  		this.setState({ activeElement: el, hasActive: true });
  	}

  	resetCard() {
  		this.setState({ activeElement: {}, hasActive: false });
  	}

  	searchWeekByNumber() {
  		if(!this.weekNumber.input.value)
  			return;

  		let week = this.weekNumber.input.value;

  		this.setState({ isLoading: true, activeElement: {} });

  		this.props.GetWeekByNumber(week).then((al) => {
  			if(al && al.length > 0) {
	  			const cwn = al[0].WeekNumber;

				this.setState({ 
					albums: al, isLoading: false, activeElement: {},
					currentWeekNumber: cwn 
				});
			} else {
				this.setState({ 
					albums: [], isLoading: false, activeElement: {},
					currentWeekNumber: `${week}. По этой неделе альбомов не найдено!` 
				});
			}
		});
  	}

  	saveCard() {
  		this.state.activeElement.id = UUID.v4();

  		if(!this.state.activeElement.WeekNumber || 
  			this.state.activeElement.WeekNumber == this.state.currentWeekNumber) {
			
			this.setState({ 
	  			albums: [this.state.activeElement].concat(this.state.albums),
	  			hasActive: false,
	  			activeElement: {}
  			});
  		}


  	}

	render() {
		const { isLoading, albums } = this.state;
		let element = null;

		if(isLoading) {
			element = (
				<div className='progress'>
					<CircularProgress />
				</div>
			)
		} else { 
			element = (
				<div>
					<div className='albums__container'>
						<div style={{marginLeft: '20px', marginTop: '20px'}}>
							<TextField
						    	hintText="Введите номер недели"
						    	floatingLabelText="Поиск по номеру недели"
						    	type='number'
						    	style={{width: '200px'}}
						    	ref={(weekNumber) => { this.weekNumber = weekNumber }}
							/>
							<RaisedButton 
								label="Поиск" 
								primary={false} 
								style={{marginLeft: '20px'}}
								onClick={() => this.searchWeekByNumber()}
							/>
						</div>
						<div style={{marginLeft: '20px', marginTop: '20px'}}>
							Неделя: { this.state.currentWeekNumber }
						</div>
						{ albums.map((al) => 
							<AlbumItem 
								album={al}
								current={al.id === this.state.activeElement.id}
								editItem={this.editItem} 
								key={al.id}
							/>) }
					</div>
					<AlbumCardNewEdit album={ this.state.hasActive ? 
											  this.state.activeElement : {}
											}
									  handleChange={ this.handleChange } 
									  resetCard={ this.resetCard }
									  handleChangeCB={ this.handleChangeCB }
									  saveCard={ this.saveCard }
					/>
				</div>
			);
		}

		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				{ element }
			</MuiThemeProvider>
		)
	}
}

export default connect(null, { GetWeek, GetWeekByNumber })(List);
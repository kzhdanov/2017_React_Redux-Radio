import 'babel-polyfill';
import 'whatwg-fetch'; 
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { Router, hashHistory } from 'react-router';
import routes from './routers';
import allReducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { CheckAuth } from './actions/Admin/login_action';
import CONST from './constants/CONSTANTS';

injectTapEventPlugin();

const store = createStore(
	allReducers,
	composeWithDevTools(
    	applyMiddleware(thunkMiddleware)
  	)
);
/*
if (localStorage.jwtToken) {
	CheckAuth(localStorage.jwtToken).then(
		(res) => {
			store.dispatch({ type: CONST.LOGIN, payload: res.isAuth });
		},
		(err) => console.log(err)
	);
}
*/  
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
    document.getElementById('root')
);

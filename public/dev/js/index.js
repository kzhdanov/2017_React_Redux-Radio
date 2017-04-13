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

injectTapEventPlugin();

const store = createStore(
	allReducers,
	composeWithDevTools(
    	applyMiddleware(thunkMiddleware)
  	)
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
    document.getElementById('root')
);

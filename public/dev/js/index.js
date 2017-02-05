import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Header from './components/header_component';
import Body from './components/body_component';
import allReducers from './reducers/index';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
	allReducers,
	applyMiddleware(thunkMiddleware)
);		
    
ReactDOM.render(
	<Provider store={store}>
		<div>
			<Header/>
			<Body/>
		</div>
	</Provider>,
    document.getElementById('root')
);

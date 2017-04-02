import 'babel-polyfill';
import 'whatwg-fetch'; 
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Header from './containers/header_component';
import Body from './components/body_component';
import Footer from './components/footer_component';
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
			<Footer />
		</div>
	</Provider>,
    document.getElementById('root')
);

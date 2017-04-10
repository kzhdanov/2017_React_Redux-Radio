import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/app_component';
import AppContainer from '../containers/app_container';
import AdminPage from '../components/Admin/index_component';
import AdminListPage from '../components/Admin/list_component';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppContainer} />
	<Route path='/radio_admin' component={AdminPage} />
	<Route path='/radio_admin/list' component={AdminListPage} />
  </Route>
)
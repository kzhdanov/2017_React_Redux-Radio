import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/app_component';
import AppContainer from '../containers/app_container';
import Login from '../components/Admin/login_component';
import AdminListPage from '../components/Admin/albums_list_component';

import Authenticate from '../utils/admin_utils';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppContainer} />
    <Route path='radio_admin'>
    	<IndexRoute component={Login} />
		<Route path='list' component={Authenticate(AdminListPage)} />
	</Route>
  </Route>
)
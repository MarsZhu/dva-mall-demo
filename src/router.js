import React, { PropTypes } from 'react';
import { Router, Route } from 'dva/router';
import Layout from './components/Layout/Layout';
import Accounts from './routes/Accounts';
import Demo from './routes/Menus';

export default function({ history }) {
	return (
		<Router history={history}>
			<Route path="/" component={Layout} >
				<Route path="/accounts" component={Accounts} />,
        <Route path="/menus" component={Demo} />
			</Route>
		</Router>
	);
};

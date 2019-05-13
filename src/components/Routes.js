import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import FriendListPage from './FriendListPage';

//settings for routes, which components will be called based on link
//callback is used for signin process. After google aunthentication, callback will be called
const Routes = () => (
    <Router component={App}>
        <div>
            <Route exact path="/" render={(props) => <App {...props} />} />
            <Route path="/friends" render={(props) => <FriendListPage {...props} />} />
        </div>
    </Router>
);

export default Routes;
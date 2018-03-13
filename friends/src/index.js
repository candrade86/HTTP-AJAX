import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './index.css';
import FriendsList from './FriendsList';
import AddFriend from './AddFriend';

ReactDOM.render(
  <Router>
  <div>
    <Route exact path="/" component={ FriendsList } />
    <Route path="/addFriend" component={ AddFriend } />
  </div>
  </Router>
  , document.getElementById('root')
);

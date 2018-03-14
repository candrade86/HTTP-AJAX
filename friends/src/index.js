import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './index.css';
import FriendsList from './FriendsList';
import AddFriend from './AddFriend';
import UpdateFriend from './UpdateFriend';

ReactDOM.render(
  <Router>
  <div>
    <Route exact path="/" component={ FriendsList } />
    <Route path="/addFriend" component={ AddFriend } />
    <Route path="/updateFriend/:id" component={ UpdateFriend } />
  </div>
  </Router>
  , document.getElementById('root')
);

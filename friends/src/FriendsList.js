import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './FriendsList.css'

export default class FriendsList extends React.Component {

  state = {
    friendsList: []
  };

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState(() => ({ friendsList: response.data })))
    .catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="friendsList">
        <Link to="/addFriend">
          <p>Add a new friend!</p>
        </Link>
        {this.state.friendsList.map(friend => (
          <div key={friend.id} className="friend">
            <h2>{friend.name}</h2>
            <p><strong>Age:</strong> {friend.age}</p>
            <p><strong>Contact:</strong> {friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

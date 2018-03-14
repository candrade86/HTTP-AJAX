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
    .catch(error => console.error(error));
  }

  deleteFriend = (id, event) => {
    this.id = id;
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(response => this.setState(() => ({ friendsList: response.data })))
    .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="friendsListContainer">
        <Link to="/addFriend">
          <p className="addFriendLink">Add a new friend!</p>
        </Link>
        <div className="friendsList">
        {this.state.friendsList.map(friend => (
          <div key={friend.id} className="friend">
            <h2>{friend.name}</h2>
            <p><strong>Age:</strong> {friend.age}</p>
            <p><strong>Contact:</strong> {friend.email}</p>
            <div className="optionsContainer">
              <button className="option">Update</button>
              <button className="option" onClick={this.deleteFriend.bind(this, friend.id)}>Delete</button>
            </div>
            </div>
        ))}
      </div>
    </div>
    );
  }
}

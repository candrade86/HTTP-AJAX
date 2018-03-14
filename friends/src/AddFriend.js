import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

import './AddFriend.css'

class AddFriend extends React.Component {

  state = {
    name: '',
    age: 18,
    email: ''
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, email } = this.state;
    axios.post('http://localhost:5000/friends', { name, age, email })
    .then(() => { this.props.history.push('/') })
    .catch(error => console.error(error));
  };

  render() {
    return (
    <div className="addFriendContainer">
      <Link to="/">
        <p>Return to your friend's list</p>
      </Link>
      <form className="addFriendForm" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <br />
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <br /><br />
        <label>
          Age:
          <br />
          <input name="age" type="number" value={this.state.age} onChange={this.handleChange} />
        </label>
        <br /><br />
        <label>
          Email:
          <br />
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <br /><br />
        <input type="submit" value="Save" />
        <br /><br />
      </form>
    </div>
    );
  }
}

export default withRouter(AddFriend);

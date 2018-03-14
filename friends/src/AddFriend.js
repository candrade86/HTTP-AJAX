import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import './AddFriend.css'

export default class AddFriend extends React.Component {

  state = {
    name: '',
    age: 18,
    email: '',
    redirect: false
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, email } = this.state;
    axios.post('http://localhost:5000/friends', { name, age, email })
    .then(() => { this.setState({ redirect: true }) })
    .catch(error => console.error(error));
  };

  render() {
    return (
    <div>
      <Link to="/">
        <p>Return to your friend's list</p>
      </Link>
      <form onSubmit={this.handleSubmit}>
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
      {this.state.redirect && <Redirect to="/" />}
    </div>
    );
  }
}

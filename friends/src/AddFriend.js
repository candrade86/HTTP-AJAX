import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import './AddFriend.css'

export default class AddFriend extends React.Component {

  state = {
      name: '',
      age: 18,
      email: ''
    };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const name = this.state.name;
    const age = this.state.age;
    const email = this.state.email;
    axios.post('http://localhost:5000/friends', {
      name: `${name}`,
      age: parseInt(age, 10),
      email: `${email}`
    })
    .then(response => console.log(response))
    .catch(error => console.error(error));
    event.preventDefault();
    this.props.history.push('/');
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
    </div>
    );
  }
}

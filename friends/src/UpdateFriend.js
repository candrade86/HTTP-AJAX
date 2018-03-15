import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

import './UpdateFriend.css'

class UpdateFriend extends React.Component {

  state = {
    friendsList: [],
    name: '',
    age: 18,
    email: '',
    id: this.props.match.params.id
  };

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState(() => ({ friendsList: response.data })))
    .catch(error => console.error(error));
  }

  populateState = (event, state) => {
    event.preventDefault();
    this.setState(function() {
      return {
        name: this.state.friendsList[this.state.id - 1].name,
        age: this.state.friendsList[this.state.id - 1].age,
        email: this.state.friendsList[this.state.id - 1].email
      }
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, age, email, id } = this.state;
    axios.put(`http://localhost:5000/friends/${id}`, { name, age, email })
    .then(() => { this.props.history.push('/') })
    .catch(error => console.error(error));
  };

  render() {
    return (
    <div className="addFriendContainer">
      <Link to="/">
        <p>Return to your friend's list</p>
        <button onClick={this.populateState.bind(this.state)}>Show Friend Info</button>
      </Link>
      <form className="addFriendForm" onSubmit={this.handleSubmit.bind(this.state)}>
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

export default withRouter(UpdateFriend);

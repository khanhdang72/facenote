import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({friends: users}));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { friends, searchField } = this.state;
    const filteredFriends = friends.filter(friend => friend.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <p className="title">Facenote</p>
        <SearchBox placeholder="Search friends" handleChange={this.handleChange}></SearchBox>
        <CardList friends={filteredFriends}></CardList>
      </div>
    );
  }
}

export default App;

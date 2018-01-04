import React, { Component } from 'react';
import './App.css';
import UsersTable from './UsersTable'
import SearchBar from "./SearchBar";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount () {
    fetch("https://randomuser.me/api?results=10")
      .then(response => response.json())
      .then(data => this.setState( {data} ))
  }

  render() {
    return (
      <div>
        {
          this.state.data
          &&
          this.state.data.results
            .map(
              profile => <Profile profile={profile}
              />)
        }
        <UsersTable/>
        <SearchBar/>
      </div>
    )
  }
}

const firstCharToUpperCase = (string) => {
  const stringArr = string.split('');
  stringArr[0] = stringArr[0].toUpperCase();

  return stringArr.join('')
};

const Profile = ({profile}) => (
  <div>
    <div>
      <img src={profile.picture.thumbnail} alt='face'/>
    </div>

    {firstCharToUpperCase(profile.name.first)}
    {' '}
    {firstCharToUpperCase(profile.name.last)}

    <div>
      <a href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
    </div>
    <hr/>
  </div>
);

export default App;

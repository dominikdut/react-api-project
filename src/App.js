import React, { Component } from 'react';
import './App.css';
import UsersTable from './UsersTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersTable/>
      </div>
    );
  }
}

export default App;

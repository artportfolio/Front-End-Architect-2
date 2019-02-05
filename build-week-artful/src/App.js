import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import LoginView from './components/Login/Login';
import HomeView from './views/HomeView';

import './App.css';
import './components/Navbar/Navbar.css';
import './components/Login/Login.css';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Route path="/" component={HomeView} />
          <Route path="/login" component={LoginView} />



      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  toggled: state.toggled
})

export default connect(mapStateToProps)(App);

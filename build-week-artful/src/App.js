import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import LoginView from './components/Login/Login';
import HomeView from './views/HomeView';
import SignUp from './components/Login/SignUp';
import Navbar from './components/Navbar/Navbar';
import UserView from './views/UserView';

import './App.css';
import './components/Navbar/Navbar.css';
import './components/Login/Login.css';


class App extends Component {
  render() {
    return (
      <div className="App">

          <Navbar />
          <Route exact path="/" component={HomeView} />
          <Route path="/login" component={LoginView} />
          <Route path="/signup" component={SignUp} />
          <Route path="/user/:username" component={UserView} />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
  toggled: state.toggled
})

export default connect(mapStateToProps)(App);

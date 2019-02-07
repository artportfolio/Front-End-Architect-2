import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import ItemList from '../Items/ItemList';

class Home extends React.Component {

    render(){
        return (
            <div className="Home">
                <h1>Welcome to <span className="logo"> artful </span></h1>
                <ItemList />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    isLoggedIn: state.isLoggedIn,
    toggled: state.toggled,
    photos: state.photos,
    users: state.users,
    error: state.error,
    fetching: false,
})

export default withRouter(connect(mapStateToProps)(Home));
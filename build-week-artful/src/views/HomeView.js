import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { getPhotos, getUsers } from '../store/actions';

import Home from '../components/Home/Home';

class HomeView extends React.Component {

    componentWillMount(){
   
        if(this.props.users.length < 2){
            this.props.getUsers();
            this.props.getPhotos();
        }
    }

    render(){
        return (
            <div className="HomeView">
                <Home />
            </div>
        );
    }
    }


const mapStateToProps = state => ({
    toggled: state.toggled,
    currentUser: state.currentUser,
    isLoggedIn: state.isLoggedIn,
    photos: state.photos,
    users: state.users
})

export default withRouter(connect(mapStateToProps, { getUsers, getPhotos })(HomeView));
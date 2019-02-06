import React from 'react';
import { connect } from 'react-redux';

import { getUsers, getPhotos } from '../store/actions';
import User from '../components/User/User';

class UserView extends React.Component {


    componentDidMount(){
   
        if(this.props.users.length < 2){
            this.props.getUsers();
            this.props.getPhotos();
        }
    }

    render(){
        const user = this.props.users.find(user => user.username === this.props.match.params.username)
        console.log(user);
        return (
            <div className="UserView">
                {user && <User 
                    user={user}
                    userPhotos={this.props.photos.filter(photo => photo.userId === user.id)}
                    /> }
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
    error: null,
    fetching: state.fetching
})

export default connect(mapStateToProps, { getUsers, getPhotos })(UserView);
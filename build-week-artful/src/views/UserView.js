import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { getUsers, getPhotos, deletePost, updatePost, toggleUpdate } from '../store/actions';
import User from '../components/User/User';

class UserView extends React.Component {
    state = {
        postUpdating: null,
        user: {}
    }


    componentDidMount(){
   
        if(this.props.users.length < 2){
            this.props.getUsers();
            this.props.getPhotos();
        }
    }

    deletePost = (e, id) => {
        this.props.deletePost(id);
    }

    updatePost = (e, post, id) => {
        e.preventDefault();
        this.props.updatePost(post, id);
        this.props.getPhotos();
        this.setState({
            postUpdating: null
        })
    }

    toggleUpdateForm = (e, photo) => {
        console.log('updating');
        e.preventDefault();
        this.setState(prevState => ({
            postUpdating: photo.id === prevState.postUpdating ? '' : photo.id
        }))
        this.props.toggleUpdate(photo);
    }

    render(){
        const user = this.props.users.find(user => user.username === this.props.match.params.username)
        console.log(user);
        return (
            <div className="UserView">
                {user && <User 
                    user={user}
                    userPhotos={this.props.photos.filter(photo => photo.userId === user.id)}
                    deletePost={this.deletePost}
                    updatePost={this.updatePost}
                    postUpdating={this.state.postUpdating}
                    toggleUpdateForm={this.toggleUpdateForm}
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

export default withRouter(connect(mapStateToProps, { getUsers, getPhotos, deletePost, updatePost, toggleUpdate })(UserView));
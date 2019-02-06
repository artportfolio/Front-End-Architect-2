import React from 'react';

import { connect } from 'react-redux';

import ItemForm from '../ItemForm/ItemForm';
import Item from '../Items/Item';

const User = props =>{
    console.log(props);
    return (
        <div className="UserView">
            {<h1>{props.user.username}'s Posts</h1>}
            {props.currentUser === props.user.username && <ItemForm />}
            {props.userPhotos.map(photo => <Item key={photo.id + photo.postName} photo={photo} 
            deletePost={props.deletePost}
            updatePost={props.updatePost}
            toggleUpdateForm={props.toggleUpdateForm}
            postUpdating={props.postUpdating}
                    user={props.user} deleteButton={props.currentUser === props.user.username} />)}
            
        </div>            
    );
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

export default connect(mapStateToProps)(User);
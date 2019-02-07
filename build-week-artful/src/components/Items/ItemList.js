import React from 'react';

import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { upvote } from '../../store/actions';

import Item from './Item';

const ItemList = props => {

        return (
            <div className="ItemList">
            {
                props.photos.map(photo => {
                    const user= props.users.find(user => `${user.id}` === `${photo.userId}`);
                    return (user && <Item 
                    key={photo.id + photo.postName} photo={photo} 
                    user={user}
                    />);
                })
            }
            </div>
        );
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    isLoggedIn: state.isLoggedIn,
    toggled: state.toggled,
    photos: state.photos,
    users: state.users,
    fetching: state.fetching
})

export default withRouter(connect(mapStateToProps, { upvote })(ItemList));
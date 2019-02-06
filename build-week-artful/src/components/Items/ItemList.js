import React from 'react';

import { connect } from 'react-redux';

import Item from './Item';

class ItemList extends React.Component {

    render(){
        return (
            <div className="ItemList">{this.props.photos.map(photo => <Item 
                                                        key={photo.id + photo.postName} photo={photo} 
                                                        user={this.props.users.find(user => `${user.id}` === `${photo.userId}`)} 
                                                        />)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    isLoggedIn: state.isLoggedIn,
    toggled: state.toggled,
    photos: state.photos,
    users: state.users
})

export default connect(mapStateToProps, { })(ItemList);
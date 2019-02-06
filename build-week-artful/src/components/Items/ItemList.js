import React from 'react';

import { connect } from 'react-redux';

import Item from './Item';

class ItemList extends React.Component {

    render(){
        return (
            <div className="ItemList">
            {this.props.fetching ? <p>Getting Data</p> 
            :             this.props.photos.map(photo => <Item 
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
    users: state.users,
    fetching: state.fetching
})

export default connect(mapStateToProps, { })(ItemList);
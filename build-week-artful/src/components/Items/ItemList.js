import React from 'react';

import { connect } from 'react-redux';

class ItemList extends React.Component {

    componentDidMount(){

    }

    render(){
        return (
            <div className="ItemList">Bunch of photos</div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    isLoggedIn: state.isLoggedIn,
    toggled: state.toggled,
    photos: state.photos
})

export default connect(mapStateToProps, {})(ItemList);
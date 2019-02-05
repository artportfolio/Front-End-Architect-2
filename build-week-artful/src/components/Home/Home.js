import React from 'react';
import { connect } from 'react-redux';

import ItemList from '../Items/ItemList';

class Home extends React.Component {

    render(){
        return (
            <div>
                <h1>Home</h1>
                <ItemList />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    isLoggedIn: state.isLoggedIn,
    toggled: state.toggled,
})

export default Home;
import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/Home/Home';

const HomeView = props => {
    return (
        <div>
            <Home />
        </div>
    );
}

const mapStateToProps = state => ({
    toggled: state.toggled
})

export default connect(mapStateToProps)(HomeView);
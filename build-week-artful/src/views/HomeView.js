import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar/Navbar';

const HomeView = props => {
    return (
        <div>
            <Navbar />
        </div>
    );
}

const mapStateToProps = state => ({
    toggled: state.toggled
})

export default connect(mapStateToProps)(HomeView);
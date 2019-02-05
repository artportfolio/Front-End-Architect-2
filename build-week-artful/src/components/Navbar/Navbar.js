import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleProp } from '../../store/actions';


const Navbar = props => {
    return (
        <div className="Navbar">

            <NavLink to="/" className="logo">
            <div onClick={() => props.toggleProp()}>artful</div>
            
            </NavLink>
            <div className="nav-links">
            
            {props.isLoggedIn ? <NavLink to="/"><p onClick={() => props.toggleProp()}>Logout</p></NavLink> : <NavLink to="/login"><p onClick={() => props.toggleProp()}>Login</p></NavLink>}
            
            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    toggled: state.toggled
})

export default connect(mapStateToProps, { toggleProp })(Navbar);
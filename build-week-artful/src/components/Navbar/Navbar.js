import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleProp, logout } from '../../store/actions';


const Navbar = props => {
    return (
        <div className="Navbar">

            <NavLink to="/" className="logo">
            <div onClick={() => props.toggleProp()}>artful</div>
            
            </NavLink>
            <div className="nav-links">
            
            {props.isLoggedIn ? <div className="login-signup"><NavLink to={`/user/${props.currentUser}`}><p onClick={() => props.toggleProp()}>{props.currentUser}</p></NavLink><NavLink to="/"><p onClick={() => props.logout()}>Logout</p></NavLink></div>
                : <div className="login-signup"><NavLink to="/login"><p onClick={() => props.toggleProp()}>Login</p></NavLink>
                    <p> or </p> <NavLink to="/signup"><p onClick={() => props.toggleProp()}>Sign Up</p></NavLink>
                </div>               
                }
            
            </div>

        </div>
    );
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    isLoggedIn: state.isLoggedIn,
    toggled: state.toggled
})

export default connect(mapStateToProps, { toggleProp, logout })(Navbar);
import React from 'react';
import { connect } from "react-redux";
import { Button, Form, Input } from 'reactstrap';
import { login } from '../../store/actions';

class LoginView extends React.Component {

    login = e => {
        e.preventDefault();
        this.props.login();
        this.props.history.push('/')
    } 

    render(){
        return (
            <div className="Login">
                <Form onSubmit={e => this.login(e)}>
                    <h1>Login to artful</h1>
    
                    <Input type="text" name="username" placeholder="Username..." />
                    <Input type="password" name="password" placeholder="Password..." />
                    <Button type="submit">Log In</Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    toggled: state.toggled
})

export default connect(mapStateToProps, { login })(LoginView);
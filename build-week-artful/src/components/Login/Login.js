import React from 'react';
import { connect } from "react-redux";
import { Button, Form, Input } from 'reactstrap';
import { login } from '../../store/actions';

class LoginView extends React.Component {
    state = { 
        user: {
            username: '',
            password: ''
        }
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.user);
        this.props.history.push('/')
    } 

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => ({
            user: {
                ...prevState.user,
                [name]: value
            }
        }))
    }

    render(){
        return (
            <div className="Login">
                <Form onSubmit={e => this.login(e)}>
                    <h1>Login to artful</h1>
    
                    <Input required type="text" name="username" placeholder="Username..." onChange={this.handleChange} vlaue={this.state.user.username} />
                    <Input required type="password" name="password" placeholder="Password..." onChange={this.handleChange} vlaue={this.state.user.password}/>
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
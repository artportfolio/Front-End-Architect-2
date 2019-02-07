import React from 'react';
import { connect } from "react-redux";
import { Button, Form, Input, Label } from 'reactstrap';
import { signUp } from '../../store/actions';

class SignUp extends React.Component {
    state = {
        user: {
            username: '',
            password: '',
            fullName: '',           
            email: '',
            userImgUrl: '',
            
        }
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

    signUp = e => {
        e.preventDefault();
        this.props.signUp(this.state.user);
        this.props.history.push('/login')
    } 

    render(){
        return (
            <div className="SignUp">
                <Form onSubmit={e => this.signUp(e)}>
                    <h1>Sign Up for <span className="logo">artful</span></h1>
    
                    <Input type="text" 
                            name="username" placeholder="Username..." value={this.state.user.username} 
                            onChange={this.handleChange} required />
                    <Input type="text" name="fullName" placeholder="Full Name..." 
                            value={this.state.user.fullname} onChange={this.handleChange} required />
                    <Input type="email" name="email" placeholder="Email..." 
                            value={this.state.user.email} onChange={this.handleChange} required />
                    <Input type="url" accept="image/" name="userImgUrl" placeholder="User image URL..." onChange={this.handleChange} />
                    <Input type="password" name="password" placeholder="Password..." value={this.state.user.password} onChange={this.handleChange} />
                    <Button type="submit">Sign Up</Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    toggled: state.toggled,
    error: state.error
})

export default connect(mapStateToProps, { signUp })(SignUp);
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
            <div className="Login">
                <Form onSubmit={e => this.signUp(e)}>
                    <h1>Sign Up for artful</h1>
    
                    <Input type="text" 
                            name="username" placeholder="Username..." value={this.state.user.username} 
                            onChange={this.handleChange} required />
                    <Input type="text" name="fullName" placeholder="Full Name..." 
                            value={this.state.user.fullname} onChange={this.handleChange} required />
                    <Input type="email" name="email" placeholder="Email..." 
                            value={this.state.user.email} onChange={this.handleChange} required />
                    <Label for="userImgUrl">Choose an image to upload</Label>
                    <Input type="file" accept="image/" id="userImgUrl" name="userImgUrl" placeholder="User image..." onChange={this.handleChange} />
                    <Input type="password" name="password" placeholder="Password..." value={this.state.user.password} onChange={this.handleChange} />
                    <Button type="submit">Sign Up</Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    toggled: state.toggled
})

export default connect(mapStateToProps, { signUp })(SignUp);
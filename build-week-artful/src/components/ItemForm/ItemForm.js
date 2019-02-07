import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'reactstrap';
import { withRouter } from "react-router";

import { addPhoto } from '../../store/actions';

class ItemForm extends React.Component {
    state = {
        newPost: {
            imageUrl: '',
            description: '',
            postName: ''
        }
    }

    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevState => ({
            newPost: {
                ...prevState.newPost,
                [name]: value
            }
        }))
    }

    // componentDidMount(){
    //     const user = this.props.users.find(u => u.username === this.props.currentUser)
    //     this.setState(prevState => ({
    //         newPost: {
    //             ...prevState.newPost,
    //             userId: user.id
    //         }
    //     }))
    // }

    addPost = e => {
        e.preventDefault();
        this.props.addPhoto(this.state.newPost);
    }

    render(){
        return (
            <Form className="ItemForm" onSubmit={this.addPost} >
                <h1>Add a photo!</h1>
                <Input type="url" placeholder="Image URL" name="imageUrl" onChange={this.handleChange} />
                <Input type="text" placeholder="Title" name="postName" onChange={this.handleChange} />
                <Input className="text-area" type="textarea" placeholder="Description" name="description" onChange={this.handleChange} />
                <Button type="submit">Add Post</Button>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
    users: state.users,
    toggled: state.toggled
})

export default withRouter(connect(mapStateToProps, { addPhoto } )(ItemForm));
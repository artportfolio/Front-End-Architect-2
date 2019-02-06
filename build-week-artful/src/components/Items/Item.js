import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Label } from 'reactstrap';

import { handleChange } from '../../store/actions';

const Item = props => {
    const words = ['nature', 'water', 'fire', 'air', 'mountain', 'animal', 'urban', 'landscape', 'canyon', 'flying'];
    const num = Math.floor(Math.random() * 10);
    return (
        <div className="Item">
            <p className="username">{props.user.username}</p>
            <img src={props.photo.imageUrl.includes('http') ? props.photo.imageUrl : `https://source.unsplash.com/600x800/?${words[num]}`} alt={props.photo.title} />
            {props.deleteButton && <div className="postButtons"><button onClick={e => props.toggleUpdateForm(e, props.photo.id)}>Update</button><button onClick={(e) => props.deletePost(e, props.photo.id)}>Delete</button></div>}
            {props.photo.id === props.postUpdating &&             
            <Form className="ItemForm" onSubmit={e => props.updatePost(e, props.updatedPost, props.photo.id)} >
                <h1>Update photo!</h1>
                <Input type="url" placeholder="Image URL" name="imageUrl" onChange={props.handleChange} value={props.updatedPost.imageUrl} />
                <Input type="text" placeholder="Title" name="postName" onChange={props.handleChange} value={props.updatedPost.postName} />
                <Input type="textarea" placeholder="Description" name="description" onChange={props.handleChange} value={props.updatedPost.description} />
                <Button type="submit">Update Post</Button>
            </Form>}
        </div>
    );
}

const mapStateToProps = state => ({
    updatedPost: {
        imageUrl: state.imageUrl,
        description: state.description,
        postName: state.postName
    }
})

export default connect(mapStateToProps, { handleChange })(Item);
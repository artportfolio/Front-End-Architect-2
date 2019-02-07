import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import { handleChange, toggleProp, upvote } from '../../store/actions';

const Item = props => {
    const words = ['nature', 'water', 'fire', 'air', 'mountain', 'animal', 'urban', 'landscape', 'canyon', 'flying'];
    const num = Math.floor(Math.random() * 10);
    return (
        <div className="Item">
            <Link to={`/user/${props.user.username}`} onClick={props.toggleProp}> <h3 className="username">{props.user.username}</h3></Link>
            <img src={props.photo.imageUrl.includes('http') ? props.photo.imageUrl : `https://source.unsplash.com/600x800/?${words[num]}`} alt={props.photo.title} />
            <div className="bottom-info">
                <i className={`far fa-heart ${props.likedPosts.includes(props.photo.id) ? 'fas liked' : 'far'}`} onClick={() => props.upvote(props.photo.id)} > {props.photo.upvotes}</i>
                <p className="description">{props.photo.description}</p> 
            </div>
            
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
        postName: state.postName,
    },
    likedPosts: state.likedPosts
})

export default withRouter(connect(mapStateToProps, { handleChange, toggleProp, upvote })(Item));
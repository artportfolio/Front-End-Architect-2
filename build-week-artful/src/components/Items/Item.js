import React from 'react';
import { deletePost } from '../../store/actions';
import { connect } from 'react-redux';

const Item = props => {
    const words = ['nature', 'water', 'fire', 'air', 'mountain', 'animal', 'urban', 'landscape', 'canyon', 'flying'];
    const num = Math.floor(Math.random() * 10);
    return (
        <div className="Item">
            <p className="username">{props.user.username}</p>
            <img src={props.photo.imageUrl.includes('http') ? props.photo.imageUrl : `https://source.unsplash.com/600x800/?${words[num]}`} alt={props.photo.title} />
            {props.deleteButton && <div className="postButtons"><button>Update</button><button onClick={() => props.deletePost(props.photo.id)}>Delete</button></div>}
        </div>
    );
}

export default connect(null, { deletePost })(Item);
import React from 'react';

const Item = props => {
    return (
        <div className="Item">
            <p className="username">{props.user.username}</p>
            <img src={props.photo.imageUrl} />
        </div>
    );
}

export default Item;
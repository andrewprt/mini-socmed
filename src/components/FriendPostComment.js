import React from 'react';

const FriendPostComment = ({ name, email, body }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
}

export default FriendPostComment;

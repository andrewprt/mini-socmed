import React from 'react';

const FriendPost = ({ title, body }) => {
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    );
}

export default FriendPost;

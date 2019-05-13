import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ name, email, id }) => {
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <Link to={{
                    pathname: '/friendPosts',
                    id: { id }
                }}>View Posts</Link>
                <Link to={{
                    pathname: '/friendAlbums',
                    id: { id }
                }}>View Albums</Link>
            </div>
        </div>
    );
}

export default Friend;

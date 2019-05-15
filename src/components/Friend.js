import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ name, email, id }) => {
    return (
        <div className="friends--card">
            <h2>{name}</h2>
            <p>{email}</p>
            <div className="friends--card-links">
                <Link to={{
                    pathname: '/friendPosts',
                    id: { id }, name: { name }
                }}>View Posts</Link>&nbsp;&nbsp;
            <Link to={{
                    pathname: '/friendAlbums',
                    id: { id }, name: { name }
                }}>View Albums</Link>
            </div>
        </div>
    );
}

export default Friend;

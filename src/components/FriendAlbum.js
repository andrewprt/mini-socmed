import React from 'react';
import { Link } from 'react-router-dom';

const FriendAlbum = ({ title, id }) => {
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <Link to={{
                    pathname: '/friendPhotos',
                    id: { id }
                }}>View Photos</Link>
            </div>
        </div>
    );
}

export default FriendAlbum;

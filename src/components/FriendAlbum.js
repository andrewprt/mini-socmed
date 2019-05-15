import React from 'react';
import { Link } from 'react-router-dom';

const FriendAlbum = ({ title, id }) => {
    return (
        <div className="friends--card">
            <h3>{title}</h3>
            <div className="friends--card-links">
                <Link to={{
                    pathname: '/friendPhotos',
                    id: { id }, title: { title }
                }}>View Photos</Link>
            </div>
        </div>
    );
}

export default FriendAlbum;

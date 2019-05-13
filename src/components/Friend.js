import React from 'react';

const Friend = ({ name, email }) => {
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Friend;

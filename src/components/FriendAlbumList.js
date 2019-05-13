import React from 'react';
import FriendAlbum from './FriendAlbum';

const FriendAlbumList = ({ friendAlbums }) => {
    return (
        <div>
            {
                friendAlbums.map((friendAlbum, i) => {
                    return (
                        <FriendAlbum
                            key={i}
                            id={friendAlbum.id}
                            title={friendAlbum.title}
                        />
                    );
                })
            }
        </div>
    );
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default FriendAlbumList;
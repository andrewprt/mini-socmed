import React from 'react';
import FriendAlbum from './FriendAlbum';

const FriendAlbumList = ({ friendAlbums, name }) => {
    return (
        <div className="content--title">
            <h2><font>{name}'s</font> Albums</h2>
            <div className="friends">
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
        </div>
    );
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default FriendAlbumList;
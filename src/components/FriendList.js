import React from 'react';
import Friend from './Friend';
import '../styles/Friends.css';

const FriendList = ({ friends }) => {
    return (
        <div className="friends">
            {
                friends.map((friend, i) => {
                    return (
                        <Friend
                            key={i}
                            id={friend.id}
                            name={friend.name}
                            email={friend.email}
                        />
                    );
                })
            }
        </div>
    );
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default FriendList;
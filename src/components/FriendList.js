import React from 'react';
import Friend from './Friend';

const FriendList = ({ friends }) => {
    return (
        <div>
            {
                friends.map((friend, i) => {
                    return (
                        <Friend
                            key={i}
                            id={friends[i].id}
                            name={friends[i].name}
                            email={friends[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default FriendList;
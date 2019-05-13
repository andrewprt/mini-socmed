import React from 'react';
import FriendPost from './FriendPost';

const FriendPostList = ({ friendPosts }) => {
    return (
        <div>
            {
                friendPosts.map((friendPost, i) => {
                    return (
                        <FriendPost
                            key={i}
                            id={friendPost.id}
                            title={friendPost.title}
                            body={friendPost.body}
                        />
                    );
                })
            }
        </div>
    );
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default FriendPostList;
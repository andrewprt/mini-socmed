import React from 'react';
import FriendPostComment from './FriendPostComment';

const FriendPostCommentList = ({ comments }) => {
    return (
        <div>
            {
                comments.map((comment, i) => {
                    return (
                        <FriendPostComment
                            key={i}
                            id={comment.id}
                            name={comment.name}
                            email={comment.email}
                            body={comment.body}
                        />
                    );
                })
            }
        </div>
    );
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default FriendPostCommentList;
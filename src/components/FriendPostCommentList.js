import React from 'react';
import FriendPostComment from './FriendPostComment';

const FriendPostCommentList = ({ comments, postId }) => {
    return (
        <div className="friendComments">
            {
                comments.map((comment) => {
                    return (
                        <FriendPostComment
                            key={comment.id}
                            id={comment.id}
                            postId={postId}
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
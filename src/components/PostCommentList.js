import React from 'react';
import PostComment from './PostComment';

const PostCommentList = ({ comments, postId }) => {
    return (
        <div className="comments">
            {
                comments.map((comment) => {
                    return (
                        <PostComment
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
export default PostCommentList;
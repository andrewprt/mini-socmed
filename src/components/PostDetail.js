import React from 'react';
import { connect } from 'react-redux';
import PostCommentList from './PostCommentList';
import NewComment from './NewComment';

const mapStateToProps = (state, param) => {
    return {
        comments: state.postList.comments.filter(x => x.postId === param.id)
    }
}

class PostDetail extends React.Component {
    render() {
        const { id, comments } = this.props;
        return (
            <div>
                <PostCommentList comments={comments} postId={id} />
                <NewComment id={id} />
            </div>
        );
    }
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default connect(mapStateToProps)(PostDetail);
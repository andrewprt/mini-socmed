import React from 'react';
import { connect } from 'react-redux';
import { getFriendPostCommentList } from '../actions';
import FriendPostCommentList from './FriendPostCommentList';
import NewFriendComment from './NewFriendComment';

// const mapStateToProps = (state, param) => {
//     const x = state.friendList.friendPosts.findIndex(z => z.id === param.id);
//     return {
//         comments: state.friendList.friendPosts[x].comments
//     }
// }

const mapStateToProps = (state, param) => {
    return {
        comments: state.friendList.friendComments.filter(x => x.postId === param.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetFriendPostCommentList: (param) => dispatch(getFriendPostCommentList({
            id: param.id
        }))
    }
}

class FriendPostDetail extends React.Component {
    componentDidMount() {
        if (this.props.comments.length === 0) {
            this.props.onGetFriendPostCommentList({ id: this.props.id });
        }
    }

    render() {
        const { id, body, comments } = this.props;
        return (
            <div>
                {body}
                <FriendPostCommentList comments={comments} postId={id} />
                <NewFriendComment id={id} />
            </div>
        );
    }
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default connect(mapStateToProps, mapDispatchToProps)(FriendPostDetail);
import React from 'react';
import '../styles/Friends.css'
import { connect } from 'react-redux';
import { getFriendPostCommentList } from '../actions';
import FriendPostCommentList from './FriendPostCommentList';
import NewFriendComment from './NewFriendComment';


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
                <span className="friendPost--content">{body}</span>
                <span className="friendPost--commentTitle">Comments</span>
                <FriendPostCommentList comments={comments} postId={id} />
                <NewFriendComment id={id} />
            </div>
        );
    }
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default connect(mapStateToProps, mapDispatchToProps)(FriendPostDetail);
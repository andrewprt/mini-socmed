import React from 'react';
import { connect } from 'react-redux';
import { getFriendPostCommentList } from '../actions';
import FriendPostCommentList from './FriendPostCommentList';

const mapStateToProps = (state, param) => {
    const x = state.friendList.friendPosts.findIndex(z => z.id === param.id);
    return {
        comments: state.friendList.friendPosts[x].comments
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
        this.props.onGetFriendPostCommentList({ id: this.props.id });
    }

    render() {
        const { body, comments } = this.props;
        return (
            <div>
                {body}
                <FriendPostCommentList comments={comments} />
            </div>
        );
    }
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default connect(mapStateToProps, mapDispatchToProps)(FriendPostDetail);
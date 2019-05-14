import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FriendPostList from './FriendPostList';
import { connect } from 'react-redux';
import { getFriendPostList } from '../actions';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
    return {
        friendPosts: state.friendList.friendPosts
    }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
    return {
        onGetFriendPostList: (param) => dispatch(getFriendPostList({ id: param.id }))
    }
}

class FriendPostListPage extends React.Component {
    componentDidMount() {
        if (this.props.friendPosts.length === 0) {
            this.props.onGetFriendPostList(this.props.location.id);
        }
    }

    render() {
        const { friendPosts } = this.props;
        return (
            <div className="container">
                <Header />
                <div className="content">
                    <FriendPostList friendPosts={friendPosts} />
                </div>
                <Footer />
            </div>
        );
    }
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default connect(mapStateToProps, mapDispatchToProps)(FriendPostListPage);
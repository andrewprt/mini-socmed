import React from 'react';
import PostList from './PostList';
import NewPost from './NewPost';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        posts: state.postList.posts
    }
}

class PostListPage extends React.Component {
    render() {
        const { posts } = this.props;
        return (
            <div>
                <NewPost />
                <PostList posts={posts} />
            </div>
        )
    }
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default connect(mapStateToProps)(PostListPage);
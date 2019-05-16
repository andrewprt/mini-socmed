import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
    render() {
        const { posts } = this.props;
        return (
            <div className="posts--list">
                {
                    posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                body={post.body}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default PostList;
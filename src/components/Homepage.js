import React from 'react'
import PostList from './PostList';


class Homepage extends React.Component {
    render() {
        return (
            <PostList />
        )
    }
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default Homepage;
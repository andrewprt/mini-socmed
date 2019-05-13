import React from 'react'
import Header from './Header'


class PostList extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
            </div>
        )
    }
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default PostList;
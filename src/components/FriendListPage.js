import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FriendList from './FriendList';
import { connect } from 'react-redux';
import { getFriendList } from '../actions';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
    return {
        friends: state.friendList.friends
    }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
    return {
        onGetFriendList: () => dispatch(getFriendList())
    }
}

class FriendListPage extends React.Component {
    componentDidMount() {
        this.props.onGetFriendList();
    }

    render() {
        const { friends } = this.props;
        return (
            <div className="container">
                <Header />
                <div className="content friends">
                    <FriendList friends={friends} />
                </div>
                <Footer />
            </div>
        );
    }
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default connect(mapStateToProps, mapDispatchToProps)(FriendListPage);
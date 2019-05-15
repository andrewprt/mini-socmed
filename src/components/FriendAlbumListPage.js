import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FriendAlbumList from './FriendAlbumList';
import { connect } from 'react-redux';
import { getFriendAlbumList } from '../actions';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
    return {
        friendAlbums: state.friendList.friendAlbums
    }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
    return {
        onGetFriendAlbumList: (param) => dispatch(getFriendAlbumList({ id: param.id }))
    }
}

class FriendAlbumListPage extends React.Component {
    componentDidMount() {
        if (this.props.friendAlbums.length === 0) {
            this.props.onGetFriendAlbumList(this.props.location.id);
        }
    }

    render() {
        const { friendAlbums } = this.props;
        return (
            <div className="container">
                <Header />
                <div className="content">
                    <FriendAlbumList friendAlbums={friendAlbums} name={this.props.location.name.name} />
                </div>
                <Footer />
            </div>
        );
    }
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default connect(mapStateToProps, mapDispatchToProps)(FriendAlbumListPage);
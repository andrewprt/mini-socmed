import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FriendAlbumPhoto from './FriendAlbumPhoto';
import { connect } from 'react-redux';
import { getFriendAlbumPhotoList } from '../actions';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state, param) => {
    const x = state.friendList.friendAlbums.findIndex(z => z.id === param.location.id.id);
    return {
        friendAlbumPhotos: state.friendList.friendAlbums[x].photos
    }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
    return {
        onGetFriendAlbumPhotoList: (param) => dispatch(getFriendAlbumPhotoList({ id: param.id }))
    }
}

class FriendAlbumPhotoList extends React.Component {
    componentDidMount() {
        if (this.props.friendAlbumPhotos.length === 0) {
            this.props.onGetFriendAlbumPhotoList(this.props.location.id);
        }
    }

    render() {
        const { friendAlbumPhotos } = this.props;
        return (
            <div className="container">
                <Header />
                <div className="content">
                    {
                        friendAlbumPhotos.map((photo) => {
                            return (
                                <FriendAlbumPhoto
                                    key={photo.id}
                                    id={photo.id}
                                    title={photo.title}
                                    url={photo.url}
                                    thumbnailUrl={photo.thumbnailUrl}
                                />
                            );
                        })
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

//connect mapStateToProps and mapDispatchToProps to actions.js and reducers.js
export default connect(mapStateToProps, mapDispatchToProps)(FriendAlbumPhotoList);
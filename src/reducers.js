import {
    GET_FRIEND_ALBUM_LIST_PENDING,
    GET_FRIEND_ALBUM_LIST_SUCCESS,
    GET_FRIEND_ALBUM_LIST_FAILED,
    GET_FRIEND_POST_LIST_PENDING,
    GET_FRIEND_POST_LIST_SUCCESS,
    GET_FRIEND_POST_LIST_FAILED,
    GET_FRIEND_LIST_PENDING,
    GET_FRIEND_LIST_SUCCESS,
    GET_FRIEND_LIST_FAILED
} from './constants';

const friends = {
    friends: [],
    isPending: true,
    friendPosts: [],
    friendAlbums: []
}

export const friendList = (state = friends, action = {}) => {
    switch (action.type) {
        case GET_FRIEND_LIST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case GET_FRIEND_LIST_SUCCESS:
            return Object.assign({}, state, { friends: action.payload, isPending: false })
        case GET_FRIEND_LIST_FAILED:
            return Object.assign({}, state, { error: action.payload })
        case GET_FRIEND_POST_LIST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case GET_FRIEND_POST_LIST_SUCCESS:
            return Object.assign({}, state, { friendPosts: action.payload, isPending: false })
        case GET_FRIEND_POST_LIST_FAILED:
            return Object.assign({}, state, { error: action.payload })
        case GET_FRIEND_ALBUM_LIST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case GET_FRIEND_ALBUM_LIST_SUCCESS:
            return Object.assign({}, state, { friendAlbums: action.payload, isPending: false })
        case GET_FRIEND_ALBUM_LIST_FAILED:
            return Object.assign({}, state, { error: action.payload })
        default:
            return state
    }
}

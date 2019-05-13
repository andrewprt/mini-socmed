import {
    GET_FRIEND_LIST_PENDING,
    GET_FRIEND_LIST_SUCCESS,
    GET_FRIEND_LIST_FAILED
} from './constants';

const friends = {
    friends: [],
    isPending: true
}

export const friendList = (state = friends, action = {}) => {
    switch (action.type) {
        case GET_FRIEND_LIST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case GET_FRIEND_LIST_SUCCESS:
            return Object.assign({}, state, { friends: action.payload, isPending: false })
        case GET_FRIEND_LIST_FAILED:
            return Object.assign({}, state, { error: action.payload })
        default:
            return state
    }
}

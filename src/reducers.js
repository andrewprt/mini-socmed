import {
    GET_FRIEND_ALBUM_LIST_PENDING,
    GET_FRIEND_ALBUM_LIST_SUCCESS,
    GET_FRIEND_ALBUM_LIST_FAILED,
    GET_FRIEND_ALBUM_PHOTOS_LIST_PENDING,
    GET_FRIEND_ALBUM_PHOTOS_LIST_SUCCESS,
    GET_FRIEND_ALBUM_PHOTOS_LIST_FAILED,
    GET_FRIEND_POST_LIST_PENDING,
    GET_FRIEND_POST_LIST_SUCCESS,
    GET_FRIEND_POST_LIST_FAILED,
    GET_FRIEND_POST_COMMENT_LIST_PENDING,
    GET_FRIEND_POST_COMMENT_LIST_SUCCESS,
    GET_FRIEND_POST_COMMENT_LIST_FAILED,
    GET_FRIEND_LIST_PENDING,
    GET_FRIEND_LIST_SUCCESS,
    GET_FRIEND_LIST_FAILED,
    ADD_NEW_POST_PENDING,
    ADD_NEW_POST_SUCCESS,
    ADD_NEW_POST_FAILED,
    UPDATE_POST_PENDING,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAILED,
    DELETE_POST_PENDING,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILED,
    ADD_NEW_COMMENT_PENDING,
    ADD_NEW_COMMENT_SUCCESS,
    ADD_NEW_COMMENT_FAILED,
    UPDATE_COMMENT_PENDING,
    UPDATE_COMMENT_SUCCESS,
    UPDATE_COMMENT_FAILED,
    DELETE_COMMENT_PENDING,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILED,
    ADD_NEW_FRIEND_COMMENT_PENDING,
    ADD_NEW_FRIEND_COMMENT_SUCCESS,
    ADD_NEW_FRIEND_COMMENT_FAILED,
    UPDATE_FRIEND_COMMENT_PENDING,
    UPDATE_FRIEND_COMMENT_SUCCESS,
    UPDATE_FRIEND_COMMENT_FAILED,
    DELETE_FRIEND_COMMENT_PENDING,
    DELETE_FRIEND_COMMENT_SUCCESS,
    DELETE_FRIEND_COMMENT_FAILED
} from './constants';

const friends = {
    friends: [],
    isPending: true,
    friendPosts: [],
    friendAlbums: [],
    friendComments: [],
    lastCommentId: 500
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
        case GET_FRIEND_POST_COMMENT_LIST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case GET_FRIEND_POST_COMMENT_LIST_SUCCESS:
            return Object.assign({}, state, { friendComments: action.payload, isPending: false })
        case GET_FRIEND_POST_COMMENT_LIST_FAILED:
            return Object.assign({}, state, { error: action.payload })
        case ADD_NEW_FRIEND_COMMENT_PENDING:
            return Object.assign({}, state, { isPending: true })
        case ADD_NEW_FRIEND_COMMENT_SUCCESS:
            const lastCommentId = state.lastCommentId + 1;
            action.payload.id = lastCommentId;
            return Object.assign({}, state, { friendComments: [...state.friendComments, action.payload], isPending: false, lastCommentId: lastCommentId })
        case ADD_NEW_FRIEND_COMMENT_FAILED:
            return Object.assign({}, state, { error: action.payload })
        case UPDATE_FRIEND_COMMENT_PENDING:
            return Object.assign({}, state, { isPending: true })
        case UPDATE_FRIEND_COMMENT_SUCCESS:
            const commentIdx = state.friendComments.findIndex(x => x.id === action.payload.id);
            state.friendComments[commentIdx].body = action.payload.body;
            return Object.assign({}, state, { friendComments: [...state.friendComments], isPending: false })
        case UPDATE_FRIEND_COMMENT_FAILED:
            return Object.assign({}, state, { error: action.payload })
        case DELETE_FRIEND_COMMENT_PENDING:
            return Object.assign({}, state, { isPending: true })
        case DELETE_FRIEND_COMMENT_SUCCESS:
            state.friendComments.splice(state.friendComments.findIndex(x => x.id === action.id), 1);
            return Object.assign({}, state, { friendComments: [...state.friendComments], isPending: false })
        case DELETE_FRIEND_COMMENT_FAILED:
            return Object.assign({}, state, { error: action.payload })
        case GET_FRIEND_ALBUM_LIST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case GET_FRIEND_ALBUM_LIST_SUCCESS:
            for (let i = 0; i < action.payload.length; i++) {
                action.payload[i].photos = [];
            }
            return Object.assign({}, state, { friendAlbums: action.payload, isPending: false })
        case GET_FRIEND_ALBUM_LIST_FAILED:
            return Object.assign({}, state, { error: action.payload })
        case GET_FRIEND_ALBUM_PHOTOS_LIST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case GET_FRIEND_ALBUM_PHOTOS_LIST_SUCCESS:
            const y = state.friendAlbums.findIndex(z => z.id === action.id);
            state.friendAlbums[y].photos = action.payload;
            return Object.assign({}, state, { friendAlbums: [...state.friendAlbums], isPending: false })
        case GET_FRIEND_ALBUM_PHOTOS_LIST_FAILED:
            return Object.assign({}, state, { error: action.payload })
        default:
            return state
    }
}

const posts = {
    posts: [],
    comments: [],
    isPending: true,
    lastPostId: 100,
    lastCommentId: 500
}

export const postList = (state = posts, action = {}) => {
    switch (action.type) {
        case ADD_NEW_POST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case ADD_NEW_POST_SUCCESS:
            const lastPostId = state.lastPostId + 1;
            action.payload.id = lastPostId;
            return Object.assign({}, state, { posts: [...state.posts, action.payload], isPending: false, lastPostId: lastPostId })
        case ADD_NEW_POST_FAILED:
            return Object.assign({}, state, { error: action.payload })
        case UPDATE_POST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case UPDATE_POST_SUCCESS:
            const x = state.posts.findIndex(x => x.id === action.payload.id && x.userId === action.payload.userId);
            state.posts[x].title = action.payload.title;
            state.posts[x].body = action.payload.body;
            console.log(state.posts);
            return Object.assign({}, state, { posts: [...state.posts], isPending: false })
        case UPDATE_POST_FAILED:
            return Object.assign({}, state, { error: action.payload })
        case DELETE_POST_PENDING:
            return Object.assign({}, state, { isPending: true })
        case DELETE_POST_SUCCESS:
            state.posts.splice(state.posts.findIndex(x => x.id === action.payload), 1);
            return Object.assign({}, state, { posts: [...state.posts], isPending: false })
        case DELETE_POST_FAILED:
            return Object.assign({}, state, { error: action.payload })
        case ADD_NEW_COMMENT_PENDING:
            return Object.assign({}, state, { isPending: true })
        case ADD_NEW_COMMENT_SUCCESS:
            const lastCommentId = state.lastCommentId + 1;
            action.payload.id = lastCommentId;
            return Object.assign({}, state, { comments: [...state.comments, action.payload], isPending: false, lastCommentId: lastCommentId })
        case ADD_NEW_COMMENT_FAILED:
            return Object.assign({}, state, { error: action.payload })
        case UPDATE_COMMENT_PENDING:
            return Object.assign({}, state, { isPending: true })
        case UPDATE_COMMENT_SUCCESS:
            const commentIdx = state.comments.findIndex(x => x.id === action.payload.id);
            state.comments[commentIdx].body = action.payload.body;
            return Object.assign({}, state, { comments: [...state.comments], isPending: false })
        case UPDATE_COMMENT_FAILED:
            return Object.assign({}, state, { error: action.payload })
        case DELETE_COMMENT_PENDING:
            return Object.assign({}, state, { isPending: true })
        case DELETE_COMMENT_SUCCESS:
            state.comments.splice(state.comments.findIndex(x => x.id === action.id), 1);
            return Object.assign({}, state, { comments: [...state.comments], isPending: false })
        case DELETE_COMMENT_FAILED:
            return Object.assign({}, state, { error: action.payload })
        default:
            return state
    }
}
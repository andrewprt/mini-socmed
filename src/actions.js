import { apiCall, apiPost } from './api/api'
import {
    GET_FRIEND_ALBUM_LIST_SUCCESS,
    GET_FRIEND_ALBUM_PHOTOS_LIST_SUCCESS,
    GET_FRIEND_POST_LIST_SUCCESS,
    GET_FRIEND_POST_COMMENT_LIST_SUCCESS,
    GET_FRIEND_LIST_SUCCESS,
    ADD_NEW_POST_SUCCESS,
    UPDATE_POST_SUCCESS,
    DELETE_POST_SUCCESS,
    ADD_NEW_COMMENT_SUCCESS,
    UPDATE_COMMENT_SUCCESS,
    DELETE_COMMENT_SUCCESS,
    ADD_NEW_FRIEND_COMMENT_SUCCESS,
    UPDATE_FRIEND_COMMENT_SUCCESS,
    DELETE_FRIEND_COMMENT_SUCCESS,
    PENDING,
    FAILED
} from './constants'

//flow : from components file to this file, after this will go to reducers.js
export const getFriendList = () => (dispatch) => {
    dispatch({ type: PENDING })
    apiCall("https://jsonplaceholder.typicode.com/users")
        .then(data => dispatch({ type: GET_FRIEND_LIST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: FAILED, payload: error }))
}

export const getFriendPostList = (payload) => (dispatch) => {
    dispatch({ type: PENDING })
    apiCall(`https://jsonplaceholder.typicode.com/posts?userId=${payload.id}`)
        .then(data => dispatch({ type: GET_FRIEND_POST_LIST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: FAILED, payload: error }))
}

export const getFriendPostCommentList = (payload) => (dispatch) => {
    dispatch({ type: PENDING })
    apiCall(`https://jsonplaceholder.typicode.com/comments?postId=${payload.id}`)
        .then(data => dispatch({ type: GET_FRIEND_POST_COMMENT_LIST_SUCCESS, payload: data, id: payload.id }))
        .catch(error => dispatch({ type: FAILED, payload: error }))
}

export const getFriendAlbumList = (payload) => (dispatch) => {
    dispatch({ type: PENDING })
    apiCall(`https://jsonplaceholder.typicode.com/albums?userId=${payload.id}`)
        .then(data => dispatch({ type: GET_FRIEND_ALBUM_LIST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: FAILED, payload: error }))
}

export const getFriendAlbumPhotoList = (payload) => (dispatch) => {
    dispatch({ type: PENDING })
    apiCall(`https://jsonplaceholder.typicode.com/photos?albumId=${payload.id}`)
        .then(data => dispatch({ type: GET_FRIEND_ALBUM_PHOTOS_LIST_SUCCESS, payload: data, id: payload.id }))
        .catch(error => dispatch({ type: FAILED, payload: error }))
}

export const addNewPost = (payload) => (dispatch) => {
    dispatch({ type: PENDING })
    apiPost(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title: payload.title,
            body: payload.content,
            userId: 100
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(data => dispatch({ type: ADD_NEW_POST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: FAILED, payload: error }))
}

export const updatePost = (payload) => (dispatch) => {
    dispatch({ type: PENDING })
    apiPost(`https://jsonplaceholder.typicode.com/posts/${payload.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title: payload.title,
            body: payload.body,
            userId: 100,
            id: payload.id
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(data => dispatch({ type: UPDATE_POST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: FAILED, payload: error }))
}

export const deletePost = (payload) => (dispatch) => {
    dispatch({ type: PENDING })
    apiPost(`https://jsonplaceholder.typicode.com/posts/${payload.id}`, {
        method: 'DELETE'
    })
        .then(data => dispatch({ type: DELETE_POST_SUCCESS, payload: payload.id }))
        .catch(error => dispatch({ type: FAILED, payload: error }))
}

export const addNewComment = (payload) => (dispatch) => {
    dispatch({ type: PENDING })
    apiPost(`https://jsonplaceholder.typicode.com/comments`, {
        method: 'POST',
        body: JSON.stringify({
            name: payload.name,
            email: payload.email,
            body: payload.content,
            postId: payload.id
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(data => dispatch({ type: ADD_NEW_COMMENT_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: FAILED, payload: error }))
}

export const updateComment = (payload) => (dispatch) => {
    dispatch({ type: PENDING })
    apiPost(`https://jsonplaceholder.typicode.com/comments/${payload.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            body: payload.body,
            id: payload.id,
            postId: payload.postId
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(data => dispatch({ type: UPDATE_COMMENT_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: FAILED, payload: error }))
}

export const deleteComment = (payload) => (dispatch) => {
    dispatch({ type: PENDING })
    apiPost(`https://jsonplaceholder.typicode.com/comments/${payload.id}`, {
        method: 'DELETE'
    })
        .then(data => dispatch({ type: DELETE_COMMENT_SUCCESS, id: payload.id, postId: payload.postId }))
        .catch(error => dispatch({ type: FAILED, payload: error }))
}

export const addNewFriendComment = (payload) => (dispatch) => {
    dispatch({ type: PENDING })
    apiPost(`https://jsonplaceholder.typicode.com/comments`, {
        method: 'POST',
        body: JSON.stringify({
            name: payload.name,
            email: payload.email,
            body: payload.content,
            postId: payload.id
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(data => dispatch({ type: ADD_NEW_FRIEND_COMMENT_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: FAILED, payload: error }))
}

export const updateFriendComment = (payload) => (dispatch) => {
    dispatch({ type: PENDING })
    apiPost(`https://jsonplaceholder.typicode.com/comments/${payload.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            body: payload.body,
            id: payload.id,
            postId: payload.postId
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(data => dispatch({ type: UPDATE_FRIEND_COMMENT_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: FAILED, payload: error }))
}

export const deleteFriendComment = (payload) => (dispatch) => {
    dispatch({ type: PENDING })
    apiPost(`https://jsonplaceholder.typicode.com/comments/${payload.id}`, {
        method: 'DELETE'
    })
        .then(data => dispatch({ type: DELETE_FRIEND_COMMENT_SUCCESS, id: payload.id, postId: payload.postId }))
        .catch(error => dispatch({ type: FAILED, payload: error }))
}
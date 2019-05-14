import { apiCall, apiPost } from './api/api'
import {
    GET_FRIEND_ALBUM_LIST_PENDING,
    GET_FRIEND_ALBUM_LIST_SUCCESS,
    GET_FRIEND_ALBUM_LIST_FAILED,
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
    DELETE_POST_FAILED
} from './constants'

//flow : from components file to this file, after this will go to reducers.js
export const getFriendList = () => (dispatch) => {
    dispatch({ type: GET_FRIEND_LIST_PENDING })
    apiCall("https://jsonplaceholder.typicode.com/users")
        .then(data => dispatch({ type: GET_FRIEND_LIST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: GET_FRIEND_LIST_FAILED, payload: error }))
}

export const getFriendPostList = (payload) => (dispatch) => {
    dispatch({ type: GET_FRIEND_POST_LIST_PENDING })
    apiCall(`https://jsonplaceholder.typicode.com/posts?userId=${payload.id}`)
        .then(data => dispatch({ type: GET_FRIEND_POST_LIST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: GET_FRIEND_POST_LIST_FAILED, payload: error }))
}

export const getFriendPostCommentList = (payload) => (dispatch) => {
    dispatch({ type: GET_FRIEND_POST_COMMENT_LIST_PENDING })
    apiCall(`https://jsonplaceholder.typicode.com/comments?postId=${payload.id}`)
        .then(data => dispatch({ type: GET_FRIEND_POST_COMMENT_LIST_SUCCESS, payload: data, id: payload.id }))
        .catch(error => dispatch({ type: GET_FRIEND_POST_COMMENT_LIST_FAILED, payload: error }))
}

export const getFriendAlbumList = (payload) => (dispatch) => {
    dispatch({ type: GET_FRIEND_ALBUM_LIST_PENDING })
    apiCall(`https://jsonplaceholder.typicode.com/albums?userId=${payload.id}`)
        .then(data => dispatch({ type: GET_FRIEND_ALBUM_LIST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: GET_FRIEND_ALBUM_LIST_FAILED, payload: error }))
}

export const addNewPost = (payload) => (dispatch) => {
    dispatch({ type: ADD_NEW_POST_PENDING })
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
        .catch(error => dispatch({ type: ADD_NEW_POST_FAILED, payload: error }))
}

export const updatePost = (payload) => (dispatch) => {
    dispatch({ type: UPDATE_POST_PENDING })
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
        .catch(error => dispatch({ type: UPDATE_POST_FAILED, payload: error }))
}

export const deletePost = (payload) => (dispatch) => {
    dispatch({ type: DELETE_POST_PENDING })
    apiPost(`https://jsonplaceholder.typicode.com/posts/${payload.id}`, {
        method: 'DELETE'
    })
        .then(data => dispatch({ type: DELETE_POST_SUCCESS, payload: payload.id }))
        .catch(error => dispatch({ type: DELETE_POST_FAILED, payload: error }))
}
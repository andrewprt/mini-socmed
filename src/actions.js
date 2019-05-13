import { apiCall } from './api/api'
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

export const getFriendAlbumList = (payload) => (dispatch) => {
    dispatch({ type: GET_FRIEND_ALBUM_LIST_PENDING })
    apiCall(`https://jsonplaceholder.typicode.com/albums?userId=${payload.id}`)
        .then(data => dispatch({ type: GET_FRIEND_ALBUM_LIST_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: GET_FRIEND_ALBUM_LIST_FAILED, payload: error }))
}
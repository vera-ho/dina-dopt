import * as UserUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
});


export const fetchAllUsers = () => dispatch => (
    UserUtil.fetchAllUsers()
        .then((users) => (dispatch(receiveAllUsers(users))))
        // err => (dispatch(receiveErrors(err.response.data))))
);
import { ADD_USERS, ADD_USERS_REQUESTING, UPDATE_USERS } from "../action-types";
import { webAgent } from "../../helpers/web-agent";

export const addUsers = (payload) => ({ type: ADD_USERS, payload });
export const addUsersRequesting = () => ({ type: ADD_USERS_REQUESTING });

export const updateUsers = (payload) => ({ type: UPDATE_USERS, payload });

export const getUsers = params => dispatch => {
    dispatch(addUsersRequesting());

    webAgent.get("/users", params).then((res) => {
        if (res.data) dispatch(addUsers(res.data));
        dispatch(addUsers([]));
    }).catch((err) => {
        dispatch(addUsers([]));
    });
}
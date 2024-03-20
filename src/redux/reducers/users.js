import { produce } from "immer";
import { ADD_USERS, ADD_USERS_REQUESTING, UPDATE_USERS } from "../action-types";


const initialStates = {
    users: [],
    isRequesting: false
}

const users = (state = initialStates, actions) => {
    switch (actions.type) {
        case ADD_USERS: {
            state = produce(state, s => {
                s.users = [...state.users, ...actions.payload];
                s.isRequesting = false
            });
            break;
        }
        case ADD_USERS_REQUESTING: {
            state = produce(state, s => {
                s.isRequesting = true
            });
            break;
        }
        case UPDATE_USERS: {
            state = produce(state, s => {
                s.users = actions.payload;
            });
            break;
        }
        default:
            break;
    }
    return state;
}

export default users;
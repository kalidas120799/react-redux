import { all, takeEvery } from "redux-saga/effects";
import { getUsers } from "./users";

function* rootSaga() {
    yield all([
        takeEvery('users/fetchUsers', getUsers)
    ])
}

export default rootSaga;
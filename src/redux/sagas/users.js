// call - call api, put - call actions , takeEvery - watch action or tiger fun
import { call, put } from "redux-saga/effects";
import { webAgent } from "../../helpers/web-agent";
import { addUsers } from "../slices/users";

export function* getUsers(action) {
    try {
        const res = yield call(() => webAgent.get("/users", action.payload));
        const data = yield res.data;
        yield put(addUsers(data));
    } catch (err) {
        yield put(addUsers([]));
    }
}

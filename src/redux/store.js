import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas";
import users from "./slices/users";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];


const store = configureStore({
    reducer: { users },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...middlewares]
});

sagaMiddleware.run(rootSaga);

export default store;
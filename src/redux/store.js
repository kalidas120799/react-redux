import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__) {
    const devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
    middleware = compose(
        middleware,
        devtools
    );
}

export default createStore(rootReducer, middleware);
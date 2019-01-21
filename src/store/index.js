import { createStore, combineReducers, applyMiddleware } from "redux";
import { form, lists, realignmentMode } from "./reducers"
import stateData from "./initialState.json"

const logger = store => next => action => {
    console.groupCollapsed("dispatching", action.type);
    console.log("prev state", store.getState());
    console.log("action", action);
    let result = next(action);
    console.log("next state",store.getState());
    console.groupEnd();
    return result;
}

const saver = store => next => action => {
    let result = next(action);
    localStorage["redux-store"] = JSON.stringify(store.getState());
    return result;
}

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({form, lists, realignmentMode}),
        (localStorage["redux-store"]) ?
        JSON.parse(localStorage["redux-store"]) :
        initialState
    )

export default storeFactory;
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducers } from "../reducers/rootReducers";

export const store = createStore(rootReducers, compose(applyMiddleware(thunk)));

// createContext(usrContext)
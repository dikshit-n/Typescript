import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var updatedStore: any = undefined;

const store = {
  // create store
  configureStore: () => {
    const store = createStore(
      rootReducer,
      composeEnhancers(applyMiddleware(thunk))
    );
    updatedStore = store;
    return store;
  },

  // helper function to get the current store in any js/ts file
  getStore: () => updatedStore?.getState() || {},
};

export { store };

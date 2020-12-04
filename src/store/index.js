import { createStore } from "redux";
import { persistStore } from "redux-persist";
import persistedReducer from "./reducers/index";

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

export { persistor, store };

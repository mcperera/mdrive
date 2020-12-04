import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { persistor, store } from "./store"; //auto import from index
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

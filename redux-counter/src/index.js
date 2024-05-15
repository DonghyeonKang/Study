import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";

// redux
import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers";

// store 생성
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(
  <Provider store={store}>
    <App />
  </Provider>
);

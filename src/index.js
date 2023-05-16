import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // make the 'store' available to our React components (passing 'store' as a prop)
  <Provider store={store}>
    <App />
  </Provider>
);

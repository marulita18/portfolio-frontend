import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AbMF1Eol2YIPbIPQ5w9CMl8zPF6N7QfuIuH0Dy3FUoX-bs8vEZMsGbsbVw900ji1C239HiehS3DhiKb4",
        }}
      >
        <App />
      </PayPalScriptProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

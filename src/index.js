import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Spinner from "./components/Spinner/Spinner";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

const App = React.lazy(() => import("./App"));
ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

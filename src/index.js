import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import "bootswatch/dist/lumen/bootstrap.min.css";

/**
 * This is the top level file which loads the entire page, we supply the top level component
 * typically called "App" here
 * @type {Root}
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

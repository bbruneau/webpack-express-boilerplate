import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { setConfig } from "react-hot-loader";

import { App } from "./App";

setConfig({
  reloadHooks: false
});

const Root = hot(App);

ReactDOM.render(<Root />, document.getElementById("root"));

import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import GlobalStyle from "./styles/GlobalStyle";
import reducers from "./reducers";
import Routes from "./routes";

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
}

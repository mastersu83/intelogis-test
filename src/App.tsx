import React from "react";
import "antd/dist/antd.css";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { store } from "./redux/reduxStore";

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;

import React from "react";
import "antd/dist/antd.css";
import "./styles/index.scss";
import "./styles/global-styles.scss";
import "./styles/tailwindImports.css";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <React.Fragment>
      <AppRouter />
    </React.Fragment>
  );
}

export default App;

import React from "react";
import Nav from "./components/Nav";
import BottomNav from "./components/BottomNav";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store'
import routes from "./routes";

import "./App.css";

function App() {
  return (
    <Provider store = {store}>
      <HashRouter>
        <div className="App">
          <Nav />
          <BottomNav />
          {routes}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;






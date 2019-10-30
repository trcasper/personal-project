import React from "react";
import Nav from "./components/Nav";
import {HashRouter} from "react-router-dom";
import routes from './routes';


import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav />
        {routes}
        
      </div>
    </HashRouter>
  );
}

export default App;

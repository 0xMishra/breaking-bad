import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

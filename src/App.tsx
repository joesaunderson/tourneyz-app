import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import Login from "./pages/Login/Login";
import Error404 from "./pages/Error404/Error404";

function App() {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </ApolloProvider>
  );
}

export default App;

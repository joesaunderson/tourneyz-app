import React from "react";

import { ApolloProvider } from "@apollo/client";
import { Route, Switch } from "react-router-dom";

import useApolloClient from "./hooks/useApolloClient";
import Error404 from "./pages/Error404/Error404";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import "./App.css";

function App() {
    const client = useApolloClient();

    return (
        <ApolloProvider client={client}>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="*">
                    <Error404 />
                </Route>
            </Switch>
        </ApolloProvider>
    );
}

export default App;

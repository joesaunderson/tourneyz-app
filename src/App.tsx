import React from 'react';
import './App.css';

import {Route, Switch} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import client from "./apollo/client";
import Login from "./pages/Login/Login";

function App() {
    return (
        <ApolloProvider client={client}>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </ApolloProvider>
    );
}

export default App;

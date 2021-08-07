import React, { useEffect, useRef } from "react";

import { ApolloProvider } from "@apollo/client";
import posthog from "posthog-js";
import { Route, Switch, useLocation } from "react-router-dom";

import useApolloClient from "./hooks/useApolloClient";
import Error404 from "./pages/Error404/Error404";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import TournamentFeed from "./pages/TournamentFeed/TournamentFeed";

import "./App.css";

function App() {
    const client = useApolloClient();
    posthog.init("phc_OD5Vz1d70QW9H6bHuznkSj7lncKBB2JiuUy3wS4ZjoE", { api_host: "https://app.posthog.com" });

    const isFirstRun = useRef(true);
    const location = useLocation();
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        posthog.capture("$pageview");
    }, [location]);

    return (
        <ApolloProvider client={client}>
            <Switch>
                <Route path={["/", "/tournaments/:tournamentFilter?"]} exact>
                    <TournamentFeed />
                </Route>
                <Route path="/tournament/host" exact>
                    <TournamentFeed />
                </Route>
                <Route path="/tournament/:tournamentId" exact>
                    <TournamentFeed />
                </Route>
                <Route path={["/players", "/players/:playerFilter"]} exact>
                    <TournamentFeed />
                </Route>
                <Route path="/player/:playerId" exact>
                    <TournamentFeed />
                </Route>
                <Route path={["/teams", "/teams/:teamFilter"]} exact>
                    <TournamentFeed />
                </Route>
                <Route path="/team/:teamId" exact>
                    <TournamentFeed />
                </Route>
                <Route path="/games" exact>
                    <TournamentFeed />
                </Route>
                <Route path="/leaderboards" exact>
                    <TournamentFeed />
                </Route>
                <Route path="/trending" exact>
                    <TournamentFeed />
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

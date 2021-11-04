import React from "react";
import createHistory from "history/createBrowserHistory";
import { Route, Router, Switch } from "react-router";
import { SignupWelcome } from "./templates/SignupWelcome";

const history = createHistory();

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    path="/signup"
                    render={() => (
                        <SignupWelcome
                            subject="Welcome to OVRSEA"
                            userName="Eric Cabrel"
                            confirmationUrl="https://ovrsea.com"
                        />
                    )}
                    exact
                />
            </Switch>
        </Router>
    );
}

export default App;

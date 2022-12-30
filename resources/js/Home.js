import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div className="container h-screen mx-auto">
                        <Login />
                    </div>
                </Route>
                <Route exact path="/register">
                    <div className="container h-screen mx-auto ">
                        <Register />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}
export default Home;
if (document.getElementById("app")) {
    ReactDOM.render(<Home />, document.getElementById("app"));
}

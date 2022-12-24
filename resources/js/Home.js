import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
function Home() {
    return (
        <div className="container h-screen ">
            <Login />
        </div>
    );
}
export default Home;
if (document.getElementById("app")) {
    ReactDOM.render(<Home />, document.getElementById("app"));
}

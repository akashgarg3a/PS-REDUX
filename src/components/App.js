import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import About from "./about/About";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import Speakers from "./speakers/Speakers";

function App() {
    return (
        <div className="container-fluid">
            <Header></Header>
            <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/about" exact component={About}></Route>
                <Route path="/speakers" exact component={Speakers}></Route>
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
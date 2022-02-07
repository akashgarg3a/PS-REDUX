import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Header from "./common/Header";

function App() {
    return (
        <>
        <Header></Header>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/about" exact component={About}></Route>
        </>
    );
}

export default App;
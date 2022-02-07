import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return(
        <>
        <h2>Home</h2>
        <Link to="/about" className="btn btn-primary">About</Link>
        </>
    );
}

export default HomePage;
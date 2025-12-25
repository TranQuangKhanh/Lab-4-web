import React from "react";
import { Link } from "react-router-dom";
import Toolbar from "../components/Toolbar";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <Link to="/home/about">Go to About</Link>
      </p>
      <p>
        <Link to="/home/users/123">Go to User 123</Link>
      </p>
      <hr />
      <h2>Theme Demo</h2>
      <p>The Toolbar below consumes ThemeContext:</p>
      <Toolbar />
    </div>
  );
}

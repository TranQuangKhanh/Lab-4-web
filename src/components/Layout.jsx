import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/home/about">About</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

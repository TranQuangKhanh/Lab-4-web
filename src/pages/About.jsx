import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const nav = useNavigate();
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => nav("/")}>Back Home</button>
    </div>
  );
}

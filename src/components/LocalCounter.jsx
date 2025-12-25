import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function LocalCounter() {
  const [count, setCount] = useLocalStorage("myCounter", 0);
  return (
    <div>
      <h3>Local Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

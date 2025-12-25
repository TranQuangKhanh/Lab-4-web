import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={`button-${theme}`}>Theme: {theme}</button>;
}

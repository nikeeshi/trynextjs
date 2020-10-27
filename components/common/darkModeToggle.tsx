import React, { useContext } from "react";
import { Theme } from "../context/theme";
export const DarkModeToggle = () => {
  const { darkMode: darkmode, toggleDarkMode } = useContext(Theme);
  return (
    <button onClick={toggleDarkMode}>{darkmode ? "Sunrise" : "Sunset"}</button>
  );
};

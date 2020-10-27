import React, { createContext, useContext } from "react";
import { Theme } from "../context/theme";

export const GithubLogo = () => {
  const {darkMode: darkmode} = useContext(Theme);
  if (darkmode)
    return <img src="/github-icon/GitHub-Mark-Light-32px.png" />;
  else return <img src="/github-icon/GitHub-Mark-32px.png" />;
};

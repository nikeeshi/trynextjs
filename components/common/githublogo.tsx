import React, { useContext } from "react";
import { Theme } from "../context/theme";

export const GithubLogo = () => {
  const { darkMode } = useContext(Theme);
  console.log("darkMode in GithubLogo", darkMode);
  if (darkMode) return <img src="/github-icon/GitHub-Mark-Light-32px.png" />;
  else return <img src="/github-icon/GitHub-Mark-32px.png" />;
};

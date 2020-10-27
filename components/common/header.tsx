import React from "react";
import { Float, Left, Right } from "../lib/float";
import { DarkModeToggle } from "./darkModeToggle";
import { GithubLogo } from "./githublogo";
export const Header = () => (
  <header>
    <Float>
    <Left>
      <span>nikeeshiのホームページ</span>
    </Left>
    <Right>
      <a href="https://github.com/nikeeshi/trynextjs" target="_blank">
        <GithubLogo />
      </a>
    </Right>
    <Right><DarkModeToggle/></Right>
    </Float>
    <style jsx>
      {`
        span {
          font-size: 32px;
        }
      `}
    </style>
  </header>
);

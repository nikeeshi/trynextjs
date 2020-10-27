import React, { useContext } from "react";
import Head from "next/head";
import { Theme } from "../context/theme";
export default () => {
  const { darkMode } = useContext(Theme);
  return (
    <>
      <Head>
        <title>hoge</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>{`
        body {
          font-family: "Noto Sans JP", sans-serif;
          background-color: ${darkMode ? "midnightblue" : "white"};
          color: ${darkMode ? "white" : "black"};
        }
      `}</style>
    </>
  );
};

import React from "react";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import GlobalConfig from "../components/common/globalConfig";
export default function Home() {
  return (
    <>
      <GlobalConfig />
      <Header />
      <main>
        <span>建設中...</span>
      </main>
      <Footer />
    </>
  );
}

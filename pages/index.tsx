import React from "react";
import { Footer } from "../components/common/footer";
import { Header } from "../components/common/header";
import GlobalConfig from "../components/common/globalConfig";
import { ThemeProvider } from "../components/context/theme";
export default function Home() {
  return (
    <ThemeProvider>
      <GlobalConfig />
      <Header />
      <main>
        <span>建設中...</span>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

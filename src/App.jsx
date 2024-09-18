import { useState } from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { ContextWrapper } from "./context/GlobalContext";
import { SidePanel } from "./components/side_panel/SidePanel";
import { TopPanel } from "./components/top_panel/TopPanel";

function App() {
  return (
    <ContextWrapper>
      <Header></Header>
      <TopPanel></TopPanel>
      <Main>
        <SidePanel></SidePanel>
      </Main>
    </ContextWrapper>
  );
}

export default App;

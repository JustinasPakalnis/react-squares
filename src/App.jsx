import { useState } from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { ContextWrapper } from "./context/GlobalContext";
import { SidePanel } from "./components/side_panel/SidePanel";
import { TopPanel } from "./components/top_panel/TopPanel";
import "./App.css";

function App() {
  return (
    <ContextWrapper>
      <Header></Header>

      <Main></Main>
    </ContextWrapper>
  );
}

export default App;

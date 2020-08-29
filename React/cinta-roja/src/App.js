import React from "react";
import "./App.css";
import Logo from "./components/LogoGoogle";
import Search from "./components/Search";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <Logo />
      <Search />
      <Buttons />
      <p className="text-google">
        Ofrecido por Google en: <span className="span-text">English</span>
      </p>
    </div>
  );
}

export default App;

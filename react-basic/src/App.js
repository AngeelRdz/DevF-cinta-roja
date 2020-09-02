import React from "react";
import CountComponent from "./components/CountComponent";
import Colors from "./components/Colors";
import GifContainer from "./views/GifContainer";
import AsteroidsContainer from "./views/AsteroidsContainer";

function App() {
  return (
    <div className="App">
      <CountComponent />
      <Colors />
      <GifContainer />
      <AsteroidsContainer />
    </div>
  );
}

export default App;

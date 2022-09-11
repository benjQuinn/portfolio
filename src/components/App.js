import React from "react";
import "../styles/app.css";
import TopBanner from "./TopBanner";
import Header from "./Header";
import Body from "./Body";

function App() {
  return (
    <div id="viewport">
      <TopBanner />
      <Header />
      <Body />
    </div>
  );
}

export default App;

import React from "react";
import "../styles/app.css";
import TopBanner from "./TopBanner";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return (
    <div id="viewport">
      <TopBanner />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

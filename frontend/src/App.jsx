import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import TranslateComponent from "./components/TranslateComponent";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <TranslateComponent/>
    </>
  );
}

export default App;
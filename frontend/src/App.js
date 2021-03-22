import React from "react";
import Header from "./pages/header/Header";
import Main from "./pages/main/Main";
import Footer from "./pages/footer/Footer";
import SecondaryNav from "./pages/header/SecondaryNav";

const App = () => {
  return (
    <div className="grid-container">
      <SecondaryNav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

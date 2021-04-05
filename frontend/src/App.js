import React, { useEffect } from "react";
import Header from "./pages/header/Header";
import Main from "./pages/main/Main";
import Footer from "./pages/footer/Footer";
import SecondaryNav from "./pages/header/SecondaryNav";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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

import React, { useEffect } from "react";
import Header from "./pages/header/Header";
import Main from "./pages/main/Main";
import Footer from "./pages/footer/Footer";
import SecondaryNav from "./pages/header/SecondaryNav";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./components/Loading";
import { useState } from "react";
// import { FaArrowAltCircleUp } from "react-icons/fa";

const App = () => {
  // const backtoTopFunction = () => {
  //   // document.body.scrollTop = 0; // For Safari
  //   // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  //   document.documentElement.scrollTop > 500
  //     ? console.log("going down")
  //     : console.log("up");
  // };
  const [loading, setLoading] = useState(true);

  const loadingFunction = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    loadingFunction();
    AOS.init({ duration: 1000 });
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="grid-container">
          <SecondaryNav />
          <Header />
          <Main />
          <Footer />
        </div>

        {/* <button
        className={
          document.body.scrollTop > 30 ||
          document.documentElement.scrollTop > 30
            ? "back-to-top visible"
            : "back-to-top" 
        }
        onClick={backtoTopFunction}
      >
        <FaArrowAltCircleUp />
      </button> */}
      </>
    );
  }
};

export default App;

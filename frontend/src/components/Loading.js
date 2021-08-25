import React, { useEffect, useRef } from "react";

const Loading = () => {
  const refLoader = useRef(null);

  useEffect(() => {
    window.addEventListener("load", () => {
      refLoader.current.classList.add("finish");
    });
  }, [refLoader]);
  return (
    <section
      className="loader"
      ref={(e) => {
        refLoader.current = e;
      }}
    >
      <h1>Loading</h1>
      <div className="x2-logo">
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Loading;

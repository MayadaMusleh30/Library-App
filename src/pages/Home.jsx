import React from "react";
import Landing from "../components/Landing";
import Features from "../components/Featured";
import CheapestBooks from "../components/CheapestBooks";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <>
      <Landing />
      <main>
        <Features />
        <CheapestBooks />
        <Explore />
      </main>
    </>
  );
};

export default Home;

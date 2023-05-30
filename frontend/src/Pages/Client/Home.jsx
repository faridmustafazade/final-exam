import React from "react";
import Feature from "../../Components/Feature/Feature";
import Testimo from "../../Components/Testimo/Testimo";
import Cities from "../../Components/Cities/Cities";
import First from "../../Components/FirstSection/First";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <First />
      <Feature />
      <Testimo />
      <Cities />
    </>
  );
};

export default Home;

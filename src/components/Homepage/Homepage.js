import React from "react";
import "styles/Home.scss";
import Form from "./Form";

const Homepage = () => {
  return (
    <>
      <img className="logo" src="../sources/logo.svg" />
      <div className="first">
        <div>
          <h1 className="welcome-to-your-dashboard">
            Welcome to your
            <br />
            Dashboard
          </h1>
          <div className="this-is-the-homepage">
            This is the homepage of your
            <br />
            file explorer, set your pin and start
          </div>
        </div>
        <img className="pic" src="../sources/pic.svg" />
      </div>
      <Form />
    </>
  );
};

export default Homepage;

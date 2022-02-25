import React from "react";
import classes from "styles/Home.module.scss";
import Form from "./Form";
import logo from "../sources/logo.svg";
import pic from "../sources/pic.svg";

import PropTypes from "prop-types";

const Homepage = ({ setShowDash }) => {
  return (
    <div className={classes.main}>
      <div>
        <img className={classes.logo} src={logo} />
        <div className={classes.div1}>
          <div>
            <h1>Welcome to your Dashboard</h1>
            <div>
              This is the homepage of your file explorer, set your pin and start
            </div>
          </div>
          <img src={pic} />
        </div>
      </div>
      <div>
        <Form setShowDash={setShowDash} />
      </div>
    </div>
  );
};

Homepage.propTypes = {
  setShowDash: PropTypes.func,
};
export default Homepage;

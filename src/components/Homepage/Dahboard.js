import Sidebar from "../Sidebar/Sidebar";
import React from "react";
import Navbar from "../Navbar/Navbar";

const Mainpage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Sidebar />
      </div>
      <div>{/* <Explorer /> */}</div>
    </>
  );
};

export default Mainpage;

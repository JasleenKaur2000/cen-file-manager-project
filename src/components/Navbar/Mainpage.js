import Sidebar from "components/Sidebar/Sidebar";
import React from "react";
import Navbar from "./Navbar";

const Mainpage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Sidebar />
      </div>
    </>
  );
};

export default Mainpage;

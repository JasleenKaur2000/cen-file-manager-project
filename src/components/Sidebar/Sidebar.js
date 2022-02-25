import React from "react";
import "./Sidebar.scss";
import Tree from "./Tree";
import { ButtonGroup, Button } from "rsuite";
import { AiOutlineFileAdd, AiOutlineFolderAdd } from "react-icons/ai";
//resizer and lock not working

const Sidebar = () => {
  return (
    <div className="sidebarOuter">
      <img src="../sources/logo.svg" />
      <div className="sidebar">
        <div className="sidebarInner">
          <ButtonGroup className="buttonset1">
            <Button>
              <AiOutlineFileAdd />
              Add File
            </Button>
            <Button>
              <AiOutlineFolderAdd />
              Add Folder
            </Button>
          </ButtonGroup>
          <Tree />
        </div>
        <div>
          <Button className="lock">
            <p>Lock</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

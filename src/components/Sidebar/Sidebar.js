import React, { useEffect } from "react";
import classes from "./Sidebar.module.scss";
import Tree from "./Tree";
import { ButtonGroup, Button } from "rsuite";
import { AiOutlineFileAdd, AiOutlineFolderAdd } from "react-icons/ai";
import logo from "../sources/logo.svg";
//resizer not working accordingly
import PropTypes from "prop-types";

const Sidebar = ({
  enterCrumbsAndKey,
  treeData = [],
  showCreateFolder,
  showCreateFile,
}) => {
  useEffect(() => {
    const sidebar = document.querySelector(`.${classes.sidebarInner}`);
    let startX, startWidth;
    const resizer = document.querySelector(`.${classes.resizer}`);

    function initDrag(e) {
      startX = e.clientX;
      startWidth = parseInt(sidebar.clientWidth, 10);
      document.documentElement.addEventListener("mousemove", doDrag, false);
      document.documentElement.addEventListener("mouseup", stopDrag, false);
    }

    function doDrag(e) {
      if (sidebar) {
        sidebar.style.width = startWidth + e.clientX - startX + "px";
      }
    }

    // eslint-disable-next-line no-unused-vars
    function stopDrag(e) {
      document.documentElement.removeEventListener("mousemove", doDrag, false);
      document.documentElement.removeEventListener("mouseup", stopDrag, false);
    }

    resizer?.addEventListener("mousedown", initDrag, false);
  }, []);

  const addFolderHandler = () => {
    showCreateFolder(true);
  };

  const addFileHandler = () => {
    showCreateFile(true);
  };
  return (
    <div className={`${classes.sidebarOuter}`}>
      <div>
        <img src={logo} />
      </div>
      <div className={`${classes.sidebar}`}>
        <div className={`${classes.sidebarInner}`}>
          <ButtonGroup className={classes.buttonset1}>
            <Button onClick={addFileHandler}>
              <AiOutlineFileAdd />
              Add File
            </Button>
            <Button onClick={addFolderHandler}>
              <AiOutlineFolderAdd />
              Add Folder
            </Button>
          </ButtonGroup>
          <div className={classes.tree}>
            <Tree treeData={treeData} enterCrumbsAndKey={enterCrumbsAndKey} />
          </div>
        </div>
        <div>
          <Button className={classes.lock}>
            <p>Lock</p>
          </Button>
        </div>
      </div>
      <p className={classes.resizer}>
        <div></div>
        <div></div>
      </p>
    </div>
  );
};
Sidebar.propTypes = {
  crumbsAndKey: PropTypes.object,
  enterCrumbsAndKey: PropTypes.func,
  treeData: PropTypes.array,
  showCreateFolder: PropTypes.func,
  showCreateFile: PropTypes.func,
};
export default Sidebar;

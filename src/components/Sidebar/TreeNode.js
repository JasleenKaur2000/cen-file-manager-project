import React, { useState } from "react";
import PropTypes from "prop-types";
import HelperTree from "./HelperTree";
import openFolder from "../sources/smallOpenFolder.svg";
import closedFolder from "../sources/smallClosedFolder.svg";
import file_icon from "../sources/smallFile.svg";
import classes from "./TreeNode.module.scss";

const TreeNode = ({ node, isDarkMode, crumbString, enterCrumbsAndKey }) => {
  const [childVis, setChildVis] = useState(false);
  const children = JSON.parse(localStorage.getItem(node.key));
  const hasChild = children && children.length > 0 ? true : false;

  crumbString += node.label + " / ";

  const onClickHandler = () => {
    if (node.type === "file") return;
    setChildVis((x) => !x);
    enterCrumbsAndKey({ crumbs: crumbString, key: node.key });
  };
  const iconSelector = () => {
    if (node.type === "file") {
      return file_icon;
    }
    return childVis ? openFolder : closedFolder;
  };
  return (
    <li>
      <div
        className={isDarkMode ? classes.folder_dark : classes.folder}
        onClick={onClickHandler}
      >
        <img src={iconSelector()} />
        {node.label}
      </div>

      {hasChild && childVis && (
        <div>
          <ul>
            <HelperTree
              enterCrumbsAndKey={enterCrumbsAndKey}
              crumbString={crumbString}
              data={children}
              isDarkMode={isDarkMode}
            />
          </ul>
        </div>
      )}
    </li>
  );
};
TreeNode.propTypes = {
  node: PropTypes.object,
  isDarkMode: PropTypes.bool,
  crumbString: PropTypes.string,
  enterCrumbsAndKey: PropTypes.func,
};

export default TreeNode;

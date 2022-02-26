import React from "react";
import TreeNode from "./TreeNode";
import PropTypes from "prop-types";
import classes from "./HelperTree.module.scss";
const HelperTree = ({ data = [], crumbString, enterCrumbsAndKey }) => {
  return (
    <ul className={classes.div1}>
      {data.map((tree) => (
        <TreeNode
          key={tree.key}
          enterCrumbsAndKey={enterCrumbsAndKey}
          crumbString={crumbString}
          node={tree}
        />
      ))}
    </ul>
  );
};

HelperTree.propTypes = {
  data: PropTypes.array,
  isDarkMode: PropTypes.bool,
  crumbString: PropTypes.string,
  enterCrumbsAndKey: PropTypes.func,
};

export default HelperTree;

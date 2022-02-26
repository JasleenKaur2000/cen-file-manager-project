import React from "react";
import HelperTree from "./HelperTree";
import classes from "./Tree.module.scss";
import PropTypes from "prop-types";

const Tree = ({ enterCrumbsAndKey, treeData = [] }) => {
  console.log(treeData, typeof treeData);
  let crumbString = "";
  return (
    <div className={classes.class}>
      <HelperTree
        crumbString={crumbString}
        enterCrumbsAndKey={enterCrumbsAndKey}
        data={treeData}
      />
    </div>
  );
};
Tree.propTypes = {
  treeData: PropTypes.array,
  isDarkMode: PropTypes.bool,
  enterCrumbsAndKey: PropTypes.func,
};
export default Tree;

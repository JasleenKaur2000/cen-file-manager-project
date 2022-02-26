import classes from "./styling.module.scss";
import PropTypes from "prop-types";
import React, { useState } from "react";

const CreateFolder = ({ createFileFolderHandler, showCreateFolder }) => {
  const [folderName, setFolderName] = useState("");
  const [error, setError] = useState("");

  const folderNameHandler = (e) => {
    if (e.target.value / length != 0) {
      setFolderName(e.target.value);
      return;
    }
    setError(true);
    return;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (folderName.length != 0) {
      createFileFolderHandler({ type: "folder", folderName });
      setFolderName("");
    }
    setError(true);
    return;
  };
  const cancelHandler = () => {
    setFolderName("");
    showCreateFolder(false);
    console.log("cancelled");
  };

  return (
    <form className={classes.backdrop} onSubmit={submitHandler}>
      <div className={classes.modal}>
        <div className={classes.contents}>
          <h2 className={classes.heading}>Create Folder</h2>
          <div className={classes.folder_name}>
            <input
              type="text"
              placeholder="Enter Folder Name"
              onChange={folderNameHandler}
            />
          </div>
          {error && <p>Enter a valid name</p>}
          <div className={classes.buttons}>
            <button type="button" onClick={cancelHandler}>
              Cancel
            </button>
            <button
              type="button"
              className={classes.unlock}
              onClick={submitHandler}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
CreateFolder.propTypes = {
  createFileFolderHandler: PropTypes.func,
  showCreateFolder: PropTypes.func,
};
export default CreateFolder;

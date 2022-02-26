import classes from "./styling.module.scss";
import PropTypes from "prop-types";
import React, { useState } from "react";

const CreateFile = ({ createFileFolderHandler, showCreateFile }) => {
  const [fileName, setFileName] = useState("");
  const [fileContent, setFileContent] = useState("");

  const [error, setError] = useState("");

  const fileNameHandler = (e) => {
    if (e.target.value / length != 0) {
      setFileName(e.target.value);
      return;
    }
    setError(true);
    return;
  };

  const fileContentHandler = (e) => {
    if (e.target.value / length != 0) {
      setFileContent(e.target.value);
      return;
    }

    return;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (fileName.length != 0) {
      createFileFolderHandler({ type: "file", fileName, fileContent });
      setFileName("");
    }
    setError(true);
    return;
  };
  const cancelHandler = () => {
    setFileName("");
    showCreateFile(false);
  };

  return (
    <form className={classes.backdrop} onSubmit={submitHandler}>
      <div className={classes.modal}>
        <div className={classes.contents}>
          <h2 className={classes.heading}>Create File</h2>
          <div className={classes.file}>
            <h2>Enter File Name</h2>
            <input
              className={classes.file_name}
              type="text"
              placeholder="Enter File Name"
              onChange={fileNameHandler}
            />
            <textarea
              className={classes.file_content}
              type="text"
              placeholder="Enter text.."
              onChange={fileContentHandler}
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
CreateFile.propTypes = {
  createFileFolderHandler: PropTypes.func,
  showCreateFile: PropTypes.func,
};
export default CreateFile;

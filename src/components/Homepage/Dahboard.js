import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Dash.module.scss";
import CreateFile from "Hooks&Modals/CreateFile";
import CreateFolder from "Hooks&Modals/CreateFolder";
import FileContent from "Hooks&Modals/FileContent";

import PropTypes from "prop-types";
import Reset from "Hooks&Modals/Reset";
import Unlock from "Hooks&Modals/Unlock";

const initData = [{ key: "0", label: "My Files", type: "folder", parent: "" }];
const initCrumbsAndKey = { crumbs: "My Files / ", key: "0" };

const Dashboard = ({ setAccountPin, AccountPin }) => {
  const [crumbsAndKey, setCrumbsAndKey] = useState(initCrumbsAndKey);

  //to show 'Create Folder Modal'
  const [showCreateFolder, setShowCreateFolder] = useState(false);

  //to show 'Create File Modal'
  const [showCreateFile, setShowCreateFile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showResetPinModal, setShowResetPinModal] = useState(false);
  // to show enter pin/lockscreen darkmode
  const [lock, setLock] = useState(false);
  //to display contents of currently clicked folder below navbar
  const [displayContents, setDisplayContents] = useState([]);

  //to show and edit file content
  const [showFileContentModal, setShowFileContentModal] = useState(false);

  //contains file details
  const [fileDetails, setFileDetails] = useState("");

  // will help in searching of Files and Folders
  const [allFilesFolders, setAllFilesFolders] = useState([]);

  useEffect(() => {
    if (allFilesFolders.length > 0)
      localStorage.setItem("All_data", JSON.stringify(allFilesFolders));
  }, [allFilesFolders]);

  useEffect(() => {
    // to initialize by graph like left UI (display of files)
    localStorage.setItem("-1", JSON.stringify(initData));
    const arr = JSON.parse(localStorage.getItem("All_data"));
    if (arr) {
      setAllFilesFolders(arr);
    }
  }, []);

  //sets latest values of crumbs and key
  const crumbsAndKeyHandler = (crumbsAndKey) => {
    setCrumbsAndKey(crumbsAndKey);
  };
  const lockHandler = () => {
    setLock(true);
  };
  const darkModeHandler = () => {
    setDarkMode((x) => !x);
  };
  const createFileFolderHandler = (data) => {
    if (data.type === "folder") {
      let list = [];
      if (localStorage.getItem(crumbsAndKey.key) !== null) {
        list = JSON.parse(localStorage.getItem(crumbsAndKey.key));
      }

      let idx = list ? list.length : 0;
      const obj = {
        key: crumbsAndKey.key + "-" + String(idx),
        label: data.folderName,
        type: "folder",
        parent: crumbsAndKey.key,
        crumbs: crumbsAndKey.crumbs + data.folderName + " / ",
      };

      const arr = [...list, obj];
      setDisplayContents(arr); //to update content to display below navbar
      //console.log(arr);

      setAllFilesFolders([...allFilesFolders, obj]); //updating our allFilesFolders array for searching purpose

      localStorage.setItem(crumbsAndKey.key, JSON.stringify(arr)); //updating local storage

      setShowCreateFolder(false); //closing 'create folder modal'
    } else if (data.type === "file") {
      console.log(data);
      let list = [];
      if (localStorage.getItem(crumbsAndKey.key) !== null) {
        list = JSON.parse(localStorage.getItem(crumbsAndKey.key));
      }

      let idx = list ? list.length : 0;

      const obj = {
        key: crumbsAndKey.key + "-" + String(idx),
        label: data.fileName,
        type: "file",
        content: data.fileContent,
        parent: crumbsAndKey.key,
      };

      const arr = [...list, obj];
      setDisplayContents(arr); //to update content to display below navbar

      console.log(arr);

      localStorage.setItem(
        crumbsAndKey.key + "-" + String(idx),
        JSON.stringify({
          key: crumbsAndKey.key + "-" + String(idx),
          label: data.fileName,
          content: JSON.stringify(data.fileContent),
        }),
      ); //setting up file content: ;

      // const x=allFilesFolders;
      // x.push(onj)
      setAllFilesFolders([...allFilesFolders, obj]); //updating our allFilesFolders array for searching purpose

      localStorage.setItem(crumbsAndKey.key, JSON.stringify(arr)); //updating local storage

      setShowCreateFile(false); //closing 'create folder modal'
    }
  };
  return (
    <div
      className={
        darkMode ? `${classes.dashclass} ${classes.dark}` : classes.dashclass
      }
    >
      <Sidebar
        enterCrumbsAndKey={crumbsAndKeyHandler}
        showCreateFolder={setShowCreateFolder}
        showCreateFile={setShowCreateFile}
        treeData={initData}
        lockIt={lockHandler}
        isDarkMode={darkMode}
      />
      <Navbar
        crumbs={crumbsAndKey.crumbs}
        showCreateFolder={setShowCreateFolder}
        showCreateFile={setShowCreateFile}
        key_={crumbsAndKey.key}
        DarkModeHandler={darkModeHandler}
        isDarkMode={darkMode}
        setShowResetPinModal={setShowResetPinModal}
        displayContents={displayContents}
        setCrumbsAndKey={setCrumbsAndKey}
        setShowFileContentModal={setShowFileContentModal}
        setFileDetails={setFileDetails}
        allFilesFolders={allFilesFolders}
      />

      {showCreateFolder && (
        <CreateFolder
          showCreateFolder={setShowCreateFolder}
          createFileFolderHandler={createFileFolderHandler}
        />
      )}

      {showCreateFile && (
        <CreateFile
          showCreateFile={setShowCreateFile}
          createFileFolderHandler={createFileFolderHandler}
        />
      )}
      {showResetPinModal && (
        <Reset
          setShowResetPinModal={setShowResetPinModal}
          setLock={setLock}
          setAccountPin={setAccountPin}
        />
      )}

      {lock && (
        <Unlock
          isDarkMode={darkMode}
          setLock={setLock}
          AccountPin={AccountPin}
        />
      )}
      {showFileContentModal && (
        <FileContent
          fileDetails={fileDetails}
          setShowFileContentModal={setShowFileContentModal}
        />
      )}
    </div>
  );
};

Dashboard.propTypes = {
  setAccountPin: PropTypes.func,
  AccountPin: PropTypes.string,
};

export default Dashboard;

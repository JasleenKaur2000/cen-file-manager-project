import React, { useState } from "react";
import classes from "./Navbar.module.scss";
import search_icon from "../sources/search.png";
import settings_icon from "../sources/settings_icon.svg";
import addIcon from "../sources/add.svg";
import beam from "../sources/beam.svg";
import PropTypes from "prop-types";

import folderIcon from "../sources/folder.svg";
import fileIcon from "../sources/file.svg";
import imageFileIcon from "../sources/image_file.svg";
import smallFileIcon from "../sources/smallFile.svg";
import smallFolderIcon from "../sources/smallClosedFolder.svg";

const Navbar = ({
  crumbs,
  key_,
  showCreateFolder,
  showCreateFile,
  setCrumbsAndKey,
  setShowFileContentModal,
  setFileDetails,
  allFilesFolders = [],
}) => {
  const [showAddOptions, setShowAddOptions] = useState(false);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    console.log(searchWord);
    const newFilter = allFilesFolders.filter((value) => {
      return value.label.toLowerCase().includes(searchWord.toLowerCase());
    });
    console.log(newFilter);
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  let list = [];
  if (localStorage.getItem(key_) !== null) {
    list = JSON.parse(localStorage.getItem(key_));
  }
  const showAddOptionsHandler = () => {
    setShowAddOptions((x) => !x);
  };

  const iconIdentifier = (type) => {
    if (type === "folder") return folderIcon;
    if (type === "imageFile") return imageFileIcon;
    if (type === "file") return fileIcon;
  };

  const onClickCreateFolderHandler = (e) => {
    e.preventDefault();
    showCreateFolder(true);
  };
  const onClickCreateFileHandler = (e) => {
    e.preventDefault();
    showCreateFile(true);
  };

  const onClickSearchResultsHandler = (obj) => {
    setFilteredData([]);
    setWordEntered("");
    onClickFileFolderHandler(obj);
  };

  const onClickFileFolderHandler = (obj) => {
    console.log(obj);
    if (obj.type === "folder") {
      setCrumbsAndKey({ crumbs: obj.crumbs, key: obj.key });
    } else {
      const x = { key: obj.key, content: "", label: obj.label };
      const temp = JSON.parse(localStorage.getItem(obj.key));
      if (temp) {
        setFileDetails(temp);
        setShowFileContentModal(true);
      } else setFileDetails(x);
      setShowFileContentModal(true);
    }
  };
  return (
    <div className={classes.cover}>
      <div>
        <div>
          <div className={classes.search}>
            <div>
              <img src={search_icon} />
              <input
                value={wordEntered}
                onChange={handleFilter}
                type="text"
                title="Search"
                placeholder="Search..."
              />
            </div>

            {filteredData.length > 0 && (
              <div>
                {filteredData.slice(0, 15).map((data) => {
                  return (
                    <div
                      key={data.key}
                      className={classes.dataItem}
                      onClick={() => onClickSearchResultsHandler(data)}
                    >
                      <img
                        src={
                          data.type === "file" ? smallFileIcon : smallFolderIcon
                        }
                      />
                      <p>{data.label}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <button className={classes.modes}>
            <div>
              <img src={beam}></img>
              <p>dl mode</p>
            </div>
          </button>

          <button onClick={showAddOptionsHandler}>
            <img src={addIcon} />
          </button>

          {showAddOptions && (
            <div className={classes.backdrop} onClick={showAddOptionsHandler}>
              <div>
                <button onClick={onClickCreateFileHandler}>New File</button>
                <button onClick={onClickCreateFolderHandler}>New Folder</button>
              </div>
            </div>
          )}

          <button>
            <img src={settings_icon} />
          </button>

          {/* {showResetPinOption && (
            <div className={classes.backdrop} onClick={showResetPinHandler}>
              <div className={isDarkMode?classes.addOptions_dark:classes.addOptions}>
                <button  onClick={onClickResetPinHandler}>Reset Pin</button>
              </div>
            </div>
            )
            } */}
        </div>

        <div>{crumbs}</div>
      </div>
      <div>
        {list &&
          list.length > 0 &&
          list.map((obj) => (
            <div
              className={classes.icons}
              key={obj.key}
              onClick={() => onClickFileFolderHandler(obj)}
            >
              <img src={iconIdentifier(obj.type)} />
              <p>{obj.label}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
Navbar.propTypes = {
  crumbs: PropTypes.string,
  setCrumbsAndKey: PropTypes.func,
  displayContents: PropTypes.array,
  key_: PropTypes.string,
  showCreateFolder: PropTypes.func,
  showCreateFile: PropTypes.func,
  setShowResetPinModal: PropTypes.func,
  setShowFileContentModal: PropTypes.func,
  setFileDetails: PropTypes.func,
  allFilesFolders: PropTypes.array,
};
export default Navbar;

import React from "react";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
export default function Folder(props) {
  return (
    <div className="d-flex justify-content-between alert ml-2 mr-2 fold">
      <div>
        <FolderIcon />
        <span className="mt-2 ml-3">{props.data}</span>
      </div>
      <div className="delete">
        <DeleteForeverIcon
          style={{ color: "red" }}
          onClick={() => props.deleteFolder(props.data)}
        />
      </div>
    </div>
  );
}

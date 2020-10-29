import React from "react";
import { Button } from "react-bootstrap";

export default function Breadcrumb({ setShow }) {
  return (
    <div>
      <nav className="d-flex justify-content-between">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
        <button className="btn" onClick={() => setShow(true)}>
          Create Folder
        </button>
      </nav>
    </div>
  );
}

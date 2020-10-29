import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Folder from "./components/Folder";
import Breadcrumb from "./components/Breadcrumb";
import { Modal, Button } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [input, handleChange] = useState("");
  const deleteFolder = (name) => {
    const arr = data.filter((elem) => elem !== name);
    setData(arr);
  };
  const createFolder = () => {
    setData([...data, input]);
    setShow(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav style={{ textAlign: "center" }}>
          <h3>Drive</h3>
        </nav>
        <hr></hr>
      </header>
      <Breadcrumb setShow={setShow} />
      <div className="d-flex mt-5">
        {data.map((elem, index) => (
          <Folder data={elem} key={index} deleteFolder={deleteFolder} />
        ))}
      </div>
      <Modal show={show} onHide={() => setShow(false)} center>
        <Modal.Header closeButton>
          <Modal.Title>New Folder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={createFolder}>
            CREATE
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;

// import React from 'react'
// import BootstrapModal from './Components/BootstrapModal'
// import Modal from './Components/Modal'
import dataJson from "./data.json";
import { useState } from "react";
import { Container, Row, Table, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

const App = () => {
  // return (
  //   <div className='App'>
  //     {/* <Modal/> */}
  //     <h1>Hey, click on button to see the modal</h1>
  //     <button className='openModalBtn'>Open</button>
  //     <BootstrapModal />
  //   </div>
  // )
  const [data, setData] = useState(dataJson);
  const [deleteId, setDeleteId] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleClickDelete = (id) => {
    setDeleteId(id);
    setShow(true);
  };

  const handleDeleteItem = () => {
    setData((pre) => {
      const newArray = [...pre];
      return newArray.filter((item) => item._id !== deleteId);
    });
    setShow(false);
  };

  return (
    <div className="App">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa sản phẩm này?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có chắc xóa sản phẩm này không?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteItem}>
            OK
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Container>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Tên sách</th>
                <th>Hình ảnh</th>
                <th>Thể loại</th>
                <th>Giá</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      {item.name} - {item.author?.name}
                    </td>
                    <td>
                      <img src={item.imageUrl} alt="" />
                    </td>
                    <td>{item.genre.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button className="btn btn-danger"
                        onClick={() => handleClickDelete(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default App;
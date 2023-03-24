import React, { useEffect } from "react";
import  ReactDOM  from "react-dom";

const MyModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>Stay Tuned</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          recusandae enim quae laborum quos quas repellendus impedit debitis
          veritatis nihil!
        </p>
        <button className="model-btn" onClick={closeModal}>Accept It</button>
      </div>
    </>,
    document.querySelector('.modaldiv')
  );
};

export default MyModal;

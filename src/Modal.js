import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { modalOpen, closeModal } = useGlobalContext();
  return (
    <div className={`modal-overlay ${modalOpen ? "show-modal" : null}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;

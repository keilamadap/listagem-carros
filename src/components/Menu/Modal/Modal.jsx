import React from "react";
import "./styles.css";

function Modal({ isOpen, closeModal, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="close-container">
          <button className="close-button" onClick={closeModal}>
            Fechar
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;

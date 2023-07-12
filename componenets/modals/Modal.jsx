import React from "react";
import './Modal.css';

const Modal = ({ selected, setSelected }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelected(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selected} alt="showing the pic" />
    </div>
  );
};

export default Modal;

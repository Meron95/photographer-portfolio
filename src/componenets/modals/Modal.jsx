import React from "react";
import './Modal.css';

const Modal = ({ selected, setSelected, onPrev, onNext }) => {
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelected(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleBackdropClick}>
      <div className="img-container">
        <img src={selected} alt="showing the pic" />
      </div>
      <div className="buttons-container">
          <button className="prev-button" onClick={onPrev}>
            {"<"}
          </button>
          {/* Close button */}
          <button className="close-button" onClick={() => setSelected(null)}>
            X
          </button>
          <button className="next-button" onClick={onNext}>
            {">"}
          </button>
        </div>
    </div>
  );
};

export default Modal;

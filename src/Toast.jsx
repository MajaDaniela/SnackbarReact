import React from "react";
import "./styles.css";

const Toast = ({ id, type, icon, text, onClose }) => {
  return (
    <div className={`toast ${type}`} role="alert" aria-live="assertive">
      <i className="material-icons">{icon}</i>
      <div className="content">
        <span>{text}</span>
      </div>
      <i className="material-icons close-toast" onClick={() => onClose(id)}>
        close
      </i>
    </div>
  );
};

export default Toast;

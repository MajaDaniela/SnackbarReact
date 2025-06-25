import React, { useState } from "react";
import Toast from "./Toast";

let idCounter = 0;

const iconMap = {
  success: "check_circle",
  error: "error",
  warning: "warning",
  info: "info",
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const createToast = (type, text) => {
    const id = idCounter++;
    const icon = iconMap[type] || "info";
    const newToast = { id, type, icon, text };

    setToasts((prevToasts) => [...prevToasts, newToast]);

    // Independent timeout for this toast
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <>
      <div className="buttons">
        <button
          onClick={() => createToast("success", "This is a success toast.")}
        >
          Success
        </button>
        <button onClick={() => createToast("error", "This is an error toast.")}>
          Error
        </button>
        <button
          onClick={() => createToast("warning", "This is a warning toast.")}
        >
          Warning
        </button>
        <button onClick={() => createToast("info", "This is an info toast.")}>
          Info
        </button>
      </div>

      <div className="notifications">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={removeToast} />
        ))}
      </div>
    </>
  );
};

export default ToastContainer;

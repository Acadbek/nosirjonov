import React, { useRef, useEffect } from "react";
import Input from "../Input";

const Modal = ({ modalStatus }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (modalStatus) inputRef.current.focus();
  }, [modalStatus]);
  return (
    <div className="modal">
      <Input placeholder="Type a command or search..." ref={inputRef} />
    </div>
  );
};

export default Modal;

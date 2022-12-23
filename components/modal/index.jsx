import React, { useRef } from "react";
import Input from "../Input";

const Modal = () => {
  const inputRef = useRef("");
  console.log(inputRef.current.value);
  return (
    <div className="modal">
      <Input placeholder="Type a command or search..." ref={inputRef} />
      <p>Lorem ipsum dolor sit.</p>
      <h1>lorem</h1>
    </div>
  );
};

export default Modal;

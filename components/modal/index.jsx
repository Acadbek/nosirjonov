import React, { useRef, useEffect } from "react";
import Input from "../Input";
import Menu from "../eachMenu";
import blogIcon from "../../public/icons/blog.svg";

const Modal = ({ modalStatus }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (modalStatus) inputRef.current.focus();
  }, [modalStatus]);
  return (
    <div className="modal">
      <Input placeholder="Type a command or search..." ref={inputRef} />
      <Menu title="Blog" icon={blogIcon} />
    </div>
  );
};

export default Modal;

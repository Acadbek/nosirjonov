import React, { useRef, useEffect } from "react";
import Input from "../Input";
import Menu from "../eachMenu";
import { menu } from "../../data/menu";

const Modal = ({ modalStatus }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (modalStatus) inputRef.current.focus();
  }, [modalStatus]);

  return (
    <div className="modal">
      <Input placeholder="Type a command or search..." ref={inputRef} />
      {menu.map(({ id, title, icon, shortcut }) => (
        <Menu key={id} title={title} icon={icon} shortcut={shortcut} />
      ))}
    </div>
  );
};

export default Modal;

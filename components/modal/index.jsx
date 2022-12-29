import React, { useRef, useEffect } from "react";
import Input from "../Input";
import Menu from "../eachMenu";
import Line from "../line";
import { menu } from "../../data/menu";
import { blogs } from "../../data/blog";
import { collection } from "../../data/collection";
import { social } from "../../data/social";

const Modal = ({ modalStatus }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (modalStatus) inputRef.current.focus();
  }, [modalStatus]);

  return (
    <div className="modal">
      <Input placeholder="Type a command or search..." ref={inputRef} />
      <Line title="Blog" />
      {blogs.map(({ id, title, icon, shortcut }) => (
        <Menu key={id} title={title} icon={icon} shortcut={shortcut} />
      ))}
      <Line title="Navigation" />
      {menu.map(({ id, title, icon, shortcut }) => (
        <Menu key={id} title={title} icon={icon} shortcut={shortcut} />
      ))}
      <Line title="Collection" />
      {collection.map(({ id, title, icon, shortcut }) => (
        <Menu key={id} title={title} icon={icon} shortcut={shortcut} />
      ))}
      <Line title="Social" />
      {social.map(({ id, title, icon, shortcut }) => (
        <Menu key={id} title={title} icon={icon} shortcut={shortcut} />
      ))}
    </div>
  );
};

export default Modal;

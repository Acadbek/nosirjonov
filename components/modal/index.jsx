import React, { useRef, useEffect } from "react";
import Input from "../Input";
import Menu from "../eachMenu";
import blog from "../../public/icons/blog.svg";
import search from "../../public/icons/search.svg";

const Modal = ({ modalStatus }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (modalStatus) inputRef.current.focus();
  }, [modalStatus]);
  return (
    <div className="modal">
      <Input placeholder="Type a command or search..." ref={inputRef} />
      <Menu title="Blog" icon={blog} />
      <Menu title="Search Blog..." icon={search} />
      <Menu title="Blog" icon={blog} />
      <Menu title="Blog" icon={blog} />
      <Menu title="Blog" icon={blog} />
      <Menu title="Blog" icon={blog} />
      <Menu title="Blog" icon={blog} />
      <Menu title="Blog" icon={blog} />
      <Menu title="Blog" icon={blog} />
      <Menu title="Blog" icon={blog} />
    </div>
  );
};

export default Modal;

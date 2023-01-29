import { useRef, useEffect, useState } from "react";
import Line from "../line";
import Menu from "../eachMenu";
import { menu } from "../../data/menu";
import { blogs } from "../../data/blog";
import { social } from "../../data/social";
import { collection } from "../../data/collection";

const Modal = ({ modalStatus }) => {
  const inputRef = useRef(null);
  const [inputVl, setInputVl] = useState("");
  const [data] = useState(menu.concat(blogs, collection, social));

  useEffect(() => {
    if (modalStatus) inputRef?.current.focus();
  }, [modalStatus]);

  return (
    <div className="modal">
      <input
        className="bg-black sticky top-0 tracking-wide rounded-t-lg w-full px-4 py-5 text-white outline-none border-b border-[#262222]"
        type="text"
        onChange={(e) => setInputVl(e.target.value.toLowerCase())}
        placeholder="Type a command or search..."
        ref={inputRef}
      />
      {data?.map(
        ({ id, title, icon, shortcut }) =>
          title.toLowerCase().includes(inputVl) && (
            <Menu key={id} title={title} icon={icon} shortcut={shortcut} />
          )
      )}
    </div>
  );
};

export default Modal;

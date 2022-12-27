import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = ({ icon, title, shortcut, link = "/" }) => {
  return (
    <Link
      className="text-white py-4 gap-2 px-3 flex items-center w-full"
      href={link}
    >
      <Image src={icon} width={24} height={24} alt="icon" />
      <p className="text-lg">{title}</p>
      {shortcut && "mello"}
    </Link>
  );
};

export default Menu;

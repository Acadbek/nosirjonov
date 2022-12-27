import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = ({ icon, title, shortcut, link = "/" }) => {
  return (
    <Link
      className="text-white hover:bg-[#242424] py-4 px-3 flex items-center justify-between w-full"
      href={link}
    >
      <div className='flex gap-3'>
        <Image src={icon} width={24} height={24} alt="icon" />
        <p className="text-lg">{title}</p>
      </div>
      {shortcut && "mello"}
    </Link>
  );
};

export default Menu;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = ({ icon, title, shortcut, link = "/", comingSoon }) => {
  return (
    <Link
      className="text-white z-0 hover:bg-[#1a1919] py-4 px-3 flex items-center justify-between w-full"
      href={link}
    >
      <div className="flex gap-3">
        <Image src={icon} width={24} height={24} alt="icon" />
        <p className="text-lg flex items-end">
          {title}
          {comingSoon && (
            <p className="text-xs ml-1 text-gray-700">Coming Soon</p>
          )}
        </p>
      </div>
      {shortcut && ""}
    </Link>
  );
};

export default Menu;

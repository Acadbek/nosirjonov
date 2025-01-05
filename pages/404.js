import React from "react";
import img from "../public/photos/comingSoon.jpg";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container h-[80vh] flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <p className="text-3xl bg-white text-black px-2">404</p>
        <Link className="text-2xl flex items-center justify-center p-1 border-[0.5px] roun border-transparent hover:border-[#14B8A6]" href={'/'}>./</Link>
      </div>
    </div>
  );
};

export default NotFound;

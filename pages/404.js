import React from "react";
import img from "@/public/photos/comingSoon.jpg";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="container">
      <Image src={img} width={750} alt="Coming Soon" />
    </div>
  );
};

export default NotFound;

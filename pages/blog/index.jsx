import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div className="container text-white">
      <Link href={"blog/slug/1"}>
        <h1>Blog</h1>
      </Link>
    </div>
  );
};

export default Blog;

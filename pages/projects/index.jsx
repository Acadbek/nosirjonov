import React from "react";
import { projects } from "../../data/projects";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="container !pt-10 flex flex-col gap-[48px]">
      {projects.map(({ id, img, title, desc, slug }) => (
        <Link target="_blank" href={slug} className="project" key={id}>
          <Image
            className="w-full projectImg h-[220px] object-cover rounded-lg"
            src={img}
            width={1000}
            alt="Logo"
            priority={true}
          />
          <div className="content flex flex-col gap-4">
            <p className="title">{title}</p>
            <p className="desc tracking-wide leading-7">{desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;

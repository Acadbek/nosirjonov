import React from "react";
import { projects } from "../../data/projects";
import Image from "next/image";
import Link from "next/link";
import s from "../../styles/Projects.module.css";

const Projects = () => {
  return (
    <div className="container !pt-10 flex flex-col gap-[48px]">
      {projects.map(({ id, img, title, desc, slug }) => (
        <Link target="_blank" href={slug} className={s.project} key={id}>
          <Image
            className={s.projectImg}
            src={img}
            width={1000}
            alt="Logo"
            priority={true}
          />
          <div className={s.content}>
            <p className={s.title}>{title}</p>
            <p className={s.desc}>{desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;

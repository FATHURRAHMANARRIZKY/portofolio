import React from "react";
import { projects } from "@/lib/projectsData"; // pastikan isinya array of project object
import Link from "next/link";
import Image from "next/image";

const maxProjects = 8;

const Projects = () => {
  return (
    <div className="project-container flex flex-col items-center justify-center w-full min-h-screen px-4 pt-10">
      <h1 className="text-4xl font-bold text-center mb-10">My Projects</h1>
      <div className="cards grid grid-cols-2 md:grid-cols-4 gap-4">
        {projects.slice(0, maxProjects).map((project, idx) => (
          <Link href={`${project.link}`} target="_blank" rel="noopener noreferrer" key={idx}>
          <div
            key={idx}
            className="card w-40 h-40 md:w-56 md:h-56 bg-gray-600 flex items-center justify-center rounded-xl shadow-md"
          >
            <Image
              width={256}
              height={256}
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div></Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
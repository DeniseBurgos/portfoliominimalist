import bosqueImage from "../assets/bosque.jpg"
import { useEffect, useState } from "react";

const Projects = () => {

  const projects = [
    {
    description:"lalalalalala",
    bosqueImageSrc: bosqueImage,
    gitHubLink:"https://github.com/JustoMateos21/developer_portfolio/blob/main/src/components/Projects.jsx",
    deployLink:"https://github.com/JustoMateos21/developer_portfolio/blob/main/src/components/Projects.jsx",
  },
    {
    description:"lalalalalala",
    bosqueImageSrc: bosqueImage,
    gitHubLink:"https://github.com/JustoMateos21/developer_portfolio/blob/main/src/components/Projects.jsx",
    deployLink:"https://github.com/JustoMateos21/developer_portfolio/blob/main/src/components/Projects.jsx",
  },
    {
    description:"lalalalalala",
    bosqueImageSrc: bosqueImage,
    gitHubLink:"https://github.com/JustoMateos21/developer_portfolio/blob/main/src/components/Projects.jsx",
    deployLink:"https://github.com/JustoMateos21/developer_portfolio/blob/main/src/components/Projects.jsx",
  },
];

  return (
    <div name="Projects" className=" flex flex-col items-center h-screen w-screen">
      <h2 className=" font-semibold text-[40px] sm:mt-44">Projects</h2>
      <div className=" gap-4 mt-12 grid grid-cols-3 md:grid-cols-1">
        {projects.map(p => (
          <div className=" relative w-[400px] h-[275px] border-red-100 border-spacing-1 border p-2 bg-slate-800 sm:mb-1">
          <img className=" object-cover" src={p.bosqueImageSrc} alt=""/>
          <span className=" flex flex-col p-4 absolute backdrop-blur hover:backdrop-blur-[20px] inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className=" text-white"> {p.description} </p>
            <div className=" flex">
              <a href={p.gitHubLink}>Git</a>
              <a className=" ml-4" href={p.deployLink}>Deploy</a>
            </div>
          </span>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
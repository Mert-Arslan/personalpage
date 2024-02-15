import React from "react";
import { useLanguage } from "../Contexts/DataContext";

function Projects() {
  return (
    <div className="flex w-full justify-center h-auto bg-[#CBF281] dark:bg-slate-950 ">
      <div className="flex flex-col w-8/12 ">
        <h2 className="text-2xl font-bold text-[#4731D3] dark:text-yellow-200">
          Projects
        </h2>
        <div className="flex items-center">
          <img
            className="w-1/4 max-h-48"
            src="./assets/workintech.png"
            alt="Workintech"
          />
          <div className="justify-center ml-5 dark:text-white">
            <h2>Workintech</h2>
            <p>
              ashjdbsahdbsabdjkasndaskdaskldjsakdsakdjaskdjasldjaskdasdsadas
            </p>
          </div>
        </div>
        <div className="flex items-center my-10">
          <img
            className="w-1/4 max-h-48"
            src="./assets/workintech.png"
            alt="Workintech"
          />
          <div className="justify-center ml-5 dark:text-white">
            <h2>Workintech</h2>
            <p>
              ashjdbsahdbsabdjkasndaskdaskldjsakdsakdjaskdjasldjaskdasdsadas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

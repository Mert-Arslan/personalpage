import React from "react";
import { useLanguage } from "../Contexts/DataContext.jsx";
import { data } from "../data/Data.jsx";
function Skills() {
  const { transferredData, language } = useLanguage();
  const mySkills = data[1].skills[language];
  return (
    <div className="flex w-full justify-center bg-white dark:bg-zinc-800">
      <div className="flex flex-row items-start w-8/12 justify-between pt-10 pb-10 space-x-2">
        <div className="flex-auto text-[#4832D3] dark:text-[#CBF281] w-24 h-24 text-4xl">
          {mySkills.data1}
        </div>
        <div className="flex-auto p-1">
          <div className="flex items-center space-x-2 mb-3 dark: text-white">
            <img className="w-20 h-20" src="./assets/javasc.png" alt="" />
            <p>JAVASCRİPT</p>
          </div>
          <div className="flex items-center space-x-2 mb-3 dark: text-white">
            <img className="w-20 h-20" src="./assets/react.png" alt="" />
            <p>REACT</p>
          </div>
          <div className="flex items-center space-x-2 mb-3 dark: text-white">
            <img className="w-20 h-20" src="./assets/redux.png" alt="" />
            <p>REDUX</p>
          </div>
        </div>
        <div className="flex-auto p-1">
          <div className="flex items-center space-x-2 mb-3 dark: text-white">
            <img className="w-20 h-20" src="./assets/nodejs1.png" alt="" />
            <p>NODE</p>
          </div>
          <div className="flex items-center space-x-2 mb-3 dark: text-white">
            <img className="w-20 h-20" src="./assets/vs.png" alt="" />
            <p>VS CODE</p>
          </div>
          <div className="flex items-center space-x-2 mb-3 dark: text-white">
            <img className="w-20 h-20" src="./assets/figma.png" alt="" />
            <p>FİGMA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

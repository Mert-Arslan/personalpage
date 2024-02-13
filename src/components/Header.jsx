import React from "react";
import { useLanguage } from "../Contexts/DataContext";
import { data } from "../data/Data.jsx";

function Header() {
  const { toggleHandle, transferredData, language, setDarkMode, darkMode } =
    useLanguage();
  console.log("datalar doğu şekilde yollandı yollandı", transferredData);
  let headerConter = data[0].header[language];

  /*var mustafa = "";
  for (var key in data.header) {
    if (key == language) {
      mustafa = data.header[key].data1;
    }
  }*/

  return (
    <>
      <div className="flex dark:bg-gradient-to-r from-[#171043] from-%0 via-[#171043] via-%75  to-[#1a210b] to-%100 custom-gradient-bg justify-center w-full  ">
        <div className="flex flex-col w-8/12 items-center">
          <div className="flex w-full justify-between">
            <header className="text-[#CBF281] justify-start mt-10 ">
              Mert
            </header>
            <div>
              <button
                onClick={toggleHandle}
                className="text-xs mr-20 text-[#CBF281] mt-5"
              >
                TÜRKÇE'YE GEÇ
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-xs ml-10 dark:text-white"
              >
                BUTON-2
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="text-container">
              <h1 className="text-[#CBF281] mt-4 justify-start w-full text-3xl font-bold">
                {headerConter?.data1}
                <br /> {headerConter?.data2}
              </h1>
              <p className="mt-4 justify-start w-full text-[#FFFFFF] ">
                {headerConter?.data3} <br />
                {headerConter?.data4}
              </p>
              <div className="mt-4 flex  justify-start w-full mb-10 gap-1">
                <img className="flex" src="./src/assets/GithubButton.png" />
                <img className="flex" src="./src/assets/LinkedinButton.png" />
              </div>
            </div>

            <div className="flex w-full justify-end">
              <img
                className="object-fit w-auto rounded-md h-36 mb-10 mt-5"
                src="./src/assets/hero.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

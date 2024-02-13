import React from "react";
import { useLanguage } from "../Contexts/DataContext.jsx";
import { data } from "../data/Data.jsx";

function Profile() {
  const { transferredData, language } = useLanguage();
  const mySkills = data[2].profile[language];
  return (
    <>
      <div className="flex bg-[#4731d3] dark:bg-[#171043] justify-center w-full">
        <div className="flex flex-row w-8/12 justify-between">
          <div className="text-[#CBF281] flex-auto mt-4 justify-around items-center w-1/3 text-3xl font-bold">
            PROFİLE
            <div className=" flex text-xs mt-5">
              <p className="text-white text-xl">Basic İnformation</p>
            </div>
            <div className=" flex text-xs mt-3">
              <p className="text-[#cbf281]">Doğum Tarihi</p>
              <span className="text-white ml-3">01.01.1993</span>
            </div>
            <div className="flex text-xs mt-2">
              <p className="text-[#cbf281]">İkamet Şehri</p>
              <span className="text-white ml-3">Ankara</span>
            </div>
            <div className="flex text-xs mt-2">
              <p className="text-[#cbf281]">Eğitim Durumu</p>
              <span className="text-white ml-3">ODTÜ,Çevre Müh.,2022</span>
            </div>
            <div className="flex text-xs mt-2">
              <p className="text-[#cbf281]">Tercih Ettiği Rol</p>
              <span className="text-white ml-3">Frontend,UI</span>
            </div>
          </div>
          <div className="flex-auto justify-center items-center mt-4 ">
            <img
              className="object-contain"
              src="./src/assets/profile.png"
              alt=""
            />
          </div>
          <div className="flex-auto justify-center items-center text-white text-xl mt-14">
            About me
            <div className="flex justify-center text-xs mt-3 items-center">
              Ankarada dogudum ve büyüdüm, lise eğitimimi Leyla Turgut Anadolu
              Lisesinde tamamladım, daha sonrasında ise ODTÜ Çevre
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

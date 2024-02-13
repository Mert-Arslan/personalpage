import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useLocalStorage } from "../hooks/UseLocalStorage.jsx";

export const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

const url = "https://mp4e3f0d6899a9078fb2.free.beeceptor.com/arslanmertdata";

export const LanguageProvider = ({ children }) => {
  const [transferredData, setTransferredData] = useState(null); // mock apiden aldığım datayı buraya yolladım
  const [language, setLanguage] = useLocalStorage("language", "en"); // dil değişiyo bu yüzden state içine attım başlangıcı da en olarak aldım
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false); // light ya da dark mode için state atandı.

  const toggleHandle = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  //tüm componentlara transferredDatayı gönderdim çünkü alttaki axios isteği ile dataları çekip atıyo ama paralı console kontrol ettiğim her seferde çalışıyo xD
  /*useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setTransferredData(response.data);
        console.log("İLK HAL", response.data);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });
  }, []);*/

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem(darkMode, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(!darkMode, "light");
    }
  }, [darkMode]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        transferredData,
        darkMode,
        toggleHandle,
        setDarkMode,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

import React, { useState, useEffect } from 'react';
import { CiCloudSun } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  }, [darkMode]);

  return (
    <div className="relative w-8 h-8">
      {darkMode ? (
        <CiCloudSun
          className="w-7 h-7 text-yellow-500 cursor-pointer absolute top-0 right-0 transition-all duration-300"
          onClick={() => setDarkMode(false)}
          title="Switch to Light Mode"
        />
      ) : (
        <MdDarkMode
          className="w-7 h-7 text-black dark:text-white cursor-pointer absolute top-0 right-0 transition-all duration-300"
          onClick={() => setDarkMode(true)}
          title="Switch to Dark Mode"
        />
      )}
    </div>
  );
};

export default DarkMode;


import { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.svg";
import downArrow from "../assets/images/icon-arrow-down.svg";
import moonIcon from "../assets/images/icon-moon.svg";

type FontOption = "Sans Serif" | "Serif" | "Mono";

const fontFamilyMap: Record<FontOption, string> = {
  "Sans Serif": "Inter",
  Serif: "Lora",
  Mono: "Inconsolata",
};

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentFont, setCurrentFont] = useState<FontOption>("Sans Serif");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeFont = (font: FontOption) => {
    document.body.style.fontFamily = fontFamilyMap[font];
  };

  const handleFontChange = (font: FontOption) => {
    changeFont(font);
    setCurrentFont(font);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between">
      <img
        className="h-8 w-[1.781rem] tablet:h-[2.281rem] tablet:w-8"
        src={logo}
        alt=""
        aria-hidden="true"
      />
      <div className="flex h-8 items-center gap-4 tablet:gap-[1.625rem]">
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex h-8 cursor-pointer items-center gap-4 border-r border-grey-400 pr-4 tablet:gap-[1.125rem] tablet:pr-[1.625rem]"
            onClick={toggleDropdown}
          >
            <p className="text-sm font-bold leading-6 tablet:text-lg dark:text-white">
              {currentFont}
            </p>
            <img src={downArrow} alt="Select a different font type" />
          </div>
          {isDropdownOpen && (
            <div className="absolute left-0 top-full mt-2 w-[10rem] rounded-2xl bg-white p-6 shadow-lg dark:bg-grey-800">
              <p
                onClick={() => handleFontChange("Sans Serif")}
                className="mb-4 cursor-pointer font-inter font-bold hover:text-purple dark:text-white dark:hover:text-purple"
              >
                Sans Serif
              </p>
              <p
                onClick={() => handleFontChange("Serif")}
                className="mb-4 cursor-pointer font-lora font-bold hover:text-purple dark:text-white dark:hover:text-purple"
              >
                Serif
              </p>
              <p
                onClick={() => handleFontChange("Mono")}
                className="cursor-pointer font-inconsolata font-bold hover:text-purple dark:text-white dark:hover:text-purple"
              >
                Mono
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 tablet:gap-5">
          <label className="inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              onChange={toggleDarkMode}
              className="peer sr-only"
            />
            <div className="relative flex h-5 w-10 items-center rounded-full bg-grey-500 p-[0.1875rem] after:absolute after:h-[0.875rem] after:w-[0.875rem] after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple peer-checked:after:translate-x-[1.125rem] rtl:peer-checked:after:-translate-x-[1.125rem]"></div>
            <span className="ms-3 text-sm font-medium">
              <img
                className="h-5 w-5"
                src={moonIcon}
                alt=""
                aria-hidden="true"
              />
            </span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;

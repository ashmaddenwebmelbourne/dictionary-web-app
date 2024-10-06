import logo from "../assets/images/logo.svg";
import downArrow from "../assets/images/icon-arrow-down.svg";
import moonIcon from "../assets/images/icon-moon.svg";

const Header = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex items-center justify-between">
      <img
        className="h-8 w-[1.781rem] tablet:h-[2.281rem] tablet:w-8"
        src={logo}
        alt=""
        aria-hidden="true"
      />
      <div className="flex h-8 items-center gap-4 tablet:gap-[1.625rem]">
        <div className="flex h-8 items-center gap-4 border-r border-grey-400 pr-4 tablet:gap-[1.125rem] tablet:pr-[1.625rem]">
          <p className="text-sm font-bold leading-6 tablet:text-lg">
            Sans Serif
          </p>
          <img src={downArrow} alt="Select a different font type" />
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

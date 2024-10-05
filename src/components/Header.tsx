import logo from "../assets/images/logo.svg";
import downArrow from "../assets/images/icon-arrow-down.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" aria-hidden="true" />
      <div>
        <div>
          <p></p>
          <img src={downArrow} alt="Select a different font type" />
        </div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;

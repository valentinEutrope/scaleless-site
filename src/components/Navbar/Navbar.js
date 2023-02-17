import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { AiOutlineMenu } from "react-icons/ai";
import useClickOutside from "utils/useClickOutside";

const handleClickMenu = (isActiveSidebar, setIsActiveSidebar) => {
  if (isActiveSidebar) {
    setIsActiveSidebar(false);
  } else {
    setIsActiveSidebar(true);
  }
};

const Logo = () => {
  return (
    <a className="logo" href="/">
      <img width="60" src="assets/images/logo-white.png" alt="logo" />
    </a>
  );
};

const BurgerMenu = ({
  tabs,
  isActiveSidebar,
  setIsActiveSidebar,
  sidebarRef,
}) => {
  return (
    <div className="burger-menu">
      <AiOutlineMenu
        id="burger-icon"
        fontSize="large"
        color="white"
        onClick={() => handleClickMenu(isActiveSidebar, setIsActiveSidebar)}
      />
      <div
        className={classnames("sidebar", {
          open: isActiveSidebar,
        })}
        ref={sidebarRef}
      >
        {tabs.map((tab) => (
          <div className="sidebar__item">
            <Link to={`${tab.link}`}>{tab.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const Tab = ({ tab }) => {
  return (
    <div className="navbar__item">
      <Link to={`${tab.link}`}>{tab.title}</Link>
    </div>
  );
};

const Navbar = () => {
  const [isActiveSidebar, setIsActiveSidebar] = React.useState(false);
  const sidebarRef = React.useRef();

  useClickOutside(
    sidebarRef,
    () => {
      setIsActiveSidebar(false);
    },
    ["burger-icon"]
  );

  const tabs = [
    { title: "Biographie", link: "#bio" },
    { title: "Galeries", link: "#gallery" },
    { title: "Ecoute", link: "#listen" },
    { title: "Evènements", link: "#events" },
  ];

  return (
    <div
      className={classnames("navbar", "container", {
        "navbar--scroll": false,
      })}
    >
      <Logo />
      <BurgerMenu
        tabs={tabs}
        isActiveSidebar={isActiveSidebar}
        setIsActiveSidebar={setIsActiveSidebar}
        sidebarRef={sidebarRef}
      />
      <div className="navbar__tabs">
        {tabs.map((tab) => (
          <Tab key={tab.title} tab={tab} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;

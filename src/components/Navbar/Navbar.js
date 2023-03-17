import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import useClickOutside from "utils/useClickOutside";
import BurgerMenu from "./BurgerMenu";

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
      <img width="60" src="assets/images/logo-white.png" alt="Logo Scaleless" />
    </a>
  );
};

const Tab = ({ tab, index }) => {
  return (
    <div className="navbar__item">
      <Link tabIndex={index} to={`${tab.link}`}>
        {tab.title}
      </Link>
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
        handleClickMenu={handleClickMenu}
      />
      <div className="navbar__tabs">
        {tabs.map((tab, index) => (
          <Tab key={tab.title} tab={tab} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

const Tab = ({ tab }) => {
  return (
    <div className="navbar__item">
      <Link to={`${tab.link}`}>{tab.title}</Link>
    </div>
  );
};

const Navbar = () => {
  const tabs = [
    { title: "Biographie", link: "#bio" },
    { title: "Galeries", link: "#gallery" },
    { title: "Evènements", link: "#events" },
    { title: "Ecoute", link: "#listen" },
  ];

  return (
    <div
      className={classnames("navbar", "container", {
        "navbar--scroll": false,
      })}
    >
      {tabs.map((tab) => (
        <Tab key={tab.title} tab={tab} />
      ))}
    </div>
  );
};

export default Navbar;

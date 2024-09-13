import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { AiOutlineMenu } from "react-icons/ai";

const BurgerMenu = ({
  tabs,
  isActiveSidebar,
  setIsActiveSidebar,
  sidebarRef,
  handleClickMenu,
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
          <div className="sidebar__item" key={`sidebar-item-${tab.title}`}>
            <Link to={`${tab.link}`}>{tab.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BurgerMenu;

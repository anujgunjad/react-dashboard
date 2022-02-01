import React from "react";
import classes from "./Sidebar.module.css";
import Icon from "@mui/material/Icon";

const sidebarData = require("./sidebarData.json");

const SidebarIconStyle = {
  margin: 0,
  width: "1em",
  height: "1em",
  display: "inline-block",
  fontSize: "2.3rem",
};

const Sidebar = () => {
  return (
    <div className={classes.sdbr_wrp}>
      <div className={classes.sdbr_icn}>
        <img
          src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg"
          alt="Logo"
        />
        <span>Vuexy</span>
      </div>
      <nav className={classes.nav_menu}>
        <ul>
          {/*Top Header*/}

          {sidebarData.data_one.map((el, i) => (
            <li key={i} className={classes.nav_menu_itm}>
              <Icon
                style={SidebarIconStyle}
                baseClassName="material-icons-outlined"
              >
                {el.icon}
              </Icon>
              <span> {el.title}</span>
            </li>
          ))}

          {/*Header List one*/}

          <li className={classes.nav_header}>
            <span>APPS & PAGES</span>
          </li>

          {sidebarData.data_two.map((el, i) => (
            <li key={i} className={classes.nav_menu_itm}>
              <Icon
                style={SidebarIconStyle}
                baseClassName="material-icons-outlined"
              >
                {el.icon}
              </Icon>
              <span> {el.title}</span>
            </li>
          ))}

          {/*Header List two*/}

          <li className={classes.nav_header}>
            <span>USER INTERFACE</span>
          </li>

          {sidebarData.data_three.map((el, i) => (
            <li key={i} className={classes.nav_menu_itm}>
              <Icon
                style={SidebarIconStyle}
                baseClassName="material-icons-outlined"
              >
                {el.icon}
              </Icon>
              <span> {el.title}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

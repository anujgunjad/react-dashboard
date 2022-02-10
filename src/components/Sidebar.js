import React, { Fragment, useState, useEffect } from "react";
import classes from "./Sidebar.module.css";
import Icon from "@mui/material/Icon";
import useMediaQuery from "./Hooks/useMediaQuery";

const sidebarData = require("./data/sidebarData.json");

const SidebarIconStyle = {
  margin: 0,
  width: "1em",
  height: "1em",
  display: "inline-block",
  fontSize: "2.3rem",
};

const Sidebar = (props) => {
  let sideabarDisplay = useMediaQuery("(min-width: 1200px)");
  return (
    <Fragment>
      {(sideabarDisplay || props.sidebarState) && (
        <div id="sidebar" className={classes.sdbr_wrp}>
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
                <a key={i} href="#">
                  <li className={`${classes.nav_menu_itm}`}>
                    <Icon
                      style={SidebarIconStyle}
                      baseClassName="material-icons-outlined"
                    >
                      {el.icon}
                    </Icon>
                    <span> {el.title}</span>
                  </li>
                </a>
              ))}

              {/*Header List one*/}

              <li className={classes.nav_header}>
                <span>APPS & PAGES</span>
              </li>

              {sidebarData.data_two.map((el, i) => (
                <a key={i} href="#">
                  <li key={i} className={classes.nav_menu_itm}>
                    <Icon
                      style={SidebarIconStyle}
                      baseClassName="material-icons-outlined"
                    >
                      {el.icon}
                    </Icon>
                    <span> {el.title}</span>
                  </li>
                </a>
              ))}

              {/*Header List two*/}

              <li className={classes.nav_header}>
                <span>USER INTERFACE</span>
              </li>

              {sidebarData.data_three.map((el, i) => (
                <a key={i} href="#">
                  <li key={i} className={classes.nav_menu_itm}>
                    <Icon
                      style={SidebarIconStyle}
                      baseClassName="material-icons-outlined"
                    >
                      {el.icon}
                    </Icon>
                    <span> {el.title}</span>
                  </li>
                </a>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </Fragment>
  );
};

export default Sidebar;

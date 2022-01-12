import React from "react";
import classes from "./Sidebar.module.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
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
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>Dashboard</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>eCommerce</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>Analytics</span>
          </li>

          <li className={classes.nav_header}>
            <span>APPS & PAGES</span>
          </li>

          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>Dashboard</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>eCommerce</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>Analytics</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>Dashboard</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>eCommerce</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>Analytics</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>Dashboard</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>eCommerce</span>
          </li>

          <li className={classes.nav_header}>
            <span>USER INTERFACE</span>
          </li>

          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>Dashboard</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>eCommerce</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>Analytics</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>Dashboard</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>eCommerce</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>Analytics</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>Dashboard</span>
          </li>
          <li className={classes.nav_menu_itm}>
            <HomeOutlinedIcon />
            <span>eCommerce</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

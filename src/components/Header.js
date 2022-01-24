import React from "react";
import classes from "./Header.module.css";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import BookmarkAddedOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

import DarkModeOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import { IconButton } from "@material-ui/core";
import Card from "./UI/Card";

const Header = () => {
  return (
    <Card style={{ marginBottom: "22px" }}>
      <nav className={classes.header_wrp}>
        <div className="left_icons">
          <IconButton style={{ width: 48, height: 48 }}>
            <CalendarTodayOutlinedIcon style={{ fontSize: 25 }} />
          </IconButton>

          <IconButton style={{ width: 48, height: 48 }}>
            <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 25 }} />
          </IconButton>

          <IconButton style={{ width: 48, height: 48 }}>
            <MailOutlineOutlinedIcon style={{ fontSize: 25 }} />
          </IconButton>
          <IconButton style={{ width: 48, height: 48 }}>
            <BookmarkAddedOutlinedIcon style={{ fontSize: 25 }} />
          </IconButton>
          <IconButton style={{ width: 48, height: 48 }}>
            <StarBorderOutlinedIcon style={{ fontSize: 25 }} />
          </IconButton>
        </div>

        <div className={classes.right_icons}>
          <div className="icon_group">
            <IconButton>
              <DarkModeOutlinedIcon style={{ fontSize: 25 }} />
            </IconButton>
            <IconButton>
              <SearchOutlinedIcon style={{ fontSize: 25 }} />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlinedIcon style={{ fontSize: 25 }} />
            </IconButton>
            <IconButton>
              <NotificationsNoneOutlinedIcon style={{ fontSize: 25 }} />
            </IconButton>
          </div>

          <div className={classes.profile_section}>
            <div className={classes.profile_txt}>
              <span className={classes.profile_name}>John Doe</span>
              <span className={classes.profile_desc}>admin</span>
            </div>
            <div className={classes.profile_pic}>
              <img
                src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png"
                alt="profile"
              />
            </div>
          </div>
        </div>
      </nav>
    </Card>
  );
};

export default Header;

import React from "react";
import classes from "./MainLayout.module.css";
import Header from "./Header";
import Card from "./UI/Card";

import { GroupOutlined } from "@material-ui/icons";
import { TrendingUpIcon } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Avatar } from "@material-ui/core/";
import { EmojiEvents } from "@material-ui/icons";

import StickyHeadTable from "./TableComponent";

import BannerImg1 from "../assets/images/banner_dec1.png";
import BannerImg2 from "../assets/images/banner_dec2.png";

//Charts
import LineDemo from "./Charts/lineChart";

const MainLayout = () => {
  return (
    <div className={classes.main_layout_wrp}>
      {/*Header*/}
      <Header />

      <div className={classes.main_layout_row_one}>
        <div className={classes.row_one_banner}>
          <img src={BannerImg1} className={classes.banner_one_image_one}></img>

          <img src={BannerImg2} className={classes.banner_one_image_two}></img>

          <span className={classes.banner_one_award}>
            <Avatar className={classes.banner_one_avatar}>
              <EmojiEvents className={classes.banner_one_emoji} />
            </Avatar>
          </span>

          <h2 style={{ marginTop: "125px" }}>Congratulations John,</h2>
          <p style={{ marginTop: "15px", fontSize: "14px" }}>
            You have done 57.6% more sales today. Check your new badge in your
            profile.
          </p>
        </div>

        <div className={classes.row_one_graph_one}>
          <LineDemo />
        </div>

        <div className={classes.row_one_graph_two}>
          <LineDemo />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

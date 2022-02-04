import React from "react";
import classes from "./MainLayout.module.css";
import Header from "./Header";
import Card from "./UI/Card";
import { Avatar } from "@material-ui/core/";
import { EmojiEvents } from "@material-ui/icons";

import BannerImg1 from "../assets/images/banner_dec1.png";
import BannerImg2 from "../assets/images/banner_dec2.png";

//Charts
import LineChart from "./Charts/LineChart";

//Data
const lineChartData = require("./data/lineChartData.json");

const MainLayout = () => {
  return (
    <div className={classes.main_layout_wrp}>
      {/*Header*/}
      <Header />

      <div className={classes.main_layout_row_one}>
        <div className={classes.row_one_banner}>
          <Card
            style={{
              height: "100%",
              padding: "0",
              background:
                "linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7))",
            }}
          >
            <img
              src={BannerImg1}
              className={classes.banner_one_image_one}
            ></img>

            <img
              src={BannerImg2}
              className={classes.banner_one_image_two}
            ></img>

            <span className={classes.banner_one_award}>
              <Avatar className={classes.banner_one_avatar}>
                <EmojiEvents className={classes.banner_one_emoji} />
              </Avatar>
            </span>

            <div className={classes.banner_body_text}>
              <h2>Congratulations John</h2>
              <p>
                You have done 57.6% more sales today. Check your new badge in
                your profile.
              </p>
            </div>
          </Card>
        </div>

        <div className={classes.row_one_graph_one}>
          <LineChart data={lineChartData[0]} />
        </div>

        <div className={classes.row_one_graph_two}>
          <LineChart data={lineChartData[1]} />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

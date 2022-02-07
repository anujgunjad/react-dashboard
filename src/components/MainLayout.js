import React from "react";
import classes from "./MainLayout.module.css";
import Header from "./Header";

import Card from "./UI/Card";
import Row from "./UI/Row";
import C50 from "./UI/containers/C50";

import { Avatar } from "@material-ui/core/";
import { EmojiEvents } from "@material-ui/icons";

import { Button } from "@mui/material";

import BannerImg1 from "../assets/images/banner_dec1.png";
import BannerImg2 from "../assets/images/banner_dec2.png";

//Charts
import LineChart from "./Charts/LineChart";
import MainChart from "./Charts/BarChart/MainChart";
import DougnutChart from "./Charts/DougnutChart/DougnutChart";
//Data
const lineChartData = require("./data/lineChartData.json");
const barChartData = require("./data/barChartData.json");
const dougnutChartData = require("./data/dougnutChart.json");

const MainLayout = () => {
  return (
    <div className={classes.main_layout_wrp}>
      {/*Header*/}
      <Header />

      {/*Row one*/}
      <Row>
        <C50 style={{ paddingRight: "1rem", height: "24.1rem" }}>
          <Card
            style={{
              height: "100%",
              padding: "0",
              background:
                "linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7))",
              color: "#fff",
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
        </C50>

        <div className={classes.row_one_graph_one}>
          <LineChart data={lineChartData[0]} />
        </div>

        <div className={classes.row_one_graph_two}>
          <LineChart data={lineChartData[1]} />
        </div>
      </Row>

      {/*Row two*/}
      <Row style={{ marginTop: "4rem" }}>
        <C50 style={{ paddingRight: "1rem" }}>
          <Card
            style={{
              padding: "3rem",
              background: "#fff",
            }}
          >
            <Row style={{ flexWrap: "wrap-reverse" }}>
              <C50 res style={{ paddingRight: "1rem" }}>
                <div className={classes.bargraph_container_text}>
                  <h2>2.7K</h2>
                  <p>Avg Sessions</p>

                  <h5>
                    <span className={classes.secondary_part}>+5.2% </span>
                    <span>vs Last 7 days</span>
                  </h5>
                </div>

                <Button
                  style={{
                    width: "100%",
                    height: "3rem",
                    backgroundColor: "#7367f0",
                    color: "#fff",
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    marginTop: "8rem",
                    marginBottom: "1.5rem",
                    textTransform: "none",
                  }}
                  variant="contained"
                >
                  View Details
                </Button>
              </C50>
              <C50
                res
                style={{
                  width: "50%",
                  paddingLeft: "1rem",
                }}
              >
                <p
                  style={{
                    fontSize: "1.4rem",
                    float: "right",
                    fontWeight: "bold",
                  }}
                >
                  Last 7 days
                </p>

                <div className={classes.line_chart} style={{ height: "21rem" }}>
                  <MainChart data={barChartData[0].chart_data} />
                </div>
              </C50>
            </Row>
          </Card>
        </C50>
        <C50 style={{ paddingLeft: "1rem" }}>
          <Card
            style={{
              height: "100%",
              padding: "3rem",
              background: "#fff",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <h2>Support Tacker</h2>
              <h3>Last 7 Days</h3>
            </div>

            <div style={{ display: "flex" }}>
              <h1 style={{ fontSize: "4rem" }}>163</h1>
              <div className={classes.doughnut_chart} style={{ flex: "1" }}>
                <DougnutChart data={dougnutChartData[0].chart_data} />
              </div>
            </div>
          </Card>
        </C50>
      </Row>
    </div>
  );
};

export default MainLayout;

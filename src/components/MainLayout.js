import React, { useState } from "react";
import classes from "./MainLayout.module.css";
import Header from "./Header";
import "react-calendar/dist/Calendar.css";
import Card from "./UI/Card";
import Row from "./UI/Row";
import C50 from "./UI/containers/C50";

import Grid from "@material-ui/core/Grid";
import { Avatar } from "@material-ui/core/";
import { EmojiEvents } from "@material-ui/icons";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { Button } from "@mui/material";

import BannerImg1 from "../assets/images/banner_dec1.png";
import BannerImg2 from "../assets/images/banner_dec2.png";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import StickyHeadTable from "./UI/Table";
//Charts
import LineChart from "./Charts/LineChart";
import MainChart from "./Charts/BarChart/MainChart";
import DougnutChart from "./Charts/DougnutChart/DougnutChart";
import RaderChart from "./Charts/RadarChart/RaderChart";

import VerticalLinearStepper from "./UI/StepperComp";
//Data
const lineChartData = require("./data/lineChartData.json");
const barChartData = require("./data/barChartData.json");
const dougnutChartData = require("./data/dougnutChart.json");

const MainLayout = (props) => {
  const [value, onChange] = useState(new Date());
  return (
    <div className={classes.main_layout_wrp}>
      {/*Header*/}
      <Header sidebarHandle={props.sideBarTogglerHandle} />

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
      <Row style={{ marginTop: "2rem" }}>
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

                <div className={classes.bargraph_chart_container}>
                  <MainChart data={barChartData[0].chart_data} />
                </div>
              </C50>
            </Row>
            <div className="divider"></div>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <p className={classes.progress_heading}>Goal: $100000 </p>
                <LinearProgress
                  style={{ height: "0.8rem", borderRadius: "2rem" }}
                  value={50}
                  variant="determinate"
                  title="test"
                />
              </Grid>
              <Grid item xs={6}>
                <p className={classes.progress_heading}>Users: 100.0k </p>
                <LinearProgress
                  style={{ height: "0.8rem", borderRadius: "2rem" }}
                  color="secondary"
                  value={50}
                  variant="determinate"
                />
              </Grid>
              <Grid item xs={6}>
                <p className={classes.progress_heading}>Retention: 90% </p>
                <LinearProgress
                  style={{ height: "0.8rem", borderRadius: "2rem" }}
                  value={50}
                  variant="determinate"
                  title="test"
                />
              </Grid>
              <Grid item xs={6}>
                <p className={classes.progress_heading}>Duration: 1yr </p>
                <LinearProgress
                  style={{ height: "0.8rem", borderRadius: "2rem" }}
                  color="secondary"
                  value={50}
                  variant="determinate"
                />
              </Grid>
            </Grid>
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
              <h2>Support Tracker</h2>
              <h3>Last 7 Days</h3>
            </div>

            <div style={{ display: "flex" }}>
              <h1 style={{ fontSize: "4rem" }}>
                163
                <span
                  style={{
                    display: "block",
                    textAlign: "center",
                    marginTop: "-1.2rem",
                    fontSize: "1.3rem",
                  }}
                >
                  Tickets
                </span>
              </h1>
              <div className={classes.doughnut_chart} style={{ flex: "1" }}>
                <DougnutChart data={dougnutChartData[0].chart_data} />
              </div>
            </div>

            <div className={classes.tracket_data_tbl}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "1.5rem" }}>New Tickets</p>
                <h3 style={{ fontSize: "3rem" }}>29</h3>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "1.5rem" }}>Open Tickets </p>
                <h3 style={{ fontSize: "3rem" }}>63</h3>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "1.5rem" }}>Response Time </p>
                <h3 style={{ fontSize: "3rem" }}> 1d</h3>
              </div>
            </div>
          </Card>
        </C50>
      </Row>

      {/*Row three*/}
      <Row>
        <div
          className={classes.row_three_container_one}
          style={{ paddingRight: "1rem", paddingTop: "2rem" }}
        >
          <Card
            style={{
              padding: "2rem",
              background: "#fff",
            }}
          >
            <div>
              <h2>User Timeline</h2>
            </div>
            <CardMedia
              component="img"
              height="225"
              image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3489b985426981.5d7b4871b7b9d.gif"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                style={{ fontSize: "2rem" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                User Information
              </Typography>
              <Typography
                style={{ fontSize: "1.5rem" }}
                variant="body2"
                color="text.secondary"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                style={{
                  width: "2rem",
                  height: "3rem",
                  backgroundColor: "#7367f0",
                  color: "#fff",
                  fontSize: "1.4rem",
                  fontWeight: "bold",

                  textTransform: "none",
                }}
                size="small"
              >
                Share
              </Button>
            </CardActions>
          </Card>
        </div>
        <div
          className={classes.row_three_container_two}
          style={{ padding: "2rem 1rem 0rem 1rem" }}
        >
          <Card
            style={{
              padding: "3rem",
              background: "#fff",
              height: "44rem",
            }}
          >
            <RaderChart />
          </Card>
        </div>
        <div
          className={classes.row_three_container_three}
          style={{ padding: "2rem 0rem 0rem 1rem" }}
        >
          <Card
            style={{
              padding: "3rem",
              background: "#fff",
              height: "44rem",
            }}
          >
            <VerticalLinearStepper />
          </Card>
        </div>
      </Row>
      <Row style={{ marginTop: "2rem" }}>
        <StickyHeadTable />
      </Row>
    </div>
  );
};

export default MainLayout;

import React from "react";
import classes from "./index.module.css";
import Card from "../../UI/Card";
import { Avatar } from "@material-ui/core";
import MainChart from "./MainChart";
import Icon from "@mui/material/Icon";

const LineChart = (props) => {
  return (
    <Card style={{ height: "24.1rem" }}>
      <div className={classes.chart_container_text_body}>
        <Avatar
          style={{
            height: "5rem",
            width: "5rem",
            backgroundColor: props.data.text_content.avatar_bg,
          }}
        >
          <Icon
            className={classes.chart_user_emoji}
            style={{ color: props.data.chart_data.datasets.borderColor }}
            baseClassName="material-icons-outlined"
          >
            {props.data.text_content.icon}
          </Icon>
        </Avatar>
        <span className={classes.chart_user_head}>
          {props.data.text_content.heading}
        </span>
        <span className={classes.chart_user_text} style={{ display: "block" }}>
          {props.data.text_content.sub_heading}
        </span>
      </div>
      <div className={classes.chart_container_graph_body}>
        <MainChart data={props.data.chart_data} />
      </div>
    </Card>
  );
};

export default LineChart;

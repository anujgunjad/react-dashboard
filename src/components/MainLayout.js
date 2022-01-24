import React from "react";
import classes from "./MainLayout.module.css";

import Card from "./UI/Card";
import { Button } from "@material-ui/core";
import Header from "./Header";
import StickyHeadTable from "./TableComponent";
import SpiderChart from "./UI/SpiderChart";
import { Avatar } from "@material-ui/core/";
import { EmojiEvents } from "@material-ui/icons";
import { GroupOutlined } from "@material-ui/icons";
import BannerImg1 from "../assets/images/banner_dec1.png";
import BannerImg2 from "../assets/images/banner_dec2.png";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { width } from "@mui/system";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 4098,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 6800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data_pie = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const MainLayout = () => {
  return (
    <div className={classes.main_layout_wrp}>
      {/*Header*/}
      <Header />

      <div className={classes.card_wrp}>
        <div className={classes.first_card}>
          <img
            src={BannerImg1}
            style={{ width: "200px", top: 0, float: "left" }}
          ></img>

          <img
            src={BannerImg2}
            style={{ width: "175px", float: "right" }}
          ></img>
          <span className={classes.first_card_award}>
            <Avatar
              style={{
                backgroundColor: "#7367F0",
                width: "70px",
                height: "70px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.2)",
              }}
            >
              <EmojiEvents style={{ fontSize: "35px" }} />
            </Avatar>
          </span>

          <h2 style={{ marginTop: "125px" }}>Congratulations John,</h2>
          <p style={{ marginTop: "15px", fontSize: "14px" }}>
            You have done 57.6% more sales today. Check your new badge in your
            profile.
          </p>
        </div>

        <div className={classes.second_card}>
          <Card
            style={{
              height: "222px",
              backgroundColor: "#fffff",
            }}
          >
            <div
              className="second_card_body"
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              <Avatar
                style={{
                  backgroundColor: "#EEEDFD",
                  width: "45px",
                  height: "45px",
                  marginBottom: "10px",
                }}
              >
                <GroupOutlined style={{ color: "#8884d8" }} />
              </Avatar>
              <h3
                style={{
                  fontSize: "22px",
                  color: "#000",
                  fontWeight: "bolder",
                }}
              >
                <b>92.6k</b>
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "grey",
                }}
              >
                Subscribers Gained
              </p>
            </div>
            <ResponsiveContainer width="100%" height="60%">
              <LineChart width={300} height={100} data={data}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
          <Card
            style={{
              height: "222px",
              backgroundColor: "#fffff",
            }}
          >
            <div
              className="second_card_body"
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              <Avatar
                style={{
                  backgroundColor: "#FFF3E8",
                  width: "45px",
                  height: "45px",
                  marginBottom: "10px",
                }}
              >
                <GroupOutlined style={{ color: "#FF9F43" }} />
              </Avatar>
              <h3
                style={{
                  fontSize: "22px",
                  color: "#000",
                  fontWeight: "bolder",
                }}
              >
                <b>32k</b>
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "grey",
                }}
              >
                Subscribers Gained
              </p>
            </div>
            <ResponsiveContainer width="100%" height="60%">
              <LineChart width={300} height={100} data={data}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#FF9F43"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>

      <div className={classes.card_wrp2}>
        <Card
          style={{
            height: "322px",
            backgroundColor: "#fffff",
          }}
        >
          <div className={classes.card_wrp2_containers}>
            <div className="wrp2_container_one">
              <h3>2.7k</h3>
              <p>Avg Sessions</p>

              <p>+5.2%vs last 7 days</p>

              <Button variant="contained" href="#contained-buttons">
                Link
              </Button>
            </div>

            <BarChart width={250} height={240} data={data}>
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </div>
        </Card>
        <Card
          style={{
            height: "322px",
            backgroundColor: "#fffff",
          }}
        >
          <ResponsiveContainer>
            <PieChart width={400} height={400}>
              <Pie
                data={data_pie}
                cx={280}
                cy={160}
                innerRadius={80}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data_pie.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className={classes.card_wrp2}>
        <Card
          style={{
            height: "322px",
            backgroundColor: "#fffff",
          }}
        ></Card>
        <Card
          style={{
            height: "322px",
            backgroundColor: "#fffff",
          }}
        >
          <SpiderChart />
        </Card>
        <Card
          style={{
            height: "322px",
            backgroundColor: "#fffff",
          }}
        ></Card>
      </div>

      <div className={classes.card_wrp2}>
        <Card>
          <StickyHeadTable />
        </Card>
      </div>
    </div>
  );
};

export default MainLayout;

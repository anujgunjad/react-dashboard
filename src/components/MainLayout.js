import React from "react";
import classes from "./MainLayout.module.css";
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

import StickyHeadTable from "./TableComponent";
import SpiderChart from "./UI/SpiderChart";
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

      <div className={classes.card_wrp}>
        <div className={classes.first_card}>
          <p>Hello</p>
        </div>

        <div className={classes.second_card}>
          <Card
            style={{
              height: "222px",
              backgroundColor: "#fffff",
            }}
          >
            <p style={{ marginBottom: "40px" }}>Hello</p>
            <ResponsiveContainer width="100%" height="100%">
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
            <p style={{ marginBottom: "40px" }}>Hello</p>
            <ResponsiveContainer width="100%" height="100%">
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
        </div>
      </div>

      <div className={classes.card_wrp2}>
        <Card
          style={{
            height: "322px",
            backgroundColor: "#fffff",
          }}
        >
          <ResponsiveContainer width="50%" height="100%">
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
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
                cx={580}
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

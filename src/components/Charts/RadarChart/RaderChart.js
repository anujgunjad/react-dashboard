import React, { Fragment } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const RaderChart = (props) => {
  const data = {
    labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
    datasets: [
      {
        label: "Student A",
        backgroundColor: "#7367f0",
        data: [65, 75, 70, 80, 60, 80],
      },
      {
        label: "Student B",
        backgroundColor: "#ff9f43",
        data: [54, 65, 60, 70, 70, 75],
      },
    ],
  };

  const options = {
    cutout: 70,
    elements: {
      point: {
        radius: 4,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    maintainAspectRatio: false,

    animation: {
      duration: 500,
      easing: "linear",
      delay: 0,
      loop: false,
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
          drawTicks: false,
        },
      },
    },
  };

  return (
    <Fragment>
      <Chart type="radar" data={data} options={options} />
    </Fragment>
  );
};

export default RaderChart;

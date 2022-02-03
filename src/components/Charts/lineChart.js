import React, { Component, Fragment } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart, Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],

    datasets: [
      {
        pointStyle: "circle",
        borderColor: "#7367f0",
        data: [100, 116, 99, 141, 115],
        lineTension: 0.4,
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 4,
      },
    },
    plugins: {
      legend: {
        display: false,
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
      <Line data={data} options={options} />
    </Fragment>
  );
};

export default LineChart;

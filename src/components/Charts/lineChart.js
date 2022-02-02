import React, { Component, Fragment } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default class LineChart extends Component {
  data = {
    labels: ["January", "February", "March", "April", "May", "June"],

    datasets: [
      {
        borderColor: "yellow",
        data: [203, 156, 99, 251, 305, 0],
        lineTension: 0.4,
      },
    ],
  };

  options = {
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,

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
  render() {
    return (
      <Fragment>
        <Line data={this.data} options={this.options} />
      </Fragment>
    );
  }
}

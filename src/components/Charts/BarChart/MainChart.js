import React, { Fragment } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const MainChart = (props) => {
  const data = {
    labels: props.data.labels,

    datasets: [
      {
        backgroundColor: [
          "#EEF2F8",
          "#EEF2F8",
          props.data.datasets.borderColor,
        ],
        data: props.data.datasets.data,
        barThickness: "20",
        borderRadius: "9",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRation: false,

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
      <Chart type={props.data.type} data={data} options={options} />
    </Fragment>
  );
};

export default MainChart;

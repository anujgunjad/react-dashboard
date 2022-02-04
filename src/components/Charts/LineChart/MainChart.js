import React, { Fragment } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const MainChart = (props) => {
  const data = {
    labels: props.data.labels,

    datasets: [
      {
        pointStyle: "circle",
        borderColor: props.data.datasets.borderColor,
        data: props.data.datasets.data,
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
      <Chart type={props.data.type} data={data} options={options} />
    </Fragment>
  );
};

export default MainChart;

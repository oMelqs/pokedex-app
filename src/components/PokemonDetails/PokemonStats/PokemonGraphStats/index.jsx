import React from "react";
import ReactApexChart from "react-apexcharts";

import "./style.css";

const PokemonGraphStats = (statsData) => {
  const chartData = {
    series: [
      {
        name: "Total",
        data: [
          statsData.stats[0]?.base_stat,
          statsData.stats[1]?.base_stat,
          statsData.stats[2]?.base_stat,
          statsData.stats[3]?.base_stat,
          statsData.stats[4]?.base_stat,
          statsData.stats[5]?.base_stat,
        ],
      },
    ],
    options: {
      xaxis: {
        categories: [
          "HP",
          "ATTACK",
          "DEFENSE",
          "SPECIAL-ATTACK",
          "SPECIAL-DEFENSE",
          "SPEED",
        ],
      },
    },
  };

  return (
    <ReactApexChart
      className="pokemon-graph"
      options={chartData.options}
      series={chartData.series}
      type="radar"
      height={380}
    />
  );
};

export default PokemonGraphStats;

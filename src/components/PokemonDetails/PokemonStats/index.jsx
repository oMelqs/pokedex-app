import React from "react";
import PokemonGraphStats from "./PokemonGraphStats";
import "./style.css";

const PokemonStats = ({ stats }) => {
  return (
    <div className="pokemon-stats">
      <div className="pokemon-stats-container">
        <div
          title={stats[0].stat.name}
          className="pokemon-stat"
          key={stats[0].stat.name}
        >
          <div className="pokemon-stat-value">
            <small>{stats[0].base_stat}</small>
          </div>
          <div className="pokemon-stat-name">
            <h3>{stats[0].stat.name.toUpperCase()}</h3>
          </div>
        </div>

        <div
          title={stats[1].stat.name}
          className="pokemon-stat"
          key={stats[1].stat.name}
        >
          <div className="pokemon-stat-value">
            <small>{stats[1].base_stat}</small>
          </div>
          <div className="pokemon-stat-name">
            <h3>{stats[1].stat.name.toUpperCase()}</h3>
          </div>
        </div>

        <div
          title={stats[2].stat.name}
          className="pokemon-stat"
          key={stats[2].stat.name}
        >
          <div className="pokemon-stat-value">
            <small>{stats[2].base_stat}</small>
          </div>
          <div className="pokemon-stat-name">
            <h3>{stats[2].stat.name.toUpperCase()}</h3>
          </div>
        </div>
      </div>

      <div className="pokemon-stats-container">
        <PokemonGraphStats stats={stats} />
      </div>

      <div className="pokemon-stats-container">
        <div
          title={stats[3].stat.name}
          className="pokemon-stat"
          key={stats[3].stat.name}
        >
          <div className="pokemon-stat-value">
            <small>{stats[3].base_stat}</small>
          </div>
          <div className="pokemon-stat-name">
            <h3>{stats[3].stat.name.toUpperCase()}</h3>
          </div>
        </div>

        <div
          title={stats[4].stat.name}
          className="pokemon-stat"
          key={stats[4].stat.name}
        >
          <div className="pokemon-stat-value">
            <small>{stats[4].base_stat}</small>
          </div>
          <div className="pokemon-stat-name">
            <h3>{stats[4].stat.name.toUpperCase()}</h3>
          </div>
        </div>

        <div
          title={stats[5].stat.name}
          className="pokemon-stat"
          key={stats[5].stat.name}
        >
          <div className="pokemon-stat-value">
            <small>{stats[5].base_stat}</small>
          </div>
          <div className="pokemon-stat-name">
            <h3>{stats[5].stat.name.toUpperCase()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;

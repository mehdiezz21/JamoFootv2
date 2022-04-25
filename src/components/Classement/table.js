import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Table = ({ competitions, filter, id }) => {
  return (
    <div className="container my-5">
      {id === '2015' ? <Link to={`/map`}>Afficher la carte</Link> : null}
      <table className="table able-striped">
        <thead>
          <tr>
            <th scope="col">
              Position <button onClick={() => filter("position")} className=' btn2 btn-info'>sort</button>
            </th>
            <th scope="col">
              Team <button onClick={() => filter("team.name")} className=' btn2 btn-info'>sort</button>
            </th>
            <th scope="col">
              Match joué{" "}
              <button onClick={() => filter("playedGames")} className=' btn2 btn-info'>sort</button>{" "}
            </th>
            <th scope="col">
              Victoire <button onClick={() => filter("won")} className=' btn2 btn-info'>sort</button>
            </th>
            <th scope="col">
              Defaite <button onClick={() => filter("lost")} className=' btn2 btn-info'>sort</button>
            </th>
            <th scope="col">
              Nul <button onClick={() => filter("draw")} className=' btn2 btn-info'>sort</button>
            </th>
            <th scope="col">
              Buts inscrits{" "}
              <button onClick={() => filter("goalsFor")} className=' btn2 btn-info'>sort</button>
            </th>
            <th scope="col">
              Buts encaissés{" "}
              <button onClick={() => filter("goalsAgainst")} className=' btn2 btn-info'>sort</button>
            </th>
            <th scope="col">
              Différence de But{" "}
              <button onClick={() => filter("goalDifference")} className=' btn2 btn-info'>sort</button>
            </th>
            <th scope="col">
              Point <button onClick={() => filter("points")} className=' btn2 btn-info'>sort</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {competitions.map((result) => (
            <tr>
              <th scope="row">{result.position}</th>
              <td>
                <Link to={`/team/${result.team.id}`}>{result.team.name}</Link>
              </td>
              <td>{result.playedGames}</td>
              <td>{result.won}</td>
              <td>{result.lost}</td>
              <td>{result.draw}</td>
              <td>{result.goalsFor}</td>
              <td>{result.goalsAgainst}</td>
              <td>{result.goalDifference}</td>
              <td>{result.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

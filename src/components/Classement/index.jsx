import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../Navbar";
import {myApi} from "../../api/api";

function Classement() {

    const { id } = useParams();

    const [competitions, setCompetitions] = useState();
    const [standings, setStandings] = useState([]);
    const [loading, setLoading] = useState(true)

  
    const getCompetitions = async () => {
      const data = await myApi.getStandingsFromCompetition(id);
      setCompetitions(data ?? []);
      setLoading(false);
    }
  
    useEffect(() => {
        getCompetitions();
    }, [])

    useEffect(() => {
        setStandings(competitions);
      }, [competitions])

    if (loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    }

    const table = competitions.standings[0].table

    console.log(table)

    return (
        <div>
            <Navbar />
            <div className="container my-5">


                <table className="table able-striped">
                    <thead>
                        <tr>
                            <th scope="col">Position</th>
                            <th scope="col">Team</th>
                            <th scope="col">Match joué</th>
                            <th scope="col">Victoire</th>
                            <th scope="col">Defaite</th>
                            <th scope="col">Nul</th>
                            <th scope='col'>Buts inscrits</th>
                            <th scope='col'>Buts encaissés</th>
                            <th scope='col'>Différence de But</th>
                            <th scope="col">Point</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map(result => (
                            <tr>
                                <th scope="row">{result.position}</th>
                                <td>{result.team.name}</td>
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
        </div>
    );
}
  
export default Classement;
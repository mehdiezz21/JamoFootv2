import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {myApi} from "../../api/api";

function Player() {
    const { id } =useParams();

    const [player, setPlayer] = useState();
    const [loading, setLoading] = useState(true);
  
    const getPlayer = async () => {
      const data = await myApi.getMatchesFromPlayer(id);
      setPlayer(data ?? []);
      setLoading(false);
    }
  
    useEffect(() => {
        getPlayer();
    }, [])
  
    if (loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    }

    const lastMatch = (matchs) => {
        const arrayMatch = []
        for (let i = 0; i < 10; i++)
            arrayMatch.push(matchs[i])
        return(
         <>
            { arrayMatch.map(matchs =>
                <>
                <h5>{matchs?.competition?.name}</h5>
                <div className="d-flex">
                    <Link to={`/team/${matchs?.homeTeam?.id}`}>{matchs?.homeTeam?.name}</Link>
                    <p>- {matchs?.score?.fullTime?.homeTeam} vs
                        {matchs?.score?.fullTime?.awayTeam} - </p>
                    <Link to={`/team/${matchs?.awayTeam?.id}`}>
                        {matchs?.awayTeam?.name}
                    </Link>
                </div>
                </>
            )
            }
        </>
        )
    }
  
    return (
        <div>
            <h1>{player?.player?.name}</h1>
            <div className="row">
                <div className="col-2">
                    <p>Née: {player?.player?.dateOfBirth}</p>
                </div>
                <div className="col">
                    <p>nationalité: {player?.player?.nationality}</p>
                </div>
                <div className="col">
                    <p>Poste: {player?.player?.position}</p>
                </div>
                <div>
                    <h5 className="margin-bottom-2">Derniers Matchs</h5>
                    <br />
                    {lastMatch(player?.matches)}
                </div>
            </div>
      </div>
    );
}

export default Player;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {myApi} from "../../api/api";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import useBookmarks from "./useBookmarks";

function Team() {
    const { id } =useParams();

    const [team, setTeam] = useState();
    const [teamMatch, setTeamMatch] = useState();
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(0);
    const [usersFavoris, setFavorisState] = useState();
    const [bookmarks, toggleBookmark] = useBookmarks();

    useEffect(() => {
        setFavorisState(bookmarks)}, []
    )

    const array = [].concat(bookmarks.map((book) => book.id === team?.id))
    const isBookmarked = array.includes(true);
  
    const getEquipe = async () => {
      const data = await myApi.getTeam(id);
      const dataMatch = await myApi.getMatchesFromTeam(id);
      setTeam(data ?? []);
      setTeamMatch(dataMatch ?? []);
      setLoading(false);
    }
  
    useEffect(() => {
      getEquipe();
    }, [])

    const filterPlayer = (player = [], position) => {
        // console.log(player)
        return(
            player?.filter(joueur => joueur.position === position).map( joueur => (
                <th>
                    <Link key={joueur.id} to={`/team/player/${joueur.id}`}>
                            <p>
                                {joueur.name} 
                            </p>
                    </Link>
                </th>
            ))
        )
    }
  
    if (loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    }

    const allPlayers = () => {
        return(
        <>
            <tr>
                <th>Gardien</th>
                {filterPlayer(team?.squad, 'Goalkeeper')}
            </tr>
            <tr>
                <th>Défenseur</th>
                {filterPlayer(team?.squad, 'Defence')}
            </tr>
            <tr>
                <th>Milieu</th>
                {filterPlayer(team?.squad, 'Midfield')}
            </tr>
            <tr>
                <th>Attaquant</th>
                {filterPlayer(team?.squad, 'Attacker')}
                {filterPlayer(team?.squad, 'Offence')}
            </tr>
        </>
        )
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
            <h1>Team</h1>
            <div className="row">
                <div className="col">
                    <h2>{team?.name}</h2>
                </div>
                <div className="col-auto">
                    <img src={team?.crestUrl} alt=''/>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <p>Fondé en {team?.founded}</p>
                </div>
                <div className="col-2">
                    <p>Téléphone: {team?.phone}</p>
                </div>
                <div className="col-2">
                    <p>Email: {team?.email}</p>
                </div>
                <div className="col">
                    <p>Compétitions actives: {team?.activeCompetitions?.map(act =>
                    <li key={act.name}>{act.name}</li>
                    )}</p>
                </div>
                <div className="col-auto">
                    <button onClick={toggleBookmark({id: team?.id, name: team?.name})}>
                        {isBookmarked ? "Retirer des favoris" : "Ajouter aux favoris"}
                    </button>
                </div>
            </div>
            <Paper square>
                <Tabs
                value={value}
                textColor="primary"
                indicatorColor="primary"
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                >
                <Tab label="Joueur" />
                <Tab label="Résultat" />
                </Tabs>
                {value === 0 ? allPlayers() : lastMatch(teamMatch.matches)}
            </Paper>
      </div>
    );
}

export default Team;

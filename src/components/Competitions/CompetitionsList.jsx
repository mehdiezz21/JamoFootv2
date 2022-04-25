import React, {useContext, useEffect, useState} from 'react';
import CompetitionItem from "./CompetitionItem";
import {CompetitionsContext} from "../../states/CompetitionsProvider";

const CompetitionsList = () => {
  const ligue = [
    { title: 'Ligue 1', id: 2015},
    { title: 'Premiere League', id: 2021},
    { title: 'Primera Division', id: 2014},
    { title: 'Bundesliga', id: 2002},
    { title: 'Serie A', id: 2019},
    { title: 'Eredivisie', id: 2003},
    { title: 'Primeira Liga', id: 2017},
]
  const [state] = useContext(CompetitionsContext);
  const [competitions, setCompetitions] = useState(ligue);
  const [filteredCompetitions, setFilteredCompetitions] = useState([]);

  useEffect(() => {
    if (state.search.trim().length > 0) {
      setFilteredCompetitions(
        competitions.filter((competition) => competition.name.toLowerCase().includes(state.search.toLowerCase()))
      )
    } else {
      setFilteredCompetitions(competitions);
    }
  }, [state.search, competitions])

  return (
    <div className="competitions-list">
      {filteredCompetitions.map((competition) => (
        <CompetitionItem key={competition.id} competition={competition}/>
      ))}
    </div>
  );
};

export default CompetitionsList;
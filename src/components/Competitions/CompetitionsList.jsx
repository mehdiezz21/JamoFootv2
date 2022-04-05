import React, {useContext, useEffect, useState} from 'react';
import CompetitionItem from "./CompetitionItem";
import {myApi} from "../../api/api";
import {CompetitionsContext} from "../../states/CompetitionsProvider";

const CompetitionsList = () => {
  const [state] = useContext(CompetitionsContext);
  const [competitions, setCompetitions] = useState([]);
  const [filteredCompetitions, setFilteredCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCompetitions = async () => {
    const data = await myApi.fetchCompetitions(2081);
    setCompetitions(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    getCompetitions();
  }, [])

  useEffect(() => {
    if (state.search.trim().length > 0) {
      setFilteredCompetitions(
        competitions.filter((competition) => competition.name.toLowerCase().includes(state.search.toLowerCase()))
      )
    } else {
      setFilteredCompetitions(competitions);
    }
  }, [state.search, competitions])

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  console.log(filteredCompetitions)

  return (
    <div className="competitions-list">
      {filteredCompetitions.map((competition) => (
        <CompetitionItem key={competition.id} competition={competition}/>
      ))}
    </div>
  );
};

export default CompetitionsList;
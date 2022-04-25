import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const CompetitionItem = ({ competition }) => {


  return (
    <div className="card competition-item" style={{width: '18rem'}}>
        <div className="card-body">
            <Link to={`/team/${competition.value}`}><h5 className="card-title">{competition.name}</h5></Link>
        </div>
    </div>
  );
};

export default CompetitionItem;
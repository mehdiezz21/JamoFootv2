import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const CompetitionItem = ({ competition }) => {
  return (
    <div className="card competition-item" style={{width: '18rem'}}>
        <div className="card-body">
            <Link to={`/classement/${competition.id}`}><h5 className="card-title">{competition.title}</h5></Link>
        </div>
    </div>
  );
};

export default CompetitionItem;
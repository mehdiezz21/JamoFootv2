import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const CountryItem = ({ country }) => {


  return (
    <div className="card country-item" style={{width: '18rem'}}>
        <div className="card-body">
            <Link to="/test"><h5 className="card-title">{country.name}</h5></Link>
        </div>
    </div>
  );
};

export default CountryItem;
import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import {myApi} from "../../api/api";
import Table from './table';

function Classement() {

    const { id } = useParams();

    const [competitions, setCompetitions] = useState();
    const [isFilter, setFilter] = useState();
    const [activeFilter, setActiveFilter] = useState(false);
    const [loading, setLoading] = useState(true)

  
    const getCompetitions = async () => {
      const data = await myApi.getStandingsFromCompetition(id);
      setCompetitions(data.standings[0].table ?? []);
      setLoading(false);
    }
  
    useEffect(() => {
        isFilter ? setCompetitions(isFilter) : getCompetitions();
    }, [isFilter])


    if (loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    }

    const filter = (obj = '') =>  {
        if (activeFilter) {
            setFilter(competitions.sort((a, b) => b[obj] > a[obj] ? 1 : -1))
            setActiveFilter(false)

        } else {
            setFilter(competitions.sort((a, b) => a[obj] > b[obj] ? 1 : -1))
            setActiveFilter(true)
        }
    }

    console.log(id)
    return (
        <div>
            <Table competitions={competitions} filter={filter} id={id}></Table>
        </div>
    );
}
  
export default Classement;
import React, {useContext} from 'react';
import {SET_SEARCH} from "../states/competitionReducer";
import {CompetitionsContext} from "../states/CompetitionsProvider";

const SearchBar = ({ placeholder }) => {
  const [state, dispatch] = useContext(CompetitionsContext);

  const handleChange = (event) => {
    dispatch({
      type: SET_SEARCH,
      payload: event.target.value,
    })
  }

  return (
    <>
        <input
          type="search"
          className="form-control mx-5 rounded"
          placeholder={placeholder}
          value={state.search}
          onChange={handleChange}
        />

      {/* <div>Vous recherchez : {state.search}</div> */}
    </>
  );
};

export default SearchBar;
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
      <div className="input-group my-5">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={state.search}
          onChange={handleChange}
        />
      </div>

      {/* <div>Vous recherchez : {state.search}</div> */}
    </>
  );
};

export default SearchBar;
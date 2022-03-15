import React, {createContext, useReducer} from 'react';
import {competitionsReducer, initialState} from "./competitionReducer";

export const CompetitionsContext = createContext(null);

const CompetitionsProvider = ({children}) => {
  const [state, dispatch] = useReducer(competitionsReducer, initialState);

  return (
    <CompetitionsContext.Provider value={[state, dispatch]}>
      {children}
    </CompetitionsContext.Provider>
  );
};

export default CompetitionsProvider;
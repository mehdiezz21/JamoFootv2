import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Competitions from './components/Competitions';
import { Routes } from 'react-router-dom';
import Team from './components/Teams';
import Player from './components/Teams/player';
import Favoris from './components/Teams/Favoris';
import Map from './components/Teams/map';
import Test from './components/Teams/test';

import styles from './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/map" element={<Map />}/>
        <Route path="/" element={<Competitions />} className={styles}/>
        <Route path="/team/:id" element={<Team />} className={styles}/>
        <Route path="/team/player/:id" element={<Player />} className={styles}/>
        <Route path="/team/favoris" element={<Favoris />} className={styles}/>
        <Route path="/test" element={<Test />} className={styles}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

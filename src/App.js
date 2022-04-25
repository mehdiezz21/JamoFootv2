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
import Navbar from "./components/Navbar";

import styles from './App.css';
import Classement from './components/Classement';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/map" element={<Map />}/>
          <Route path="/" element={<Competitions />} className={styles}/>
          <Route path="/team/:id" element={<Team />} className={styles}/>
          <Route path="/team/player/:id" element={<Player />} className={styles}/>
          <Route path="/team/favoris" element={<Favoris />} className={styles}/>
          <Route path="/classement/:id" element={<Classement />} className={styles} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Competitions from './components/Competitions';
import Test from './components/Teams';
import { Routes } from 'react-router-dom';
import Classement from './components/Classement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Competitions />}/>
        <Route path="/test" element={<Test />}/>
        <Route path="/Classement/:id" element={<Classement />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

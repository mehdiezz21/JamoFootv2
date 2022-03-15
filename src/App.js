import './App.css';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Competitions from './components/Competitions';
import Test from './components/Teams';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Competitions />}/>
        <Route path="/test" element={<Test />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

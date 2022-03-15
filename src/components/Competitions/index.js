import CompetitionsProvider from "../../states/CompetitionsProvider";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import CompetitionsList from "./CompetitionsList";


function Competitions() {
  return (
    <div>
      <CompetitionsProvider>
        <Navbar />
        <div className="container">
          <SearchBar placeholder="Rechercher par nom..." />
          <CompetitionsList />
        </div>
      </CompetitionsProvider>
    </div>
  );
}

export default Competitions;

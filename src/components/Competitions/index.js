import CompetitionsProvider from "../../states/CompetitionsProvider";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar.jsx";
import CompetitionsList from "./CompetitionsList";


function Competitions() {
  return (
    <div>
      <CompetitionsProvider>
        <Navbar />
        <div className="container">
          <form className="d-flex my-2 mx-auto">
            <SearchBar />
          </form>
          <CompetitionsList />
        </div>
      </CompetitionsProvider>
    </div>
  );
}

export default Competitions;

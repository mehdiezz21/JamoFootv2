import CompetitionsProvider from "../../states/CompetitionsProvider";
import Navbar from "../Navbar";
import CompetitionsList from "./CompetitionsList";


function Competitions() {
  return (
    <div>
      <CompetitionsProvider>
        <Navbar />
        <div className="container">
          <CompetitionsList />
        </div>
      </CompetitionsProvider>
    </div>
  );
}

export default Competitions;

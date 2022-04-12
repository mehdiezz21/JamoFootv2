import Navbar from "../Navbar";

function Classement() {
    return (
        <div>
            <Navbar />
            <div className="container my-5">


                <table className="table able-striped">
                    <thead>
                        <tr>
                            <th scope="col">Position</th>
                            <th scope="col">Team</th>
                            <th scope="col">Match joué</th>
                            <th scope="col">Victoire</th>
                            <th scope="col">Defaite</th>
                            <th scope="col">Nul</th>
                            <th scope="col">Point</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            
            </div>
        </div>
    );
}
  
export default Classement;
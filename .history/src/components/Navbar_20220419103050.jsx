import React from 'react';
import SearchBar from "./SearchBar.jsx";
import logo from '../media/logo.png';
import home from '../media/maison.png'

const FR = [
    { title: 'Ligue 1', value: 2015},
    { title: 'Ligue 2', value: 2142},
    { title: 'Coupe de France', value: 2138},
]


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Jamo'Foot</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item me-5">
                        <a className="nav-link active mb-1" aria-current="page" href="/"> <img src={home} className='home' alt="" /></a>
                    </li>
                    <div className='d-flex justify-content-between ms-5 mx-auto'>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Europe
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">UEFA Champions League</a></li>
                                <li><a className="dropdown-item" href="#">UEFA Europa League</a></li>
                                <li><a className="dropdown-item" href="#">UEFA Conference League</a></li>
                            </ul>
                        </li>
                        <li className="nav-item active dropdown">
                            <a className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                France
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {FR.map(competition => <Link to={`/team/${competition.value}`}> ${competition.title} </Link></li>)}
                                <li><a className="dropdown-item" href="#">Ligue 1</a></li>
                                <li><a className="dropdown-item" href="#">Ligue 2</a></li>
                                <li><a className="dropdown-item" href="#">Coupe de France</a></li>
                            </ul>
                        </li>
                        <li className="nav-item active dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Angleterre
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Premier League</a></li>
                                <li><a className="dropdown-item" href="#">Championship</a></li>
                                <li><a className="dropdown-item" href="#">FA Cup</a></li>
                            </ul>
                        </li>
                        <li className="nav-item active dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Espagne
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">LaLiga</a></li>
                                <li><a className="dropdown-item" href="#">LaLiga 2</a></li>
                                <li><a className="dropdown-item" href="#">Coupe du Roi</a></li>
                            </ul>
                        </li>
                        <li className="nav-item active dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Allemagne
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Bundesliga</a></li>
                                <li><a className="dropdown-item" href="#">2. Bundesliga</a></li>
                                <li><a className="dropdown-item" href="#">Super Cup</a></li>
                            </ul>
                        </li>
                        <li className="nav-item active dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Italie
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Serie A</a></li>
                                <li><a className="dropdown-item" href="#">Serie B</a></li>
                                <li><a className="dropdown-item" href="#">Coupe d'Italie</a></li>
                            </ul>
                        </li>
                    </div>
                </ul>
                <form className="d-flex">
                    <SearchBar />
                </form>
                <img src={logo} alt="" className='logo_nav' />
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
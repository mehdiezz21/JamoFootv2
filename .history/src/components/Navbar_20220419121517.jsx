import React from 'react';
import SearchBar from "./SearchBar.jsx";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import logo from '../media/logo.png';
import home from '../media/maison.png'

const EU = [
    { title: 'Champions League', value: 2001},
    { title: 'Europa League', value: 2146},
    { title: 'Conference League', value: 2154},
]

const WL = [
    { title: 'Ligue 1', value: 2015},
    { title: 'Ligue 2', value: 2142},
    { title: 'Coupe de France', value: 2138},
]

const FD = [
    { title: 'Premiere League', value: 2021},
    { title: 'Championship', value: 2016},
    { title: 'FA Cup', value: 2055},
]

const ES = [
    { title: 'LaLiga', value: 2014},
    { title: 'LaLiga 2', value: 2077},
    { title: 'Coupe du Roi', value: 2079},
]

const DE = [
    { title: 'Bundesliga', value: 2015},
    { title: '2. Bundesliga', value: 2004},
    { title: 'Super Cup', value: 2134},
]

const IT = [
    { title: 'Serie A', value: 2019},
    { title: 'Serie B', value: 2121},
    { title: 'Coupe d\'Italie', value: 2122},
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
                        <li className="nav-item active dropdown">
                            <a className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Monde
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {WL.map(competition => <li><Link to={`/team/${competition.value}`} className="dropdown-item"> {competition.title} </Link></li>)}
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Europe
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {EU.map(competition => <li><Link to={`/team/${competition.value}`} className="dropdown-item"> {competition.title} </Link></li>)}
                            </ul>
                        </li>
                        <li className="nav-item active dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                1ère divisions
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {FD.map(competition => <li><Link to={`/team/${competition.value}`} className="dropdown-item"> {competition.title} </Link></li>)}
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
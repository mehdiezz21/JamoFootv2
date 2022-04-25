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

const FR = [
    { title: 'Ligue 1', value: 2015},
    { title: 'Ligue 2', value: 2142},
    { title: 'Coupe de France', value: 2138},
]

const FR = [
    { title: 'Ligue 1', value: 2015},
    { title: 'Ligue 2', value: 2142},
    { title: 'Coupe de France', value: 2138},
]

const FR = [
    { title: 'Ligue 1', value: 2015},
    { title: 'Ligue 2', value: 2142},
    { title: 'Coupe de France', value: 2138},
]

const FR = [
    { title: 'Ligue 1', value: 2015},
    { title: 'Ligue 2', value: 2142},
    { title: 'Coupe de France', value: 2138},
]

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
                                {EU.map(competition => <li><Link to={`/team/${competition.value}`} className="dropdown-item"> {competition.title} </Link></li>)}
                            </ul>
                        </li>
                        <li className="nav-item active dropdown">
                            <a className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                France
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {FR.map(competition => <li><Link to={`/team/${competition.value}`} className="dropdown-item"> {competition.title} </Link></li>)}
                            </ul>
                        </li>
                        <li className="nav-item active dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Angleterre
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {EN.map(competition => <li><Link to={`/team/${competition.value}`} className="dropdown-item"> {competition.title} </Link></li>)}
                            </ul>
                        </li>
                        <li className="nav-item active dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Espagne
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {ES.map(competition => <li><Link to={`/team/${competition.value}`} className="dropdown-item"> {competition.title} </Link></li>)}
                            </ul>
                        </li>
                        <li className="nav-item active dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Allemagne
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {DE.map(competition => <li><Link to={`/team/${competition.value}`} className="dropdown-item"> {competition.title} </Link></li>)}
                            </ul>
                        </li>
                        <li className="nav-item active dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Italie
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {IT.map(competition => <li><Link to={`/team/${competition.value}`} className="dropdown-item"> {competition.title} </Link></li>)}
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
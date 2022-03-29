import React from 'react';
import SearchBar from "./SearchBar.jsx";


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Europe
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">UEFA Champions league</a></li>
                            <li><a class="dropdown-item" href="#">UEFA Europa league</a></li>
                            <li><a class="dropdown-item" href="#">UEFA Conference league</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            France
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Ligue 1</a></li>
                            <li><a class="dropdown-item" href="#">Ligue 2</a></li>
                            <li><a class="dropdown-item" href="#">Coupe de France</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Angleterre
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Premiere League</a></li>
                            <li><a class="dropdown-item" href="#">Championship</a></li>
                            <li><a class="dropdown-item" href="#">FA cup</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Espagne
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">LaLigua</a></li>
                            <li><a class="dropdown-item" href="#">LaLigua 2</a></li>
                            <li><a class="dropdown-item" href="#">Coupe du Roi</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Allemagne
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Bundesliga serie A</a></li>
                            <li><a class="dropdown-item" href="#">Bundesliga serie B</a></li>
                            <li><a class="dropdown-item" href="#">Super Cup</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Italie
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">serie A</a></li>
                            <li><a class="dropdown-item" href="#">serie B</a></li>
                            <li><a class="dropdown-item" href="#">Coupe d'Italie</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex">
                    <SearchBar />
                </form>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
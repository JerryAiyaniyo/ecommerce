import React from 'react';
import './navbar.scss';
import logo from '../../assets/Images/dillons-logo.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

function Navbar(cartItem) {

  return (
    <nav id="navbar" className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <button id="toggler" className='navbar-toggler collapsed' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <a className="navbar-brand mx-auto" href="/">
          <img src={logo} alt="Logo" width="100vw" />
        </a>
        <div className="cart">
          <Link to="/cart">
            <FaShoppingCart className="btn-cart" />
            <b><span className="number-cart">{cartItem.length === {} ? "" : cartItem.length}</span></b>
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline mx-auto my-2 my-lg-0">
            <input class="form-control-1 mx-sm-2" type="search" placeholder="Buscar productos" aria-label="Search"></input>
          </form>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-bottle-droplet"></i>
                  Aceite, especias y salsas</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-bottle-water"></i>
                  Agua y refrescos</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-cookie"></i>
                  Aperitivos</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-bowl-rice"></i>
                  Arroz, legumbres y pasta</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-candy-cane"></i>
                  Azúcar, caramelos y chocolate</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-baby-carriage"></i>
                  Bebé</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-wine-glass"></i>
                  Bodega</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-mug-hot"></i>
                  Cacao, café e infusiones</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-bacon"></i>
                  Carne</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-wheat-awn"></i>
                  Cereales y galletas</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-cheese"></i>
                  Charcutería y quesos</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-icicles"></i>
                  Congelados</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-jar"></i>
                  Conservas, caldos y cremas</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-shower"></i>
                  Cuidado del cabello</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-spray-can-sparkles"></i>
                  Cuidado facial y corporal</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-prescription-bottle-medical"></i>
                  Fitoterapia y parafarmacia</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-apple-whole"></i>
                  Fruta y verdura</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-egg"></i>
                  Huevos, leche y mantequilla</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-broom"></i>
                  Limpieza y hogar</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-mars-stroke-up"></i>
                  Maquillaje</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-fish"></i>
                  Marisco y pescado</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-paw"></i>
                  Mascotas</a></li>
                <li><hr className="dropdown-divider"></hr>
                </li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-cake-candles"></i>
                  Panadería y pastelería</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-pizza-slice"></i>
                  Pizzas y platos preparados</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-ice-cream"></i>
                  Postres y yogures</a>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">
                  <i className="fa-solid fa-whiskey-glass"></i>
                  Zumos</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/cart"><a className="nav-link" href="#">Mis pedidos</a></Link>
            </li>
            <li className="nav-item">
              <Link to="/support" ><a className="nav-link" href="#">Atención al cliente</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import React from 'react';
import './navbar.scss';
import logo from '../../assets/Images/dillons-logo.png';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import Cart from '../CartIcon/Cart'

function Navbar(cartItem) {

  const refreshPage = () => {
    window.location.reload();
  }

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
          <Cart/>


          {/* <Link to="/cart">
            <FaShoppingCart className="btn-cart" />
            <b><span className="number-cart">{cartItem.length === {} ? "" : cartItem.length}</span></b>
          </Link> */}
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li onClick={refreshPage}>
                  <Link to="/oil" >
                    <a class="dropdown-item" href="#"  >
                      <i class="fa-solid fa-bottle-droplet"></i>
                      Aceite, especias y salsas
                    </a>
                  </Link>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li onClick={refreshPage}>
                  <Link to="/snacks">
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-cookie"></i>
                      Aperitivos
                    </a>
                  </Link>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li onClick={refreshPage}>
                  <Link to="/candy">
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-candy-cane"></i>
                      Azúcar, caramelos y chocolate
                    </a>
                  </Link>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li onClick={refreshPage}>
                  <Link to="/cereals">
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-wheat-awn"></i>
                      Cereales y galletas</a>
                  </Link>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li onClick={refreshPage}>
                  <Link to="/cheese">
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-cheese"></i>
                      Charcutería y quesos</a>
                  </Link>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li onClick={refreshPage}>
                  <Link to="/soup">
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-jar"></i>
                      Conservas, caldos y cremas</a>
                  </Link>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li onClick={refreshPage}>
                  <Link to="/pharmacy">
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-prescription-bottle-medical"></i>
                      Fitoterapia y parafarmacia</a>
                  </Link>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li onClick={refreshPage}>
                  <Link to="/milk">
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-egg"></i>
                      Huevos, leche y mantequilla</a>
                  </Link>
                </li>
                <li ><hr className="dropdown-divider"></hr></li>
                <li onClick={refreshPage}>
                  <Link to="/cake">
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-cake-candles"></i>
                      Panadería y pastelería</a>
                  </Link>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li onClick={refreshPage}>
                  <Link to="/pizza">
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-pizza-slice"></i>
                      Pizzas y platos preparados</a>
                  </Link>
                </li>
                <li><hr className="dropdown-divider"></hr></li>
                <li onClick={refreshPage}>
                  <Link to="/juice">
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-whiskey-glass"></i>
                      Zumos</a>
                  </Link>
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
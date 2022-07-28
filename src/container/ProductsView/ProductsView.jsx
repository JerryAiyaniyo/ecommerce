import React from 'react';
import './ProductsView.scss';
import aceite from '../../assets/Images/aceite-1.jpeg';
import peach from '../../assets/Images/peach.png';

function ProductsView () {
  return (
    <div>
      <div className="product--info-box">
        <div className="container-fluid">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={aceite} className="d-block w-100" alt="Aceite" />
              </div>
              <div className="carousel-item">
                <img src={aceite} className="d-block w-100" alt="Aceite" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="product--info">
            <h3>Hacendado aceite de oliva</h3>
            <p>Aceite 5L | 3,85€/L</p>
            <h2><strong>19,20 €</strong> / Unidad</h2>
            <div className="product--line"></div>
            <button type="submit">Añadir al carrito</button>
          </div>
        </div>
      </div>

      <div className="products--related-box">
        <div className="container-fluid">
          <div className="products--related">
           <h3>Productos relacionados</h3>
            <div className="row flex-row flex-nowrap overflow-auto">
              <div className="col-10">
                <div className="card card-block">
                  <img src={peach} className="card-img-top" alt="Melocotón" />
                  <div className="card-body">
                    <h5 className="card-title">Melocotón de Cádiz</h5>
                    <p className="card-text">Melocotón Fresco</p>
                    <h2><strong>19,20 €</strong> / Unidad</h2>
                    <a href="#" className="btn btn-primary">Añadir</a>
                  </div>
                </div>
              </div>
              <div className="col-10">
                <div className="card card-block">
                  <img src={peach} className="card-img-top" alt="Melocotón" />
                  <div className="card-body">
                    <h5 className="card-title">Melocotón de Cádiz</h5>
                    <p className="card-text">Melocotón Fresco</p>
                    <h2><strong>19,20 €</strong> / Unidad</h2>
                    <a href="#" className="btn btn-primary">Añadir</a>
                  </div>
                </div>
              </div>
              <div className="col-10">
                <div className="card card-block">
                  <img src={peach} className="card-img-top" alt="Melocotón" />
                  <div className="card-body">
                    <h5 className="card-title">Melocotón de Cádiz</h5>
                    <p className="card-text">Melocotón Fresco</p>
                    <h2><strong>19,20 €</strong> / Unidad</h2>
                    <a href="#" className="btn btn-primary">Añadir</a>
                  </div>
                </div>
              </div>
              <div className="col-10">
                <div className="card card-block">
                  <img src={peach} className="card-img-top" alt="Melocotón" />
                  <div className="card-body">
                    <h5 className="card-title">Melocotón de Cádiz</h5>
                    <p className="card-text">Melocotón Fresco</p>
                    <h2><strong>19,20 €</strong> / Unidad</h2>
                    <a href="#" className="btn btn-primary">Añadir</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsView;


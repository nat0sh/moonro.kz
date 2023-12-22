import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ brandName, modelName, item }) => {
  const { id, title, img, desc, price } = item;

  return (
    <div className="col-lg-4 col-sm-6 mb-3">
      <div className="product-card">
        <div className="product-thumb">
          <Link to={`/${brandName}/${modelName}/${id}`}>
            <img src={`/case_img/${img}`} alt={title} />
          </Link>
        </div>
        <div className="product-details">
          <h4>
            <Link to={`/${brandName}/${modelName}/${id}`}>
              {title}
            </Link>
          </h4>
          <p className="product-excerpt">{desc}</p>
          <div className="product-bottom-details d-flex justify-content-between mb-2">
            <div className="product-price">{price}</div>
            <div className="product-links">
              <button className="btn btn-outline-danger add-to-cart">
                <i className='bi-cart-plus-fill'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

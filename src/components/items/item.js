import React from 'react';
import '../cards/card.css';

const Item = ({ item, onAdd }) => {
  const offerClass =
    item.offer === 'hit'
      ? 'offer-hit'
      : item.offer === 'new'
      ? 'offer-new'
      : '';

  return (
    <div className="col-lg-3 col-sm-6 mb-3">
      <div className="product-card">
        <div className="product-card-offer">
          <div className={offerClass}>
            <span className="badge-text">
              {item.offer === 'hit' ? 'Хит' : item.offer === 'new' ? 'New' : ''}
            </span>
          </div>
        </div>
        <div className="product-thumb">
          <a href="product.html">
            <img src={"./img/" + item.img} alt="" />
          </a>
        </div>
        <div className="product-details">
          <h4>
            <a href="product.html">{item.title}</a>
          </h4>
          <p className="product-excerpt">{item.desc}</p>
          <div className="product-bottom-details d-flex justify-content-between mb-2">
            <div className="product-price">{item.price}</div>
            <div className="product-links">
              <a
                className="btn btn-outline-danger add-to-cart"
                onClick={() => onAdd(item)}
              >
                <i className='bi-cart-plus-fill'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

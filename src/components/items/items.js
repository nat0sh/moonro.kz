import React from 'react';
import Item from './item';

const Items = ({ items, onAdd }) => {
  return (
    <section className='featured-items'>
      <div className='container'>
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="section-title">
              <span>Рекомендуемые товары</span>
            </h2>
          </div>
        </div>
        <div className='row'>
          {items.map((el) => (
            <Item key={el.id} item={el} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Items;

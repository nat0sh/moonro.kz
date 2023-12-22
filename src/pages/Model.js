import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/data';
import Filter from '../components/filter/Filter';
import Header from '../components/header/header';
import CardList from '../components/cards/CardList';
import Footer from '../components/footer/footer';

const Model = ({ addToOrder, deleteOrder }) => {
  const { modelName, brand: selectedBrandName } = useParams();
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  // Находим соответствующий бренд и модель в данных
  const brand = products.find((brand) =>
    brand.models.some((model) => model.modelName === modelName)
  );

  // Получаем чехлы для выбранной модели
  const casesData = brand
    ? brand.models.find((model) => model.modelName === modelName)?.cases || []
    : [];

  const handleFilterChange = (colors, materials) => {
    setSelectedColors(colors);
    setSelectedMaterials(materials);
  };

  return (
    <div className="model-page">
      <Header />
      <nav className='my-breadcrumb' style={{ "--bs-breadcrumb-divider": "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\"%3E%3Cpath d=\"M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\" fill=\"%236c757d\"/%3E%3C/svg%3E')" }} aria-label="breadcrumb">
          <ol className="breadcrumb">
              <li className="breadcrumb-item br-home"><Link to='/'>Главная</Link></li>
              <li className="breadcrumb-item active" aria-current="page"><Link to={`/${selectedBrandName}`}>{selectedBrandName}</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{modelName}</li>
          </ol>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <Filter onFilterChange={handleFilterChange} cardData={casesData} />
          <div className="col-lg-9 col-md-8">
            <div className="card-list">
              <CardList
                data={products}
                onAdd={addToOrder}
                onDelete={deleteOrder}
                selectedColors={selectedColors}
                selectedMaterials={selectedMaterials}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Model;

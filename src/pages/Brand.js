import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/data';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const Brand = ({ orders, addToOrder, deleteOrder }) => {
  const { brand } = useParams();

  const selectedBrand = products.find(
    (b) => b.brandName && b.brandName.toLowerCase() === brand.toLowerCase()
  );
  const { brandName, models } = selectedBrand;

  return (
    <div>
        <Header orders={orders || []} onDelete={deleteOrder}/>
        <nav className='my-breadcrumb' style={{ "--bs-breadcrumb-divider": "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\"%3E%3Cpath d=\"M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\" fill=\"%236c757d\"/%3E%3C/svg%3E')" }} aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item br-home"><Link to='/'>Главная</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{brandName}</li>
            </ol>
        </nav>

        <section className='choose-model'>
        <div className='container-fluid'>
            <div className='row w-100'>
                <div className='col-12'>
                    <h2 className='section-title mt-3'>
                        <span>Выберите модель для {brandName}</span>
                    </h2>
                </div>
            </div>
            <div className='row'>
                {models.map((model) => (
                <div key={model} className='col-lg-4 col-md-6 col-sm-12'>
                    <Link className='btn btn-light' to={`/${brandName}/${model.modelName}`}>
                        {model.modelName}
                    </Link>
                </div>
            ))}
            </div>
        </div>
    </section>
    <Footer />
    </div>
  );
};

export default Brand;

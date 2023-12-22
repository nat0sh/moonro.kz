import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/data';
import './search.css'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSearch = () => {
    const filteredProducts = [];

    if (searchTerm.trim() !== '') {
      products.forEach((brand) => {
        brand.models.forEach((model) => {
          model.cases.forEach((product) => {
            if (
              product.title &&
              product.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              filteredProducts.push({
                brandName: brand.brandName,
                modelName: model.modelName,
                id: product.id,
                title: product.title,
              });
            }
          });
        });
      });
    }

    setSearchResults(filteredProducts);
  };

  return (
    <div>
      <div className='d-flex'>
        <input
          type="search"
          placeholder="Search..."
          className="form-control me-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={`search-results ${searchTerm ? '' : 'empty'}`}>
        {searchTerm && (
          searchResults.length > 0 ? (
            searchResults.map(result => (
              <Link
                key={result.id}
                to={`/${result.brandName}/${result.modelName}/${result.id}`}
                className="search-result-item"
              >
                {result.title}
              </Link>
            ))
          ) : (
            <div className="search-result-item">Ничего не найдено</div>
          )
        )}
      </div>
    </div>
  );
};

export default Search;

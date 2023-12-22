import React, { useState } from 'react';
import './filter.css'

const Filter = ({ onFilterChange }) => {
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedMaterials, setSelectedMaterials] = useState([]);

    const handleCheckboxChange = (category, value) => {
        if (category === 'colors') {
            setSelectedColors((prevColors) => {
                return prevColors.includes(value)
                    ? prevColors.filter((color) => color !== value)
                    : [...prevColors, value];
            });
        } else if (category === 'materials') {
            setSelectedMaterials((prevMaterials) => {
                return prevMaterials.includes(value)
                    ? prevMaterials.filter((material) => material !== value)
                    : [...prevMaterials, value];
            });
        }
    };

    React.useEffect(() => {
        onFilterChange(selectedColors, selectedMaterials);
    }, [selectedColors, selectedMaterials, onFilterChange]);

    return (
        <div className="col-lg-3 col-md-4">
            <div className="sidebar">

                <button className="btn w-100 text-start collapse-filters-btn mb-3" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFilters" aria-expanded="false"
                    aria-controls="collapseExample">
                    Фильтры <i className="bi bi-funnel-fill"></i>
                </button>

                <div className="collapse collapse-filters" id="collapseFilters">
                    <div className="filter-block">
                        <h5 className="section-title ms-1">
                            <span>Цвет</span>
                        </h5>
                        <form action="">
                            {['black', 'white', 'pink', 'brown', 'green'].map(color => (
                                <div key={color} className="form-check d-flex justify-content-between">
                                    <div>
                                        <label className="form-check-label" htmlFor={color}>
                                            {color.charAt(0).toUpperCase() + color.slice(1)}
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={color}
                                            id={color}
                                            checked={selectedColors.includes(color)}
                                            onChange={() => handleCheckboxChange('colors', color)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </form>

                        <h5 className="section-title ms-1">
                            <span>Материал</span>
                        </h5>
                        <form action="">
                            {['silicone', 'plastic', 'wood'].map(material => (
                                <div key={material} className="form-check d-flex justify-content-between">
                                    <div>
                                        <label className="form-check-label" htmlFor={material}>
                                            {material.charAt(0).toUpperCase() + material.slice(1)}
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={material}
                                            id={material}
                                            checked={selectedMaterials.includes(material)}
                                            onChange={() => handleCheckboxChange('materials', material)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;

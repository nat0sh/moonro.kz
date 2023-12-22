import React from 'react';
import Card from './Card';

const CardList = ({ data, onAdd, selectedColors, selectedMaterials }) => {
  const filteredData = data
    .map(brand => ({
      ...brand,
      models: brand.models.map(model => ({
        ...model,
        cases: model.cases.filter(item => {
          const hasSelectedColor = selectedColors.length === 0 || selectedColors.includes(item.color);
          const hasSelectedMaterial = selectedMaterials.length === 0 || selectedMaterials.includes(item.material);
          return hasSelectedColor && hasSelectedMaterial;
        }),
      })),
    }))
    .filter(brand => brand.models.some(model => model.cases.length > 0));

  return (
    <div className="row">
      {filteredData.map(brand => (
        brand.models.map(model => (
          model.cases.map(item => (
            <Card
              key={item.id}
              brandName={brand.brandName}  // Добавляем brandName в пропсы Card
              modelName={model.modelName}  // Добавляем modelName в пропсы Card
              item={item}                  // Передаем весь объект item в пропсы Card
              onAdd={onAdd}
            />
          ))
        ))
      ))}
    </div>
  );
};

export default CardList;

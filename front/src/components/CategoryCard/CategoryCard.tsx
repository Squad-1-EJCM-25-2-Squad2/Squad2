import React from 'react';
import './style.css';

{/*Este é o componente individual de cartão de categoria, semelhante ao de produto.*/}

interface Category {
  name: string;
  imageUrl: string;
  itemCount: string;
}

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className="category-card">
      <div className="category-image-container">
        <img src={category.imageUrl} alt={category.name} className="category-image" />
        <div className="category-overlay">
          <h3 className="category-name">{category.name}</h3>
          <p className="category-item-count">{category.itemCount}</p>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
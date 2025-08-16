import React from 'react';
import './style.css';

{/*Este é o componente individual de cartão de categoria, semelhante ao de produto.*/}

const CategoryCard = ({ category }) => {
  return (
    
    <div className="category-card">
      <div className="category-image-container"> {/* Contêiner da imagem da categoria*/}
        <img src={category.imageUrl} alt={category.name} className="category-image" />
      </div>
      <h3 className="category-name">{category.name}</h3>
      <p className="category-item-count">{category.itemCount}</p> {/*Exibe a contagem de itens na categoria.*/}
    </div>
  );
};

export default CategoryCard;
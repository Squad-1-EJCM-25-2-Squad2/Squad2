import React from 'react';
import './style.css';

{/*Este é o componente individual de cartão de produto. Ele recebe um objeto product como propriedade e renderiza a imagem, nome, preço e outras informações.*/}

const ProductCard = ({ product }) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <div className="product-tags">
          {product.tag === 'Best Seller' && <span className="tag-best-seller">Best Seller</span>}
          {product.tag === 'New' && <span className="tag-new">New</span>}
          {product.tag === 'Sale' && <span className="tag-sale">Sale</span>}
          {product.tag === 'Premium' && <span className="tag-premium">Premium</span>}
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
          <span>⭐️ {product.rating}</span>
          <span className="rating-count">({product.ratingCount})</span>
        </div>
        <div className="price-actions">
          <div className="price-info">
            <span className="current-price">${product.price}</span>
            {hasDiscount && (
              <span className="original-price">${product.originalPrice}</span>
            )}
          </div>
            <button className="add-to-cart-button">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
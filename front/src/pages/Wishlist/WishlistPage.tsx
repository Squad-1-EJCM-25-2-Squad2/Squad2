import React, { useState } from "react";
import Header from '../../components/Header/Header.tsx';
import "./WishlistPage.css";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  originalPrice?: number | null;
  price: number;
  rating: number;
  ratingCount?: number;
  tag?: string | null;
  dateAdded?: string;
  status?: "in-stock" | "out-of-stock";
}

// Card da wishlist
const WishlistProductCard: React.FC<{
    
  product: Product;
  onRemove: (id: number) => void;
}> = ({ product, onRemove }) => {
  const isOutOfStock = product.status === "out-of-stock";
  const buttonText = isOutOfStock ? "Notify Me" : "Add to Cart";

  return (
    <div className="product-card">
      {/* Tags */}
      {(product.tag || isOutOfStock) && (
        <div className="product-tags">
          {product.tag && <span className="product-tag">{product.tag}</span>}
          {isOutOfStock && (
            <span className="product-tag-out-of-stock">Out of Stock</span>
          )}
        </div>
      )}

      {/* Botão coração */}
      <button onClick={() => onRemove(product.id)} className="remove-button">
        ❤️
      </button>

      {/* Imagem */}
      <div className="product-image-container">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png";
          }}
        />
      </div>

      {/* Detalhes */}
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>

        {/* Avaliação */}
        <div className="product-rating">
          {"★".repeat(Math.floor(product.rating))}
          <span className="text-gray-300">
            {"★".repeat(5 - Math.floor(product.rating))}
          </span>
          <span className="ml-1 text-sm text-gray-500">
            ({product.ratingCount || 0})
          </span>
        </div>

        {/* Preço */}
        <div className="product-prices">
          <span className="product-price">${product.price}</span>
          {product.originalPrice && (
            <span className="product-original-price">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Data adicionada */}
        {product.dateAdded && (
          <span className="product-date-added">{product.dateAdded}</span>
        )}

        {/* Botões */}
        <div className="card-buttons">
          <button
            className={`add-to-cart-button ${
              isOutOfStock ? "out-of-stock-button" : ""}`}>
            {buttonText}
          </button>
        {/* Botão de lixeira usando Unicode */}
  <button
    className="remove-item-button"
    onClick={() => onRemove(product.id)}
    title="Remove item">
    🗑️
  </button>
        </div>
    </div>
 </div>



  );
};

// Card recomendados
const RecommendedProductCard: React.FC<{ product: Product }> = ({
  product,
}) => {
  return (
    <div className="recommended-card">
      <div className="recommended-image-container">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="recommended-image"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png";
          }}
        />
      </div>
      <div className="recommended-details">
        <h3 className="recommended-name">{product.name}</h3>
        <div className="recommended-rating">
          {"★".repeat(Math.floor(product.rating))}
          <span className="text-gray-300">
            {"★".repeat(5 - Math.floor(product.rating))}
          </span>
        </div>
        <div className="recommended-prices-button-container">
          <span className="recommended-price">${product.price}</span>
          <button className="add-to-cart-button-sm">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

// Dados mock
const initialWishlist: Product[] = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    imageUrl: "https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png",
    originalPrice: 49,
    price: 29,
    rating: 4.8,
    ratingCount: 124,
    tag: "-41% Limited Time",
    dateAdded: "Added 14/01/2024",
  },
  {
    id: 2,
    name: "Cashmere Sweater",
    imageUrl: "https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png",
    originalPrice: 200,
    price: 120,
    rating: 4.8,
    ratingCount: 156,
    tag: "-40% Luxury Sale",
    dateAdded: "Added 09/01/2024",
  },
  {
    id: 3,
    name: "Athletic Sneakers",
    imageUrl: "https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png",
    originalPrice: 140,
    price: 84,
    rating: 4.5,
    ratingCount: 214,
    status: "out-of-stock",
    tag: "-40% Sport Sale",
    dateAdded: "Added 04/01/2024",
  },
];

const recommended: Product[] = [
  { id: 4, name: "Recommended Item 1", imageUrl: "https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png", price: 39, rating: 4.6 },
  { id: 5, name: "Recommended Item 2", imageUrl: "https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png", price: 49, rating: 4.7 },
  { id: 6, name: "Recommended Item 3", imageUrl: "https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png", price: 59, rating: 4.8 },
  { id: 7, name: "Recommended Item 4", imageUrl: "https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png", price: 69, rating: 4.9 },
];

const WishlistPage: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>(initialWishlist);

  const handleRemove = (id: number) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id));
  };

  const handleClear = () => {
    setWishlist([]);
  };

  return (
  <>
    {/* Header fora do container */}
    <Header />

    {/* Container da página */}
    <div className="wishlist-container">
      {/* Título + ações */}
      <div className="wishlist-header">
        <h1 className="wishlist-title">My Wishlist</h1>

        <div className="wishlist-actions-bar">
          <div className="wishlist-left-buttons">
            <button className="clear-wishlist-button">Add All to Cart</button>
            <button onClick={handleClear} className="clear-wishlist-button">
              Clear Wishlist
            </button>
          </div>

          <div className="wishlist-right-buttons">
            <button className="clear-wishlist-button">
              {/* Ícone de compartilhar */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.83-4H12a3 3 0 100 6c.37 0 .73-.07 1.05-.21l2.58 1.47a3.01 3.01 0 100 1.5l-2.58 1.47A3 3 0 1012 18h.17A3 3 0 1015 14a3 3 0 00-1.05-.21l-2.58-1.47a3.01 3.01 0 100-1.5l2.58-1.47c.32.14.68.21 1.05.21z" />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lista de desejos (DEVE ficar dentro do container) */}
      <div className="wishlist-grid">
        {wishlist.length > 0 ? (
          wishlist.map((p) => (
            <WishlistProductCard
              key={p.id}
              product={p}
              onRemove={handleRemove}
            />
          ))
        ) : (
          <div className="empty-wishlist-message">Your wishlist is empty</div>
        )}
      </div>

      {/* Recomendados (também dentro do container) */}
      <div className="recommended-section">
        <h2 className="recommended-title">You Might Also Like</h2>
        <div className="recommended-grid">
          {recommended.map((p) => (
            <RecommendedProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  </>
 );
}

export default WishlistPage;

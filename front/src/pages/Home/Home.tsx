import React, { useState, useEffect } from 'react';
import './Home.css';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import api from '../../services/api.ts';
import CategoryCard from '../../components/CategoryCard/CategoryCard.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import Header from '../../components/Header/Header.tsx';


// Interfaces para tipagem dos dados.
interface Product {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  originalPrice: number | null;
  price: number;
  rating: number;
  ratingCount: number;
  tag: string;
}

interface Category {
  name: string;
  imageUrl: string;
  itemCount: string;
}

// Dados simulados para produtos e categorias.
const productsData: Product[] = [
  { id: 1, name: 'Vintage Denim Jacket', category: 'Jacket', imageUrl: 'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png', originalPrice: 120, price: 89, rating: 4.8, ratingCount: 134, tag: 'Best Seller' },
  { id: 2, name: 'Oversize Blazer', category: 'Blazer', imageUrl: 'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png', originalPrice: null, price: 145, rating: 4.9, ratingCount: 89, tag: 'New' },
  { id: 3, name: 'Confort Slim Jeans', category: 'Jeans', imageUrl: 'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png', originalPrice: 99, price: 79, rating: 4.7, ratingCount: 203, tag: 'Sale' },
  { id: 4, name: 'Silk Blouse', category: 'Blouse', imageUrl: 'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png', originalPrice: null, price: 125, rating: 4.8, ratingCount: 198, tag: 'Premium' },
];

const categoriesData: Category[] = [
  { name: "Women's Fashion", imageUrl: 'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png', itemCount: '500+ items' },
  { name: "Men's Fashion", imageUrl: 'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png', itemCount: '350+ items' },
  { name: 'Accessories', imageUrl: 'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png', itemCount: '200+ items' },
  { name: 'Shoes', imageUrl: 'https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_1280.png', itemCount: '150+ items' },
];

// Componente principal
const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setProducts(productsData);
    setCategories(categoriesData);
  }, []);

return (
  <>
    <Header />

    <div className="app-container">
      {/* Capa do projeto */}
      <header className="header-section">
        <h1 className="header-title">Style Redefined!</h1>
        <p className="header-subtitle">
          Discover the latest in fashion. Premium quality, sustainable materials, timeless designs.
        </p>
        <div className="header-buttons">
          <button className="shop-now-button">Shop Now</button>
          <button className="view-collection-button">View Collection</button>
        </div>
      </header>

      {/* SECAO DE SERVICOS */}
      <div className="services-section">
        <div className="service-item">
          <span className="service-icon">🚚</span>
          <p className="service-text">Fast & Free Shipping</p>
          <p className="section-subtitle">On all orders over $150</p>
        </div>
        <div className="service-item">
          <span className="service-icon">🔄</span>
          <p className="service-text">Easy Returns</p>
          <p className="section-subtitle">30-day hassle-free returns</p>
        </div>
        <div className="service-item">
          <span className="service-icon">🔒</span>
          <p className="service-text">Secure Payment</p>
          <p className="section-subtitle">Your payment information is safe</p>
        </div>
      </div>

      {/* Secao de Categorias */}
      <div className="shop-by-category">
        <h2 className="section-title">Shop by Category</h2>
        <p className="section-subtitle">
          Explore our carefully curated collections for every style and occasion
        </p>
        <div className="category-list">
          {categories.map((category, index) => ( 
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>

      {/* Secao de Produtos em Destaque */}
      <div className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">Handpicked favorites from our latest collection</p>
        <div className="product-list">
          {products.map(product => ( 
            <ProductCard key={product.id} product={product} /> 
          ))}
        </div>
        <button className="load-more-button">
          View All Products <span className="arrow-icon">→</span>
        </button>
      </div>
    </div>

    <Footer  
      title="Minha loja" 
      text="Todos os direitos reservados © 2025" 
      backgroundColor="preto" 
    />
  </>
);
}

export default Home;
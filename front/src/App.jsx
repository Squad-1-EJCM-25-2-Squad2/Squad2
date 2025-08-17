//Importações
import React, { useState, useEffect } from 'react'; 
import ProductCard from './components/ProductCard';
import CategoryCard from './components/CategoryCard';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import { getProductsWithImages, getCategoriesWithImages } from './data'; 
import './App.css';

function App() {
  const [productsWithImages, setProductsWithImages] = useState([]);
  const [categoriesWithImages, setCategoriesWithImages] = useState([]);

  useEffect(() => {
    setProductsWithImages(getProductsWithImages());
    setCategoriesWithImages(getCategoriesWithImages());
  }, []);


  return (
<div className="app-container">
  {/* Header do projeto */}
      <Header />

      {/* SEÇÃO DE TÍTULO E SERVIÇOS */}
      <div className="hero-and-services-section">

        {/* Seção de Título */}
        <div className="header-section">
          <h1 className="header-title">Style Redefined!</h1>
          <p className="header-subtitle">
            Discorver the latest in fashion. Premium quality, sustainable materials, timeless designs.
          </p>
          <div className="header-buttons">
            <button className="shop-now-button">Shop Now</button>
            <button className="view-collection-button">View Collection</button>
          </div>
        </div>
      
      {/* Seção de Serviços */}

      <div className="services-section">
        <div className="service-item">
          <span className="service-icon">🚚</span>
          <p className="service-text">Free Shipping</p> 
          <p className="section-subtitle">Free shipping on orders over 100$</p>
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
    </div>
      {/* Seção de Categorias */}
      <div className="shop-by-category">
        <h2 className="section-title">Shop by Categoty</h2>
        <p className="section-subtitle">Explore our carefully curated collections for every style and occasion</p>
        <div className="category-list">
          {categoriesWithImages.map((category, index) => ( 
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>

      {/* Seção de Produtos em Destaque */}
      <div className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">Handpicked favorites from our latest collection</p>
        <div className="product-list">
          {productsWithImages.map(product => ( 
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button className="load-more-button">View All Products <span className="arrow-icon">→</span></button>
      </div>
        {/* Footer do projeto */}
      <Footer />
    </div>
  );
}

export default App;
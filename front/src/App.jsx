//Importações
import React from 'react';
import ProductCard from './components/ProductCard';
import CategoryCard from './components/CategoryCard';
import { products, categories } from './data';
import './App.css';

function App() {
  return (
<div className="app-container">
      {/* SEÇÃO DE TÍTULO E SERVIÇOS */}
      <div className="hero-and-services-section">

        {/* Seção de Título */}
        <div className="header-section">
          <h1 className="header-title">Estilo Redefinido!</h1>
          <p className="header-subtitle">
            Descubra as últimas tendências da moda. Qualidade premium, materiais sustentáveis e designs atemporais!
          </p>
          <div className="header-buttons">
            <button className="shop-now-button">Compre Agora</button>
            <button className="view-collection-button">Veja a Coleção</button>
          </div>
        </div>
      
      {/* Seção de Serviços */}

      <div className="services-section">
        <div className="service-item">
          <span className="service-icon">🚚</span>
          <p className="service-text">Transporte Gratuito</p> 
          <p className="section-subtitle">Entrega gratis para pedidos de até 100$</p>
        </div>
        <div className="service-item">
          <span className="service-icon">🔄</span>
          <p className="service-text">Facil Devolução</p>
          <p className="section-subtitle">Devolução gratis dentro de 30 dias</p>
        </div>
        <div className="service-item">
          <span className="service-icon">🔒</span>
          <p className="service-text">Pagamento Seguro</p>
          <p className="section-subtitle">Seus dados de pagamentos estão seguros com a gente!</p>
        </div>
      </div>
    </div>
      {/* Seção de Categorias */}
      <div className="shop-by-category">
        <h2 className="section-title">Produtos por Categoria</h2>
        <p className="section-subtitle">Exploque nossas coleções meticulosamente pensada para cada ocasião!</p>
        <div className="category-list">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>

      {/* Seção de Produtos em Destaque */}
      <div className="featured-products">
        <h2 className="section-title">Produtos de Destaque</h2>
        <p className="section-subtitle">Favoritos da ultima coleção</p>
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button className="load-more-button">Ver todos os produtos <span className="arrow-icon">→</span></button>
      </div>
    </div>
  );
}

export default App;
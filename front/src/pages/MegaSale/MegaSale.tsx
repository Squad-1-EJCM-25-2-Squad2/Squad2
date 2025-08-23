import './MegaSale.css';

const MegaSale = () => {
  
  const products = [
    { id: 1, category: 'Tops', name: 'Premium Cotton T-Shirt', rating: 4.8, reviews: 124, price: 29, oldPrice: 49, discount: '-41%', tag: 'Limited Time' },
    { id: 2, category: 'Bottoms', name: 'Designer Jeans', rating: 4.9, reviews: 89, price: 79, oldPrice: 120, discount: '-34%', tag: 'Best Seller' },
    { id: 3, category: 'Shoes', name: 'Leather Ankle Boots', rating: 4.7, reviews: 203, price: 99, oldPrice: 180, discount: '-45%', tag: 'Flash Sale' },
    { id: 4, category: 'Tops', name: 'Cashmere Sweater', rating: 4.8, reviews: 156, price: 120, oldPrice: 200, discount: '-40%', tag: 'Luxury Sale' },
    { id: 5, category: 'Dresses', name: 'Summer Dress', rating: 4.6, reviews: 91, price: 49, oldPrice: 89, discount: '-45%', tag: 'Summer Sale' },
    { id: 6, category: 'Shoes', name: 'Athletic Sneakers', rating: 4.5, reviews: 234, price: 84, oldPrice: 140, discount: '-40%', tag: 'Sport Sale' },
  ];

  return (
    
    <>
      
      <section className="mega-sale-banner">
        <h1>MEGA SALE</h1>
        <p>Up to 70% off on selected items. Limited time offer - don't miss out!</p>
        <div className="buttons-container">
          <button>Free shipping on all sale items</button>
          <button>Extra 10% off for members</button>
        </div>
      </section>
      
      
      <section className="sales-info-container">
        <div className="sales-info-card">
          <h2>70%</h2>
          <p>Max Discount</p>
        </div>
        <div className="sales-info-card">
          <h2>500+</h2>
          <p>Items on Sale</p>
        </div>
        <div className="sales-info-card">
          <h2>48h</h2>
          <p>Time Left</p>
        </div>
        <div className="sales-info-card">
          <h2>Free</h2>
          <p>Shipping</p>
        </div>
      </section>

     
      
      <main className="shop-container">
        
        <aside className="filters-sidebar">
          <div className="filter-group">
            <div>
            <img src="/src/assets/Filtro.jpeg"  alt="Filtro" />
            <h3>Category</h3>
            </div>
            <div className="filter-option"><input type="radio" name="category" id="tops" /> <label htmlFor="tops">Tops</label></div>
            <div className="filter-option"><input type="radio" name="category" id="bottoms" /> <label htmlFor="bottoms">Bottoms</label></div>
            <div className="filter-option"><input type="radio" name="category" id="dresses" /> <label htmlFor="dresses">Dresses</label></div>
            <div className="filter-option"><input type="radio" name="category" id="shoes" /> <label htmlFor="shoes">Shoes</label></div>
            <div className="filter-option"><input type="radio" name="category" id="accessories" /> <label htmlFor="accessories">Accessories</label></div>
          </div>
          
          <div className="filter-group">
        
            <h3>Size</h3>
            
            <div className="size-options">
              <div className="filter-option"><input type="radio" name="size" id="xs" /> <label htmlFor="xs">XS</label></div>
              <div className="filter-option"><input type="radio" name="size" id="s" /> <label htmlFor="s">S</label></div>
              <div className="filter-option"><input type="radio" name="size" id="m" /> <label htmlFor="m">M</label></div>
              <div className="filter-option"><input type="radio" name="size" id="l" /> <label htmlFor="l">L</label></div>
              <div className="filter-option"><input type="radio" name="size" id="xl" /> <label htmlFor="xl">XL</label></div>
              <div className="filter-option"><input type="radio" name="size" id="6" /> <label htmlFor="6">6</label></div>
              <div className="filter-option"><input type="radio" name="size" id="7" /> <label htmlFor="7">7</label></div>
              <div className="filter-option"><input type="radio" name="size" id="8" /> <label htmlFor="8">8</label></div>
              <div className="filter-option"><input type="radio" name="size" id="9" /> <label htmlFor="9">9</label></div>
              <div className="filter-option"><input type="radio" name="size" id="10" /> <label htmlFor="10">10</label></div>
              <div className="filter-option"><input type="radio" name="size" id="11" /> <label htmlFor="11">11</label></div>
              <div className="filter-option"><input type="radio" name="size" id="28" /> <label htmlFor="28">28</label></div>
              <div className="filter-option"><input type="radio" name="size" id="30" /> <label htmlFor="30">30</label></div>
              <div className="filter-option"><input type="radio" name="size" id="32" /> <label htmlFor="32">32</label></div>
              <div className="filter-option"><input type="radio" name="size" id="34" /> <label htmlFor="34">34</label></div>
              <div className="filter-option"><input type="radio" name="size" id="36" /> <label htmlFor="36">36</label></div>
            </div>
          </div>
          
          <div className="filter-group">
            <h3>Price Range</h3>
            <select className="price-range-select">
              <option>All Prices</option>
              <option>$0 - $50</option>
              <option>$50 - $100</option>
              <option>$100 - $200</option>
            </select>
          </div>
        </aside>
        
        
        <section className="product-area">
          <header className="product-grid-header">
            <div className="product-count">
              <h2>Sale Items</h2>
              <p>{products.length} products found</p>
            </div>
            <div className="product-view-options">
              <select>
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <span className="view-icon active"> &#9638; </span>
              <span className="view-icon"> &#9776; </span>
            </div>
          </header>
          
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <div className="image-placeholder"></div>
                  <span className="product-badge discount">{product.discount}</span>
                  <span className="product-badge tag">{product.tag}</span>
                </div>
                <div className="product-info">
                  <div className="product-meta">
                    <span className="product-category">{product.category}</span>
                    <span className="product-rating">&#9733; {product.rating} ({product.reviews})</span>
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">
                    <span className="current-price">${product.price}</span>
                    <span className="old-price">${product.oldPrice}</span>
                    <span className="save-badge">Save ${product.oldPrice - product.price}</span>
                  </div>
                </div>
                <div className="product-actions">
                  <button className="add-to-cart-btn">
                    <img src="/src/assets/iconeCarrinho.jpeg" alt="Add to Cart" className="iconeCarrinho" />
                    <span>Add to Cart</span>
                    </button>


                
                
                  <button className="wishlist-btn">&#9825;</button>
                </div>
              </div>
            ))}
          </div>

          
          <div className="load-more-container">
            <button className="load-more-btn">Load More Products</button>
          </div>
        </section>
      </main>
   
    
    </>
  );
};

export default MegaSale;
import "./Header.css"


const Header = () => {
  return (

<header>
    <section className="headerUm">
        <h3>
            Free shipping on orders over $100| New arrivals daily
        </h3>
    </section>
    
    <section className="headerDois">
        <div className="barraUm">
        <img src="/src/assets/barra.jpeg" alt="menu" />
        </div>
        
        <div className="logo">
            <a href="/home">
            <img src="/src/assets/logo.jpeg" alt="Logo" />
            </a>
        </div>
        
        <nav className="navHeader">
          <a href="/New in">New in</a>
          <a href="/products">Women</a>
          <a href="/men">Men</a>
          <a href="/sale">sale</a>
         </nav>

         <div className="barraDePesquisa">
            
            <input type="text" placeholder="Search for porducts..." />
            
            <div className="lupa">
                <img src="/src/assets/lupa.jpeg" alt="lupa" />
            </div>
        </div>

        <div className="icons">
            <nav>
                <div className="lupaDois">
                <img src="/src/assets/lupa.jpeg" alt="lupa" />
                </div>
                
                <a href="/favoritos">
                <img src="/src/assets/heart.jpeg" alt ="coração" />
                </a>

                <div className ="barraDois">
                <img src="/src/assets/barra.jpeg" alt ="barra" />
                </div>

                <a href="/usuario">
                <img src="/src/assets/usuario.jpeg" alt="foto do usuario" />
                </a>

                <a href="/carrinho">
                <img src="src/assets/carrinho.jpeg"   alt="carrinho" />
                </a>
            </nav>

            
                
            

        </div>               
    </section>
</header>

  );
};
export default Header;
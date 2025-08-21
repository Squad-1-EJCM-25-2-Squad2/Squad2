

import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import MegaSale from './pages/MegaSale/MegaSale';

function App() {
  const isMegaSaleActive = true; 

  return (
    <div>
      <Header />
      {isMegaSaleActive ? <MegaSale /> : <div>Conteúdo da outra página</div>}
      {isMegaSaleActive ? (
        <Footer 
          type="promotional" // Agora o 'type' é válido
          title="Don't Miss Future Sales!" 
          text="Subscribe to our newsletter and be the first to know about exclusive sales and special offers." 
          backgroundColor="roxo"
        />
      ) : (
        <Footer 
          type="default" // Agora o 'type' é válido
          title="Stay in Style" 
          text="Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and style tips." 
          backgroundColor="preto"
        />
      )}
    </div>
  );
}

export default App;
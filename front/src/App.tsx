import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MegaSale from "./pages/MegaSale/MegaSale";
import WishlistPage from "./pages/Wishlist/WishlistPage";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home.tsx";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/megasale" element={<MegaSale />} />
        <Route path="/" element={<Home />} /> {/* página inicial */}
      </Routes>
      <Footer
      title="Minha loja" 
      text="Todos os direitos reservados © 2025" 
      backgroundColor="roxo" 
      />
    </Router>
  
  );
}

export default App;

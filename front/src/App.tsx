//import Home from "./pages/Home/Home.tsx";
import React from "react";
import WishlistPage from './pages/Wishlist/WishlistPage.tsx';

// O componente App.tsx atua como uma rota para todas as páginas.
// Neste caso, ele renderiza apenas a Home.
const App: React.FC = () => {
    return (
        <WishlistPage/>
    );
}

export default App;
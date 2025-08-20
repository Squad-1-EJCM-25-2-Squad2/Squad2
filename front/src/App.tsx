import Home from "./pages/Home/Home.tsx";
import React from "react";

// O componente App.tsx atua como uma rota para todas as páginas.
// Neste caso, ele renderiza apenas a Home.
const App: React.FC = () => {
    return (
        <Home />
    );
}

export default App;
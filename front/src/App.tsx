import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login";
import { Center } from "@chakra-ui/react";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <div>
      <Header />
      <Center>
        <Cadastro />
      </Center>
    </div>
  );
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./pages/Home/Home.tsx";// Home
import { Provider } from "./components/ui/provider.tsx";
import { Theme } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Theme appearance="light">
        <App />
      </Theme>
    </Provider>
  </StrictMode>
);

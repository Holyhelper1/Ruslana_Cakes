import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../css/style.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { ScrollToTop } from "./Utils/ScrolltoTop.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <ScrollToTop />
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>
);

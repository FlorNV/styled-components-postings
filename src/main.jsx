import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { PostingsProvider } from "./contexts/PostingsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostingsProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </PostingsProvider>
  </React.StrictMode>
);

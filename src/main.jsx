import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PostingsProvider } from "./contexts/PostingsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PostingsProvider>
      <App />
    </PostingsProvider>
  </React.StrictMode>
);

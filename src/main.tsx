import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import BlurEffect from "./components/BlurEffect.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BlurEffect></BlurEffect>
    <App />
  </React.StrictMode>
);

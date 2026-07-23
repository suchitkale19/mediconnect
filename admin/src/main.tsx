import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AdminProvider from "./context/AdminProvider.tsx";
import DoctorProvider from "./context/DoctorProvider.tsx";
import AppProvider from "./context/AppProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <DoctorProvider>
          <AppProvider>
            <App />
          </AppProvider>
        </DoctorProvider>
      </AdminProvider>
    </BrowserRouter>
  </StrictMode>,
);

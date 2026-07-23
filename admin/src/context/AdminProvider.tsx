import { useState, type ReactNode } from "react";

import { AdminContext } from "./AdminContext";

interface AdminProviderProps {
  children: ReactNode;
}

const AdminProvider = ({ children }: AdminProviderProps) => {
  const [atoken, setAtoken] = useState(
    localStorage.getItem("atoken") ? localStorage.getItem("atoken") : "",
  );
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <AdminContext.Provider
      value={{
        atoken,
        setAtoken,
        backendUrl,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;

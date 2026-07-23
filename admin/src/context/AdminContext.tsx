import { createContext, useContext } from "react";

interface AdminContextType {
  atoken: string | null;
  setAtoken: React.Dispatch<React.SetStateAction<string | null>>;
  backendUrl: string;
}

export const AdminContext = createContext<AdminContextType | undefined>(
  undefined,
);

export const useAdminContext = () => {
  const context = useContext(AdminContext);

  if (!context) {
    throw new Error("useAdminContext must be used within AdminProvider");
  }

  return context;
};

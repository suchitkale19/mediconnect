import type { ReactNode } from "react";
import { doctors } from "../assets/assets_frontend/assets";
import { AppContext } from "./AppContext";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const currencySymbol = "₹";
  return (
    <AppContext.Provider
      value={{
        doctors,
        currencySymbol,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

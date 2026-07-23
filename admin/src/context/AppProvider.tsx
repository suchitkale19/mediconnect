import type { ReactNode } from "react";

import { AppContext } from "./AppContext";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const currencySymbol = "₹";
  return (
    <AppContext.Provider
      value={{
        currencySymbol,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

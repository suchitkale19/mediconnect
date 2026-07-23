import type { ReactNode } from "react";

import { DoctorContext } from "./DoctorContext";

interface DoctorProviderProps {
  children: ReactNode;
}

const DoctorProvider = ({ children }: DoctorProviderProps) => {
  const currencySymbol = "₹";
  return (
    <DoctorContext.Provider
      value={{
        currencySymbol,
      }}
    >
      {children}
    </DoctorContext.Provider>
  );
};

export default DoctorProvider;

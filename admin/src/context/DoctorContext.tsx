import { createContext, useContext } from "react";

interface DoctorContextType {
  //   doctors: typeof doctors;
  currencySymbol: string;
}

export const DoctorContext = createContext<DoctorContextType | undefined>(
  undefined,
);

export const useDoctorContext = () => {
  const context = useContext(DoctorContext);

  if (!context) {
    throw new Error("useDoctorContext must be used within DoctorProvider");
  }

  return context;
};

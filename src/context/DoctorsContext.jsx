import { createContext, useContext } from "react";
import useFetchDoctors from "../hooks/useFetchDoctors";
const DoctorsContext = createContext();
export function DoctorsProvider({ children }) {
  const { doctors, isLoading, error } = useFetchDoctors();

  return (
    <DoctorsContext.Provider value={{ doctors, isLoading, error }}>
      {children}
    </DoctorsContext.Provider>
  );
}
export function useDoctors() {
  const context = useContext(DoctorsContext);
  if (context === undefined) {
    throw new Error("useDoctors must be used within DoctorsProvider");
  }
  return context;
}

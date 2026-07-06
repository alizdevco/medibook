import { createContext, useContext, useState } from "react";

const AppointmentsContext = createContext();
export default function AppointmentsProvider({ children }) {
  const [appointments, setAppointments] = useState([]);
  console.log(appointments);
  function removeAppointment(name) {
    setAppointments((prev) => prev.filter((item) => item.doctorName !== name));
  }
  const value = { appointments, setAppointments, removeAppointment };
  return (
    <AppointmentsContext.Provider value={value}>
      {children}
    </AppointmentsContext.Provider>
  );
}
export function useAppointments() {
  const context = useContext(AppointmentsContext);
  if (context === undefined) {
    throw new Error("useDoctors must be used within DoctorsProvider");
  }
  return context;
}

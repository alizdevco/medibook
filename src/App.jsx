import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import AppointmentsProvider from "./context/AppointmentsContext ";
import AppLayout from "./pages/AppLayout";
import { doctorProfileLoader, doctorsLoader } from "./api/doctors";
const Home = lazy(() => import("./pages/Home"));
const Doctors = lazy(() => import("./pages/Doctors"));
const DoctorProfile = lazy(() => import("./pages/DoctorProfile"));
const Appointments = lazy(() => import("./pages/Appointments"));
import NotFound from "./pages/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    id: "root",
    loader: doctorsLoader,
    children: [
      { path: "/", element: <Home /> },
      { path: "/doctors", element: <Doctors /> },
      {
        path: "/doctors/:id",
        element: <DoctorProfile />,
        loader: doctorProfileLoader,
        errorElement: <NotFound />,
      },
      { path: "/appointments", element: <Appointments /> },
    ],
  },
]);
export default function App() {
  return (
    <AppointmentsProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppointmentsProvider>
  );
}

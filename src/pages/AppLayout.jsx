import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import PageLoader from "./PageLoader";
import { Suspense } from "react";

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem 0" }}>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

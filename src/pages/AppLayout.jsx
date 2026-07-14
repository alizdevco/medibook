import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import PageLoader from "./PageLoader";
import { Suspense } from "react";
import ScrollToTop from "../Components/ScrollToTop";

export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem 0" }}>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

import Cta from "../Components/Cta";
import Hero from "../Components/Hero";
import SpecialtySection from "../Components/Specialtysection";
import TopRatedSection from "../Components/TopRatedSection";
import { useRouteLoaderData } from "react-router-dom";
export default function Home() {
  const doctors = useRouteLoaderData("root");
  return (
    <>
      <Hero />
      <SpecialtySection />
      <TopRatedSection doctors={doctors} />
      <Cta />
    </>
  );
}

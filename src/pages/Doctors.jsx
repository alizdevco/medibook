import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouteLoaderData, useSearchParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import DoctorCard from "../Components/DoctorCard";
import HeroSearch from "../Components/HeroSearch";
import useFilters from "../hooks/useFilter";
import FilterSidebar from "../Components/FilterSidebar";
import useFilteredDoctors from "../hooks/useFilteredDoctors";
import ResultsHeader from "../Components/ResultsHeader";
import Pagination from "../Components/Pagination";
export default function Doctors() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function onToggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  const [searchParams] = useSearchParams();
  const specialty = searchParams.get("specialty");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const start = (currentPage - 1) * pageSize;
  const end = currentPage * pageSize;
  const [sortBy, setSortBy] = useState(null);
  const [appliedSearch, setAppliedSearch] = useState({ name: "", city: "" });
  const doctors = useRouteLoaderData("root");
  const { filters } = useFilters();

  const initialValue = useCallback(
    function () {
      filters.setAvailableOnly(false);
      filters.setCity("");
      filters.setInsurance([]);
      filters.setMinRating(0);
      filters.setSpecialty([]);
    },
    [filters],
  );
  const filteredDoctors = useFilteredDoctors({
    doctors,
    appliedSearch,
    filters,
  });

  const sortedDoctors = useMemo(() => {
    return [...filteredDoctors].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "experience") return b.experience - a.experience;
      if (sortBy === "price") return a.price - b.price;
      return 0;
    });
  }, [filteredDoctors, sortBy]);
  const docGrid = useMemo(
    () => sortedDoctors.slice(start, end),
    [sortedDoctors, start, end],
  );
  const totalPages = Math.ceil(sortedDoctors.length / pageSize);
  useEffect(
    function () {
      if (specialty) {
        filters.setSpecialty([specialty]);
      }
    },
    [filters.setSpecialty, specialty],
  );

  return (
    <>
      <div className="search-header">
        <div className="search-header-inner">
          <HeroSearch onSearch={setAppliedSearch} />
        </div>
      </div>
      <div className="doctors-layout">
        <FilterSidebar
          filters={filters}
          initialValue={initialValue}
          isOpen={isSidebarOpen}
        />
        <div>
          <ResultsHeader
            onToggleSidebar={onToggleSidebar}
            sortBy={sortBy}
            onSortBy={setSortBy}
            count={filteredDoctors.length}
            appliedSearch={appliedSearch}
          />

          <DoctorGrid doctors={docGrid} />

          <Pagination
            currentPage={currentPage}
            onCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  );
}

function DoctorGrid({ doctors }) {
  return (
    <div className="doctor-grid">
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
}

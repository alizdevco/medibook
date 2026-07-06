import { useMemo } from "react";

export default function useFilteredDoctors({
  doctors,
  appliedSearch,
  filters,
}) {
  return useMemo(() => {
    let result = doctors;

    result = result.filter((doctor) => {
      const matchesNameOrSpecialty =
        doctor.name.toLowerCase().includes(appliedSearch.name.toLowerCase()) ||
        doctor.specialty
          .toLowerCase()
          .includes(appliedSearch.name.toLowerCase());

      const matchesCity = doctor.city
        .toLowerCase()
        .includes(appliedSearch.city.toLowerCase());

      return matchesNameOrSpecialty && matchesCity;
    });

    if (filters.specialty.length > 0)
      result = result.filter((d) => filters.specialty.includes(d.specialty));

    if (filters.city) result = result.filter((d) => d.city === filters.city);

    if (filters.insurance.length > 0)
      result = result.filter((d) =>
        filters.insurance.some((ins) => d.insurance?.includes(ins)),
      );

    if (filters.minRating > 0)
      result = result.filter((d) => d.rating >= filters.minRating);

    if (filters.availableOnly)
      result = result.filter((d) => d.available === true);

    return result;
  }, [
    doctors,
    appliedSearch,
    filters.specialty,
    filters.city,
    filters.insurance,
    filters.minRating,
    filters.availableOnly,
  ]);
}

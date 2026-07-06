// hooks/useFilters.js
import { useMemo, useState } from "react";

export default function useFilters() {
  const [specialty, setSpecialty] = useState([]);
  const [city, setCity] = useState("");
  const [insurance, setInsurance] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [availableOnly, setAvailableOnly] = useState(false);
  const filters = useMemo(() => {
    return {
      city: city,
      setCity: setCity,
      setSpecialty: setSpecialty,
      setInsurance: setInsurance,
      setMinRating: setMinRating,
      setAvailableOnly: setAvailableOnly,
      insurance: insurance,
      specialty: specialty,
      minRating: minRating,
      availableOnly: availableOnly,
    };
  }, [availableOnly, minRating, insurance, city, specialty]);
  return {
    filters,
  };
}

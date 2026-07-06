import { useEffect, useState } from "react";
import { getAllDoctors } from "../api/doctors";
function useFetchDoctors() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);

  useEffect(function () {
    async function fetchApi() {
      setIsLoading(true);
      setError("");
      try {
        const data = await getAllDoctors();
        setDoctors(data);
      } catch (err) {
        setError("Failed to load doctors");
      } finally {
        setIsLoading(false);
      }
    }
    fetchApi();
  }, []);

  return { doctors, isLoading, error };
}
export default useFetchDoctors;

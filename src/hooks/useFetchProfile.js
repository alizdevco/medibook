import { useEffect, useState } from "react";
import { getDoctorById } from "../api/doctors";

export default function useFetchProfile(id) {
  const [doctor, setDoctor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchDoctor() {
      setIsLoading(true);
      try {
        const data = await getDoctorById(id);
        setDoctor(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDoctor();
  }, [id]);
  return { doctor, isLoading, error };
}

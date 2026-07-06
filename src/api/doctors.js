// src/api/doctors.js

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const RESOURCE_NAME = "dotcors";

async function fetchFromApi(endpoint = "") {
  try {
    const response = await fetch(`${BASE_URL}/${RESOURCE_NAME}${endpoint}`);

    if (!response.ok) {
      throw new Error(`خطای شبکه: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API Fetch Error [${endpoint}]:`, error);
    throw error;
  }
}
export async function getAllDoctors() {
  return await fetchFromApi();
}

export async function getDoctorById(id) {
  return await fetchFromApi(`/${id}`);
}
export async function doctorsLoader() {
  return await getAllDoctors();
}
export async function doctorProfileLoader({ params }) {
  return await getDoctorById(params.id);
}

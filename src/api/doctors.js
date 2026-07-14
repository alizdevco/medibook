// src/api/doctors.js

import { supabase } from "../supabase";
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
  const { data, error } = await supabase.from("doctors").select("*");
  if (error) {
    console.error("error");
    throw new Error();
  }
  return data;
}

export async function getDoctorById(id) {
  const { data, error } = await supabase
    .from("doctors")
    .select("*")
    .eq("id", id);

  return data[0];
}
export async function doctorsLoader() {
  return await getAllDoctors();
}
export async function doctorProfileLoader({ params }) {
  return await getDoctorById(params.id);
}

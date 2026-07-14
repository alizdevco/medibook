import { supabase } from "../supabase";

export async function createAppointment(
  doctor_id,
  date,
  time,
  location,
  total,
  status,
  patient_id,
) {
  const { data, error } = await supabase
    .from("appointments")
    .insert({ doctor_id, date, time, location, total, status, patient_id })
    .select("*");

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  return data;
}
export async function getMyAppointments() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("appointments")
    .select("*, doctors(*)")
    .eq("patient_id", user.id);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  return data;
}
export async function cancelAppointment(id) {
  const { data, error } = await supabase
    .from("appointments")
    .update({ status: "cancelled" })
    .eq("id", id);
  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  return data;
}

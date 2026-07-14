import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "SELECT":
      return { ...state, status: "selecting" };
    case "CONFIRM":
      return { ...state, status: "confirmed" };
    case "EDIT":
      return { ...state, status: "selecting" };
    default:
      return state;
  }
}
export default function useBookingStatus() {
  const [state, dispatch] = useReducer(reducer, { status: "idle" });
  function onSelect() {
    dispatch({ type: "SELECT" });
  }
  function onConfirm() {
    dispatch({ type: "CONFIRM" });
  }
  function onEdit(doctor) {
    dispatch({ type: "EDIT" });
  }
  return {
    bookingProp: { onSelect, status: state.status, onConfirm, onEdit },
  };
}

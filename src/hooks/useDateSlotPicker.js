import { useMemo, useState } from "react";

export default function useDateSlotPicker(days, slotsByDay, onSelect) {
  const [selectedDate, setSelectedDate] = useState(days[1]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [startIndex, setStartIndex] = useState(1);
  const slots = selectedDate ? (slotsByDay[selectedDate.dow] ?? []) : [];
  const visibleDays = useMemo(
    () => days.slice(startIndex, startIndex + 7),
    [startIndex],
  );
  const morningSlots = useMemo(
    () => slots.filter((s) => s.includes("AM")),
    [slots],
  );
  const afternoonSlots = useMemo(
    () => slots.filter((s) => s.includes("PM")),
    [slots],
  );
  function onDateSelect(day) {
    if (!day.disabled) {
      setSelectedDate(day);
      setSelectedSlot(null);
    }
  }
  function onNextIndex() {
    setStartIndex((i) => i - 1);
  }
  function onPrevIndex() {
    setStartIndex((i) => i + 1);
  }
  function onSelectedSlot(slot) {
    setSelectedSlot(slot);
    onSelect();
  }

  return {
    slotProp: {
      selectedDate,
      onDateSelect,
      selectedSlot,
      onSelectedSlot,
      startIndex,
      onNextIndex,
      onPrevIndex,
      visibleDays,
      morningSlots,
      afternoonSlots,
    },
  };
}

import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export default function useWorkoutsContext() {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside a WorkoutscontextProvider"
    );
  }

  return context;
}

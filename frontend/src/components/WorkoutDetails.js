import useWorkoutsContext from "../hooks/useWorkoutsContext";
import { BASE_URL } from "../services/helper";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    const response = await fetch(
      "https://gym-tracker-backend.onrender.com/api/workouts" + workout._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <>
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p>
          <strong>Load (kg) : </strong>
          {workout.load}
        </p>
        <p>
          <strong>Reps : </strong>
          {workout.reps}
        </p>
        <p>
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </p>
        <span className="material-symbols-outlined" onClick={handleClick}>
          delete
        </span>
      </div>
    </>
  );
}

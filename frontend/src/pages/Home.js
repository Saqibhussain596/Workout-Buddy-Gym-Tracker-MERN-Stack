import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import useWorkoutsContext from "../hooks/useWorkoutsContext";
export default function Home() {
  const { workouts, dispatch } = useWorkoutsContext();
  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    fetchWorkout();
  }, [dispatch]);

  return (
    <>
      <div className="home">
        <div className="workouts">
          {workouts.length ? (
            workouts.map((workout) => {
              return <WorkoutDetails key={workout._id} workout={workout} />;
            })
          ) : (
            <p className="empty">
              No Workouts yet 💪 <br /> Add some to get started...
            </p>
          )}
        </div>
        <WorkoutForm />
      </div>
    </>
  );
}

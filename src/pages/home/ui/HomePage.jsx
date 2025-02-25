import { useDispatch } from "react-redux";
import { SurvivorList } from "./SurvivorList/SurvivorList";
import { addSurvivor } from "../model/SurvivorsSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Home
      <button onClick={() => dispatch(addSurvivor())}>
        Добавить участника
      </button>
      <SurvivorList />
    </div>
  );
};

import { useDispatch } from "react-redux";
import { removeSurvivor } from "pages/home/model/SurvivorsSlice";

export const SurvivorCard = ({ survivor }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(removeSurvivor(survivor.id))}>
        Удалить
      </button>
      {survivor.name} - {survivor.id}
    </div>
  );
};

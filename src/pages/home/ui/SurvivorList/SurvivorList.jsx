import { useSelector } from "react-redux";
import { SurvivorCard } from "../SurvivorCard/SurvivorCard";

export const SurvivorList = () => {
  const survivors = useSelector((state) => state.survivors.survivors);

  return (
    <div>
      {survivors.map((survivor) => (
        <SurvivorCard key={survivor.id} survivor={survivor} />
      ))}
    </div>
  );
};

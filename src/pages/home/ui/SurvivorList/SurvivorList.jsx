import { SurvivorCard } from "../SurvivorCard/SurvivorCard";
import { useSelector } from "react-redux";

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

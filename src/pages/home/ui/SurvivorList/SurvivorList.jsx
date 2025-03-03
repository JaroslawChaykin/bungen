import { useSelector } from "react-redux";

import { SurvivorCard } from "../SurvivorCard/SurvivorCard";

export const SurvivorList = ({ allIsShow }) => {
  const survivors = useSelector((state) => state.survivors.survivors);

  return (
    <div className="flex gap-2 flex-wrap">
      {survivors.map((survivor) => (
        <SurvivorCard
          allIsShow={allIsShow}
          key={survivor.id}
          survivor={survivor}
        />
      ))}
    </div>
  );
};

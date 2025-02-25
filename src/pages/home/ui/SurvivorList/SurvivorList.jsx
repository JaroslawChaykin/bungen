import { useState } from "react";
import { SurvivorCard } from "../SurvivorCard/SurvivorCard";

export const SurvivorList = () => {
  const [survivors, setSurvivors] = useState([
    {
      name: "Oleg",
      age: "12",
    },
  ]);

  return (
    <div>
      {survivors.map((survivor) => (
        <SurvivorCard key={survivor.name} survivor={survivor} />
      ))}
    </div>
  );
};

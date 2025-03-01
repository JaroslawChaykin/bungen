import { useState } from "react";
import { useDispatch } from "react-redux";

import { Header } from "./Header/Header";
import { BunButton } from "src/shared/ui/BunButton/BunButton";

import { addSurvivor } from "../model/SurvivorsSlice";
import { SurvivorList } from "./SurvivorList/SurvivorList";

import bgImage from "../assets/bg.jpg";

export const HomePage = () => {
  const [cardIsShow, setCardIsShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="relative h-screen overflow-hidden bg-black text-white ">
      <div className="absolute">
        <img src={bgImage} alt="background" />
      </div>
      <div className="absolute">
        <Header>
          <BunButton onClick={() => dispatch(addSurvivor())}>
            Добавить участника
          </BunButton>
          <BunButton
            onClick={() => setCardIsShow((prev) => (prev ? false : true))}
          >
            Открыть всех участников
          </BunButton>
        </Header>
        <SurvivorList />
      </div>
    </div>
  );
};

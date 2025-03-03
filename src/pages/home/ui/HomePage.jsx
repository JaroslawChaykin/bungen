import { useState } from "react";
import { useDispatch } from "react-redux";

import { Header } from "./Header/Header";
import { BunButton } from "src/shared/ui/BunButton";
import { Container } from "src/shared/ui/Container";

import { addSurvivor } from "../model/SurvivorsSlice";
import { SurvivorList } from "./SurvivorList/SurvivorList";

import bgImage from "../assets/bg.jpg";

export const HomePage = () => {
  const [allIsShow, setAllIsShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="relative h-screen overflow-hidden bg-black text-white ">
      <div className="absolute h-full w-full">
        <img
          className="h-full w-full object-cover blur-sm"
          src={bgImage}
          alt="background"
        />
      </div>
      <div className="absolute">
        <Header>
          <BunButton onClick={() => dispatch(addSurvivor())}>
            Добавить участника
          </BunButton>
          <BunButton onClick={() => setAllIsShow((prev) => !prev)}>
            Открыть всех участников
          </BunButton>
        </Header>
        <Container>
          <SurvivorList allIsShow={allIsShow} />
        </Container>
      </div>
    </div>
  );
};

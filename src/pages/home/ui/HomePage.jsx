import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "./Header/Header";
import { BunButton } from "src/shared/ui/BunButton/BunButton";

import { addSurvivor } from "../model/SurvivorsSlice";
import { SurvivorList } from "./SurvivorList/SurvivorList";

import bgImage from "../assets/bg.jpg";
import Container from "src/shared/Container";

export const HomePage = () => {
  const [allIsShow, setAllIsShow] = useState(false);
  const survivors = useSelector((state) => state.survivors.survivors);
  const dispatch = useDispatch();

  return (
    <div className="relative h-screen overflow-hidden bg-black text-white ">
      <div className="absolute h-full w-full">
        <img
          className="h-full w-full object-cover"
          src={bgImage}
          alt="background"
        />
      </div>
      <div className="absolute">
        <Header>
          <BunButton onClick={() => dispatch(addSurvivor())}>
            Добавить участника {survivors.length}
          </BunButton>
          <BunButton
            onClick={() => setAllIsShow((prev) => (prev ? false : true))}
          >
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

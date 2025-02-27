import { useDispatch } from "react-redux";
import { BunButton } from "shared/ui/BunButton/BunButton";
import { Header } from "./Header/Header";

import { addSurvivor } from "../model/SurvivorsSlice";
import { SurvivorList } from "./SurvivorList/SurvivorList";

export const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Header>
        <BunButton onClick={() => dispatch(addSurvivor())}>
          Добавить участника
        </BunButton>
      </Header>
      <SurvivorList />
    </div>
  );
};

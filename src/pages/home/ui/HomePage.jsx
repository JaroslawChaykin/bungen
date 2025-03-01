import { useDispatch } from "react-redux";
import { Header } from "./Header/Header";

import { addSurvivor } from "../model/SurvivorsSlice";
import { SurvivorList } from "./SurvivorList/SurvivorList";
import { BunButton } from "src/shared/ui/BunButton/BunButton";

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

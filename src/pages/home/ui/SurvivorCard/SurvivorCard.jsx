import { useState } from "react";
import { useDispatch } from "react-redux";
import { AiFillDelete, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { CharacteristicRow } from "../CharacteristicRow/CharacteristicRow";
import { BunIconButton } from "src/shared/ui/BunIconButton";
import { BunInput } from "src/shared/ui/BunInput";

import { removeSurvivor } from "../../model/SurvivorsSlice";

export const SurvivorCard = ({ survivor, allIsShow }) => {
  const [name, setName] = useState("");
  const [cardIsShow, setCardIsShow] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="w-[300px] h-[390px] rounded-2xl bg-linear-to-r from-pink-300/20 to-gray-800/10 backdrop-blur-xl">
      <div className="flex items-center justify-between pl-5 pr-3 h-14">
        <span>
          <BunInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Ваше имя"}
          />
        </span>
        <div className="flex gap-1">
          <span className="cursor-pointer">
            {cardIsShow ? (
              <BunIconButton onClick={() => setCardIsShow((prev) => !prev)}>
                <AiFillEyeInvisible size={"24px"} />
              </BunIconButton>
            ) : (
              <BunIconButton onClick={() => setCardIsShow((prev) => !prev)}>
                <AiFillEye size={"24px"} />
              </BunIconButton>
            )}
          </span>
          <span>
            <BunIconButton
              onClick={() => dispatch(removeSurvivor(survivor.id))}
            >
              <AiFillDelete size={"24px"} />
            </BunIconButton>
          </span>
        </div>
      </div>
      <div className="px-3">
        <CharacteristicRow
          allIsShow={allIsShow}
          cardIsShow={cardIsShow}
          title={"Генетика"}
          value={`${survivor.sex} ${survivor.age}, ${
            survivor.fertility ? "+" : "-"
          }`}
        />
        <CharacteristicRow
          allIsShow={allIsShow}
          cardIsShow={cardIsShow}
          title={"Профессия"}
          value={survivor.profession}
        />
        <CharacteristicRow
          allIsShow={allIsShow}
          cardIsShow={cardIsShow}
          title={"Хобби"}
          value={survivor.hobby}
        />
        <CharacteristicRow
          allIsShow={allIsShow}
          cardIsShow={cardIsShow}
          title={"Фобия"}
          value={survivor.phobia}
        />
        <CharacteristicRow
          allIsShow={allIsShow}
          cardIsShow={cardIsShow}
          title={"Факт 1"}
          value={survivor.fact1}
        />
        <CharacteristicRow
          allIsShow={allIsShow}
          cardIsShow={cardIsShow}
          title={"Факт 2"}
          value={survivor.fact2}
        />
        <CharacteristicRow
          allIsShow={allIsShow}
          cardIsShow={cardIsShow}
          title={"Багаж"}
          value={survivor.baggage}
        />
        <CharacteristicRow
          allIsShow={allIsShow}
          cardIsShow={cardIsShow}
          title={"Здоровье"}
          value={survivor.health}
        />
      </div>
    </div>
  );
};

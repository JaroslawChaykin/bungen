import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BunIconButton } from "src/shared/ui/BunIconButton";

export const CharacteristicRow = ({
  title,
  value,
  cardIsShow = false,
  allIsShow = false,
}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="h-9 mt-1 px-2 bg-linear-to-r rounded-md from-gray-800/20 to-pink-300/10">
      <div className="flex items-center justify-between h-full text-sm">
        <div>
          <span className="font-bold">{title}</span>:{" "}
          <span>
            {allIsShow || cardIsShow || isShow ? value : "*************"}
          </span>
        </div>
        <div>
          {isShow ? (
            <BunIconButton onClick={() => setIsShow((prev) => !prev)}>
              <AiFillEyeInvisible size={"16px"} />
            </BunIconButton>
          ) : (
            <BunIconButton onClick={() => setIsShow((prev) => !prev)}>
              <AiFillEye size={"16px"} />
            </BunIconButton>
          )}
        </div>
      </div>
    </div>
  );
};

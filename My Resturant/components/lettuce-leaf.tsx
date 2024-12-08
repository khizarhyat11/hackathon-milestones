import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type LettuceLeafType = {
  className?: string;
  unsplashOFismyezPnY: string;
  prop?: string;
  lettuceLeaf?: string;

  /** Style props */
  lettuceLeafTop?: CSSProperties["top"];
  lettuceLeafLeft?: CSSProperties["left"];
};

const LettuceLeaf: NextPage<LettuceLeafType> = ({
  className = "",
  unsplashOFismyezPnY,
  prop,
  lettuceLeaf,
  lettuceLeafTop,
  lettuceLeafLeft,
}) => {
  const lettuceLeafStyle: CSSProperties = useMemo(() => {
    return {
      top: lettuceLeafTop,
      left: lettuceLeafLeft,
    };
  }, [lettuceLeafTop, lettuceLeafLeft]);

  return (
    <div
      className={`absolute top-[244px] left-[536px] w-[376px] h-[79px] text-left text-lg text-fffffff font-inter ${className}`}
      style={lettuceLeafStyle}
    >
      <Image
        className="absolute h-full w-[21.28%] top-[0%] right-[78.72%] bottom-[0%] left-[0%] rounded-md max-w-full overflow-hidden max-h-full object-cover"
        width={80}
        height={79}
        alt=""
        src={unsplashOFismyezPnY}
      />
      <b className="absolute top-[68.35%] left-[23.67%] leading-[26px] text-primary-color">
        {prop}
      </b>
      <b className="absolute top-[-5.06%] left-[23.67%] text-xl leading-[28px]">
        {lettuceLeaf}
      </b>
      <div className="absolute top-[35.44%] left-[23.67%] text-sm leading-[22px]">
        Lacus nisi, et ac dapibus velit in consequat.
      </div>
    </div>
  );
};

export default LettuceLeaf;

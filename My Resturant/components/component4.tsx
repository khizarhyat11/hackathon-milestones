import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Component4Type = {
  className?: string;
  toastedFrenchBreadToppedWith?: string;
  cAL?: string;
  alderGrilledChinookSalmon?: string;
  prop?: string;

  /** Style props */
  component49Top?: CSSProperties["top"];
  component49Left?: CSSProperties["left"];
  alderGrilledChinookColor?: CSSProperties["color"];
};

const Component4: NextPage<Component4Type> = ({
  className = "",
  toastedFrenchBreadToppedWith,
  cAL,
  alderGrilledChinookSalmon,
  prop,
  component49Top,
  component49Left,
  alderGrilledChinookColor,
}) => {
  const component49Style: CSSProperties = useMemo(() => {
    return {
      top: component49Top,
      left: component49Left,
    };
  }, [component49Top, component49Left]);

  const alderGrilledChinookStyle: CSSProperties = useMemo(() => {
    return {
      color: alderGrilledChinookColor,
    };
  }, [alderGrilledChinookColor]);

  return (
    <div
      className={`absolute top-[112px] left-[560px] w-[760px] h-[111px] text-left text-base text-gray-2 font-heading-4-32 ${className}`}
      style={component49Style}
    >
      <div className="absolute top-[35.14%] left-[0%] leading-[24px]">
        {toastedFrenchBreadToppedWith}
      </div>
      <div className="absolute top-[63.96%] left-[0%] leading-[24px] text-gray-3">
        {cAL}
      </div>
      <b
        className="absolute top-[0%] left-[0%] text-5xl leading-[32px] text-gray-1"
        style={alderGrilledChinookStyle}
      >
        {alderGrilledChinookSalmon}
      </b>
      <div className="absolute h-[0.9%] w-[100.13%] top-[99.55%] right-[-0.07%] bottom-[-0.45%] left-[-0.07%] border-gray-5 border-t-[1px] border-dashed box-border" />
      <b className="absolute top-[0%] left-[94.61%] text-5xl leading-[32px] text-primary-color">
        {prop}
      </b>
    </div>
  );
};

export default Component4;

import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import Component4 from "./component4";

export type StarterMenuType = {
  className?: string;
  rectangle8874: string;
  starterMenu?: string;

  /** Style props */
  starterMenuTop?: CSSProperties["top"];
  starterMenuBottom?: CSSProperties["bottom"];
};

const StarterMenu: NextPage<StarterMenuType> = ({
  className = "",
  rectangle8874,
  starterMenu,
  starterMenuTop,
  starterMenuBottom,
}) => {
  const starterMenuStyle: CSSProperties = useMemo(() => {
    return {
      top: starterMenuTop,
      bottom: starterMenuBottom,
    };
  }, [starterMenuTop, starterMenuBottom]);

  return (
    <div
      className={`absolute h-[11.89%] w-[68.75%] top-[10.05%] right-[15.63%] bottom-[78.06%] left-[15.63%] text-left text-29xl text-gray-1 font-heading-4-32 ${className}`}
      style={starterMenuStyle}
    >
      <Image
        className="absolute h-[99.68%] w-[33.94%] top-[0.32%] right-[66.06%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        width={448}
        height={626}
        alt=""
        src={rectangle8874}
      />
      <Image
        className="absolute top-[0px] left-[560px] w-6 h-6"
        width={24}
        height={24}
        alt=""
        src="/coffee.svg"
      />
      <b className="absolute top-[5.1%] left-[42.42%] leading-[56px]">
        {starterMenu}
      </b>
      <Component4
        toastedFrenchBreadToppedWith="Toasted French bread topped with romano, cheddar"
        cAL="560 CAL"
        alderGrilledChinookSalmon="Alder Grilled Chinook Salmon"
        prop="32$"
      />
      <Component4
        toastedFrenchBreadToppedWith="Gorgonzola, ricotta, mozzarella, taleggio"
        cAL="700 CAL"
        alderGrilledChinookSalmon="Berries and creme tart"
        prop="43$"
        component49Top="247px"
        component49Left="560px"
        alderGrilledChinookColor="#ff9f0d"
      />
      <Component4
        toastedFrenchBreadToppedWith="Ground cumin, avocados, peeled and cubed"
        cAL="1000 CAL"
        alderGrilledChinookSalmon="Tormentoso Bush Pizza Pintoage"
        prop="14$"
        component49Top="382px"
        component49Left="560px"
        alderGrilledChinookColor="#333"
      />
      <Component4
        toastedFrenchBreadToppedWith="Spreadable cream cheese, crumbled blue cheese"
        cAL="560 CAL"
        alderGrilledChinookSalmon="Spicy Vegan Potato Curry"
        prop="35$"
        component49Top="517px"
        component49Left="560px"
        alderGrilledChinookColor="#333"
      />
    </div>
  );
};

export default StarterMenu;

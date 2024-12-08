import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import Component4 from "./component4";

export type StarterMenu1Type = {
  className?: string;
  unsplashGFCYhoRe48: string;
  mainCourse?: string;

  /** Style props */
  starterMenuTop?: CSSProperties["top"];
  starterMenuBottom?: CSSProperties["bottom"];
};

const StarterMenu1: NextPage<StarterMenu1Type> = ({
  className = "",
  unsplashGFCYhoRe48,
  mainCourse,
  starterMenuTop,
  starterMenuBottom,
}) => {
  const starterMenu1Style: CSSProperties = useMemo(() => {
    return {
      top: starterMenuTop,
      bottom: starterMenuBottom,
    };
  }, [starterMenuTop, starterMenuBottom]);

  return (
    <div
      className={`absolute h-[11.89%] w-[68.75%] top-[24.21%] right-[15.63%] bottom-[63.9%] left-[15.63%] text-left text-29xl text-gray-1 font-heading-4-32 ${className}`}
      style={starterMenu1Style}
    >
      <Image
        className="absolute h-[99.68%] w-[33.94%] top-[0%] right-[0%] bottom-[0.32%] left-[66.06%] max-w-full overflow-hidden max-h-full object-cover"
        width={448}
        height={626}
        alt=""
        src={unsplashGFCYhoRe48}
      />
      <Image
        className="absolute top-[0px] left-[0px] w-6 h-6"
        width={24}
        height={24}
        alt=""
        src="/coffee.svg"
      />
      <b className="absolute top-[5.1%] left-[0%] leading-[56px]">
        {mainCourse}
      </b>
      <Component4
        toastedFrenchBreadToppedWith="Toasted French bread topped with romano, cheddar"
        cAL="560 CAL"
        alderGrilledChinookSalmon="Optic Big Breakfast Combo Menu"
        prop="32$"
        component49Top="112px"
        component49Left="0px"
        alderGrilledChinookColor="#333"
      />
      <Component4
        toastedFrenchBreadToppedWith="Gorgonzola, ricotta, mozzarella, taleggio"
        cAL="700 CAL"
        alderGrilledChinookSalmon="Cashew Chicken With Stir-Fry"
        prop="43$"
        component49Top="247px"
        component49Left="0px"
        alderGrilledChinookColor="#333"
      />
      <Component4
        toastedFrenchBreadToppedWith="Ground cumin, avocados, peeled and cubed"
        cAL="1000 CAL"
        alderGrilledChinookSalmon={` Vegetables & Green Salad`}
        prop="14$"
        component49Top="382px"
        component49Left="0px"
        alderGrilledChinookColor="#333"
      />
      <Component4
        toastedFrenchBreadToppedWith="Spreadable cream cheese, crumbled blue cheese"
        cAL="560 CAL"
        alderGrilledChinookSalmon="Spicy Vegan Potato Curry"
        prop="35$"
        component49Top="517px"
        component49Left="0px"
        alderGrilledChinookColor="#333"
      />
    </div>
  );
};

export default StarterMenu1;

import type { NextPage } from "next";
import Image from "next/image";
import LettuceLeaf from "./lettuce-leaf";

export type OurMenuType = {
  className?: string;
};

const OurMenu: NextPage<OurMenuType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-[7.74%] w-[68.75%] top-[44.65%] right-[15.63%] bottom-[47.61%] left-[15.63%] text-left text-29xl text-primary-color font-inter ${className}`}
    >
      <b className="absolute top-[7.32%] left-[33.33%] leading-[56px] font-heading-4-32">
        <span>Fr</span>
        <span className="text-fffffff">om Our Menu</span>
      </b>
      <div className="absolute top-[0%] left-[41.44%] text-13xl leading-[40px] font-great-vibes-32">{`Choose & pick`}</div>
      <div className="absolute top-[160px] left-[5px] w-[1056px] h-7 text-xl text-fffffff">
        <b className="absolute top-[0px] left-[0px] leading-[28px] text-primary-color">
          Breakfast
        </b>
        <div className="absolute top-[0px] left-[195px] leading-[28px]">
          Lunch
        </div>
        <div className="absolute top-[0px] left-[353px] leading-[28px]">
          Dinner
        </div>
        <div className="absolute top-[0px] left-[515px] leading-[28px]">
          Dessert
        </div>
        <div className="absolute top-[0px] left-[689px] leading-[28px]">
          Drink
        </div>
        <div className="absolute top-[0px] left-[839px] leading-[28px]">
          Snack
        </div>
        <div className="absolute top-[0px] left-[997px] leading-[28px]">
          Suops
        </div>
      </div>
      <LettuceLeaf
        unsplashOFismyezPnY="/unsplashofismyezpny@2x.png"
        prop="12.5$"
        lettuceLeaf="Lettuce Leaf"
      />
      <LettuceLeaf
        unsplashOFismyezPnY="/unsplashyr4n8o-3upc@2x.png"
        prop="12.5$"
        lettuceLeaf="Mild Butter"
        lettuceLeafTop="466px"
        lettuceLeafLeft="536px"
      />
      <LettuceLeaf
        unsplashOFismyezPnY="/unsplashw9okrxbqiza@2x.png"
        prop="12.5$"
        lettuceLeaf="Fresh Bread"
        lettuceLeafTop="577px"
        lettuceLeafLeft="536px"
      />
      <LettuceLeaf
        unsplashOFismyezPnY="/unsplashgfcyhore481@2x.png"
        prop="14.5$"
        lettuceLeaf="Fresh Breakfast"
        lettuceLeafTop="355px"
        lettuceLeafLeft="536px"
      />
      <LettuceLeaf
        unsplashOFismyezPnY="/unsplashzqrebckcrqa@2x.png"
        prop="12.5$"
        lettuceLeaf="Glow Cheese"
        lettuceLeafTop="244px"
        lettuceLeafLeft="944px"
      />
      <LettuceLeaf
        unsplashOFismyezPnY="/unsplashmaqz3x-8-l0@2x.png"
        prop="12.5$"
        lettuceLeaf="Sllice Beef"
        lettuceLeafTop="466px"
        lettuceLeafLeft="944px"
      />
      <LettuceLeaf
        unsplashOFismyezPnY="/unsplashdphm2u1xq0u@2x.png"
        prop="12.5$"
        lettuceLeaf="Mushaom Pizza"
        lettuceLeafTop="577px"
        lettuceLeafLeft="944px"
      />
      <LettuceLeaf
        unsplashOFismyezPnY="/unsplashclpdea23z44@2x.png"
        prop="14.5$"
        lettuceLeaf="Italian Pizza"
        lettuceLeafTop="355px"
        lettuceLeafLeft="944px"
      />
      <Image
        className="absolute top-[244px] left-[0px] w-[515px] h-[406px] object-cover"
        width={515}
        height={406}
        alt=""
        src="/unsplashinjdgkcwhp01@2x.png"
      />
      <Image
        className="absolute top-[244px] left-[75px] w-[366px] h-[362px] object-cover"
        width={366}
        height={362}
        alt=""
        src="/unsplashlv174o7fn7y@2x.png"
      />
    </div>
  );
};

export default OurMenu;

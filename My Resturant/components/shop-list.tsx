import type { NextPage } from "next";
import Image from "next/image";
import Component3 from "./component3";

export type ShopListType = {
  className?: string;
};

const ShopList: NextPage<ShopListType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1px] left-[0px] w-[1920px] h-[410px] text-left text-29xl text-fffffff font-heading-4-32 ${className}`}
    >
      <Image
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        width={1920}
        height={410}
        alt=""
        src="/unsplash4ycv3ky1zzu@2x.png"
      />
      <div className="absolute h-[25.37%] w-[11.72%] top-[48.29%] right-[44.01%] bottom-[26.34%] left-[44.27%]">
        <b className="absolute top-[0%] left-[0%] leading-[56px]">Our Menu</b>
        <div className="absolute h-[26.92%] w-[59.11%] top-[73.08%] right-[20%] bottom-[0%] left-[20.89%] text-xl font-inter">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute top-[0%] left-[0%] leading-[28px]">
              Home
            </div>
            <div className="absolute top-[0%] left-[60.15%] leading-[28px] text-primary-color">
              Menu
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[21.95%] w-full top-[0%] right-[0%] bottom-[78.05%] left-[0%] bg-black-ododod" />
      <Image
        className="absolute h-[3.9%] w-[0.83%] top-[68.78%] right-[49.32%] bottom-[27.32%] left-[49.84%] max-w-full overflow-hidden max-h-full"
        width={16}
        height={16}
        alt=""
        src="/caretright.svg"
      />
      <Component3 />
    </div>
  );
};

export default ShopList;

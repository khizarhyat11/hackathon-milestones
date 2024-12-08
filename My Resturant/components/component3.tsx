import type { NextPage } from "next";
import Image from "next/image";

export type Component3Type = {
  className?: string;
};

const Component3: NextPage<Component3Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-[7.8%] w-[68.75%] top-[7.07%] right-[15.63%] bottom-[85.12%] left-[15.63%] text-left text-base text-fffffff font-inter ${className}`}
    >
      <div className="absolute h-3/4 w-[38.48%] top-[12.5%] right-[27.35%] bottom-[12.5%] left-[34.17%]">
        <b className="absolute top-[0%] left-[0%] leading-[24px] text-primary-color">
          Home
        </b>
        <div className="absolute top-[0%] left-[15.35%] leading-[24px]">
          Menu
        </div>
        <div className="absolute top-[0%] left-[30.12%] leading-[24px]">
          Blog
        </div>
        <div className="absolute top-[0%] left-[43.11%] leading-[24px]">
          Pages
        </div>
        <div className="absolute top-[0%] left-[58.66%] leading-[24px]">{`About `}</div>
        <div className="absolute top-[0%] left-[74.02%] leading-[24px]">{`Shop `}</div>
        <div className="absolute top-[0%] left-[87.99%] leading-[24px]">{`Contact `}</div>
      </div>
      <b className="absolute top-[0%] left-[0%] text-5xl leading-[32px] font-heading-4-32">
        <span>Food</span>
        <span className="text-primary-color">tuck</span>
      </b>
      <Image
        className="absolute h-3/4 w-[1.82%] top-[12.5%] right-[6.06%] bottom-[12.5%] left-[92.12%] max-w-full overflow-hidden max-h-full"
        width={24}
        height={24}
        alt=""
        src="/magnifyingglass.svg"
      />
      <Image
        className="absolute h-3/4 w-[1.82%] top-[12.5%] right-[0%] bottom-[12.5%] left-[98.18%] max-w-full overflow-hidden max-h-full"
        width={24}
        height={24}
        alt=""
        src="/tote.svg"
      />
      <Image
        className="absolute h-3/4 w-[1.82%] top-[12.5%] right-[3.03%] bottom-[12.5%] left-[95.15%] max-w-full overflow-hidden max-h-full"
        width={24}
        height={24}
        alt=""
        src="/user.svg"
      />
    </div>
  );
};

export default Component3;

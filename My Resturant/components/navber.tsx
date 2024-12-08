import type { NextPage } from "next";
import Image from "next/image";

export type NavberType = {
  className?: string;
};

const Navber: NextPage<NavberType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[45px] left-[300px] w-[1320px] h-[87px] text-left text-base text-fffffff font-inter ${className}`}
    >
      <div className="absolute top-[55.17%] left-[5.83%] leading-[24px]">
        Menu
      </div>
      <div className="absolute top-[55.17%] left-[11.52%] leading-[24px]">
        Blog
      </div>
      <div className="absolute top-[55.17%] left-[16.52%] leading-[24px]">
        Pages
      </div>
      <div className="absolute top-[55.17%] left-[22.5%] leading-[24px]">{`About `}</div>
      <div className="absolute top-[55.17%] left-[28.41%] leading-[24px]">{`Shop `}</div>
      <div className="absolute top-[55.17%] left-[33.79%] leading-[24px]">{`Contact `}</div>
      <Image
        className="absolute h-[13.79%] w-[0.91%] top-[64.37%] right-[73.03%] bottom-[21.84%] left-[26.06%] max-w-full overflow-hidden max-h-full object-contain"
        width={12}
        height={12}
        alt=""
        src="/project-status@2x.png"
      />
      <div className="absolute h-[62.07%] w-[23.48%] top-[37.93%] right-[2.42%] bottom-[0%] left-[74.09%] rounded-8xl border-primary-color border-[1px] border-solid box-border" />
      <div className="absolute top-[54.02%] left-[76.06%] leading-[24px]">
        Search...
      </div>
      <Image
        className="absolute h-[27.59%] w-[1.82%] top-[54.02%] right-[4.39%] bottom-[18.39%] left-[93.79%] max-w-full overflow-hidden max-h-full"
        width={24}
        height={24}
        alt=""
        src="/group14.svg"
      />
      <Image
        className="absolute h-[27.59%] w-[1.82%] top-[54.02%] right-[0%] bottom-[18.39%] left-[98.18%] max-w-full overflow-hidden max-h-full"
        width={24}
        height={24}
        alt=""
        src="/handbag.svg"
      />
      <div className="absolute top-[55.17%] left-[0%] leading-[24px]">Home</div>
      <div className="absolute h-[8.05%] w-[0.53%] top-[82.76%] right-[98.18%] bottom-[9.2%] left-[1.29%] rounded-[50%] bg-primary-color" />
      <b className="absolute top-[0%] left-[45.83%] text-5xl leading-[32px] font-heading-4-32 text-primary-color">
        <span>Food</span>
        <span className="text-fffffff">tuck</span>
      </b>
    </div>
  );
};

export default Navber;

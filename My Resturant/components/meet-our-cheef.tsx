import type { NextPage } from "next";
import Image from "next/image";
import Card from "./card";
import Card1 from "./card1";
import ChefCard1 from "./chef-card1";

export type MeetOurCheefType = {
  className?: string;
};

const MeetOurCheef: NextPage<MeetOurCheefType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[4562px] left-[-144px] w-[1764px] h-[657px] text-left text-29xl text-primary-color font-inter ${className}`}
    >
      <Image
        className="absolute top-[149px] left-[0px] w-[599.6px] h-[503.8px] object-contain"
        width={600}
        height={504}
        alt=""
        src="/unsplashinjdgkcwhp0@2x.png"
      />
      <b className="absolute top-[7.31%] left-[54.14%] leading-[56px] font-heading-4-32">
        <span>Me</span>
        <span className="text-fffffff">et Our Chef</span>
      </b>
      <div className="absolute top-[0%] left-[61.9%] text-13xl leading-[40px] font-great-vibes-32">
        Chefs
      </div>
      <Image
        className="absolute top-[160px] left-[780px] w-[312px] h-[391px] object-cover"
        width={312}
        height={391}
        alt=""
        src="/card-2@2x.png"
      />
      <Card />
      <Card1 />
      <div className="absolute top-[607px] left-[1042px] w-[155px] h-[50px] text-base text-fffffff">
        <div className="absolute top-[0px] left-[0px] rounded-6xl border-primary-color border-[1px] border-solid box-border w-[155px] h-[50px]" />
        <div className="absolute top-[13px] left-[41px] leading-[24px]">
          See More
        </div>
      </div>
      <ChefCard1 />
    </div>
  );
};

export default MeetOurCheef;

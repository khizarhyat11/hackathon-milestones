import type { NextPage } from "next";
import Image from "next/image";
import AboutUs from "./about-us";
import RecentPost from "./recent-post";
import Newsletter from "./newsletter";
import SocialiIcon from "./sociali-icon";

export type Component6Type = {
  className?: string;
};

const Component6: NextPage<Component6Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[4506px] left-[0px] w-[1920px] h-[774px] text-left text-base text-fffffff font-heading-4-32 ${className}`}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black-ododod" />
      <Image
        className="absolute h-[12.79%] w-full top-[87.21%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        width={1920}
        height={99}
        alt=""
        src="/rectangle-8788.svg"
      />
      <div className="absolute h-[42.76%] w-[68.75%] top-[37.21%] right-[15.63%] bottom-[20.03%] left-[15.63%] text-xl">
        <AboutUs />
        <div className="absolute h-[83.14%] w-[9.12%] top-[0%] right-[51.97%] bottom-[16.86%] left-[38.91%] text-base">
          <b className="absolute h-[10.14%] w-full top-[0%] left-[0%] text-xl leading-[28px] inline-block">
            Useful Links
          </b>
          <div className="absolute h-[8.68%] w-[34.97%] top-[18.82%] left-[0%] leading-[24px] inline-block">
            About
          </div>
          <div className="absolute h-[8.68%] w-[34.14%] top-[33.32%] left-[0%] leading-[24px] inline-block">
            News
          </div>
          <div className="absolute h-[8.68%] w-[46.68%] top-[47.82%] left-[0%] leading-[24px] inline-block">
            Patners
          </div>
          <div className="absolute h-[8.68%] w-[33.31%] top-[62.32%] left-[0%] leading-[24px] inline-block">
            Team
          </div>
          <div className="absolute h-[8.68%] w-[34.14%] top-[76.82%] left-[0%] leading-[24px] inline-block">
            Menu
          </div>
          <div className="absolute h-[8.68%] w-[46.68%] top-[91.28%] left-[0%] leading-[24px] inline-block">
            Contact
          </div>
        </div>
        <div className="absolute h-[83.14%] w-[9.35%] top-[0%] right-[31.68%] bottom-[16.86%] left-[58.97%] text-base">
          <div className="absolute h-[10.14%] w-[45.54%] top-[0%] right-[54.46%] bottom-[89.86%] left-[0%] text-xl">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <b className="absolute h-full w-full top-[0%] left-[0%] leading-[28px] inline-block">
                Help?
              </b>
            </div>
          </div>
          <div className="absolute h-[8.68%] w-[26.82%] top-[18.82%] left-[0%] leading-[24px] inline-block">
            FAQ
          </div>
          <div className="absolute h-[8.68%] w-full top-[33.32%] left-[0%] leading-[24px] inline-block">{`Term & Condition`}</div>
          <div className="absolute h-[8.68%] w-[56.89%] top-[47.82%] left-[0%] leading-[24px] inline-block">
            Reporting
          </div>
          <div className="absolute h-[8.68%] w-[87.76%] top-[62.32%] left-[0%] leading-[24px] inline-block">
            Documentation
          </div>
          <div className="absolute h-[8.68%] w-[84.52%] top-[76.82%] left-[0%] leading-[24px] inline-block">
            Support Policy
          </div>
          <div className="absolute h-[8.68%] w-[43.11%] top-[91.28%] left-[0%] leading-[24px] inline-block">
            Privacy
          </div>
        </div>
        <RecentPost />
      </div>
      <Newsletter />
      <div className="absolute h-[4.26%] w-[68.65%] top-[91.34%] right-[15.68%] bottom-[4.39%] left-[15.68%] font-inter">
        <div className="absolute h-[72.73%] w-[29.13%] top-[15.15%] right-[70.87%] bottom-[12.12%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] left-[0%] leading-[24px] inline-block">
              Copyright © 2022 by Ayeman. All Rights Reserved.
            </div>
          </div>
        </div>
        <SocialiIcon
          rectangle8789="/rectangle-8789.svg"
          rectangle8790="/rectangle-8790.svg"
          rectangle8791="/rectangle-8791.svg"
          rectangle8787="/rectangle-8787.svg"
          rectangle8788="/rectangle-87881.svg"
        />
      </div>
    </div>
  );
};

export default Component6;

import type { NextPage } from "next";
import Image from "next/image";

export type AboutUs1Type = {
  className?: string;
};

const AboutUs1: NextPage<AboutUs1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-[6.63%] w-[68.75%] top-[12.62%] right-[15.63%] bottom-[80.75%] left-[15.63%] text-left text-lg text-fffffff font-inter ${className}`}
    >
      <div className="absolute h-full w-[42.58%] top-[0%] right-[57.42%] bottom-[0%] left-[0%]">
        <b className="absolute h-[19.57%] w-[79.36%] top-[8.54%] left-[0%] text-29xl leading-[56px] inline-block font-heading-4-32">
          <p className="m-0">
            <span className="text-primary-color">We</span>
            <span> Create the best</span>
          </p>
          <p className="m-0">foody product</p>
        </b>
        <div className="absolute h-[7.12%] w-[15.66%] top-[0%] right-[84.34%] bottom-[92.88%] left-[0%] text-13xl text-primary-color font-great-vibes-32">
          <div className="absolute top-[0%] left-[0%] leading-[40px]">
            About us
          </div>
        </div>
        <Image
          className="absolute h-[2.17%] w-[3.02%] top-[62.46%] right-[96.98%] bottom-[35.37%] left-[0%] max-w-full overflow-hidden max-h-full"
          width={17}
          height={12}
          alt=""
          src="/check.svg"
        />
        <Image
          className="absolute h-[2.17%] w-[3.02%] top-[71.35%] right-[96.98%] bottom-[26.48%] left-[0%] max-w-full overflow-hidden max-h-full"
          width={17}
          height={12}
          alt=""
          src="/check.svg"
        />
        <Image
          className="absolute h-[2.17%] w-[3.02%] top-[80.25%] right-[96.98%] bottom-[17.58%] left-[0%] max-w-full overflow-hidden max-h-full"
          width={17}
          height={12}
          alt=""
          src="/check.svg"
        />
        <div className="absolute h-[23.13%] w-[93.59%] top-[33.81%] left-[0%] text-base leading-[24px] inline-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </div>
        <div className="absolute top-[61.21%] left-[4.8%] leading-[26px]">
          {" "}
          Lacus nisi, et ac dapibus sit eu velit in consequat.
        </div>
        <div className="absolute top-[70.11%] left-[4.8%] leading-[26px]">{` Quisque diam pellentesque bibendum non dui volutpat fringilla `}</div>
        <div className="absolute top-[79%] left-[4.8%] leading-[26px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className="absolute top-[502px] left-[0px] w-[190px] h-[60px] text-base">
          <div className="absolute top-[0px] left-[0px] rounded-11xl bg-primary-color w-[190px] h-[60px]" />
          <div className="absolute top-[30%] left-[28.42%] leading-[24px]">
            Read More
          </div>
        </div>
      </div>
      <Image
        className="absolute top-[0px] left-[660px] rounded-md w-[660px] h-[330px] object-cover"
        width={660}
        height={330}
        alt=""
        src="/unsplashfdlzbwip0am@2x.png"
      />
      <Image
        className="absolute top-[346px] left-[660px] rounded-md w-[322px] h-[194px] object-cover"
        width={322}
        height={194}
        alt=""
        src="/unsplashjpkfc5-ddi@2x.png"
      />
      <Image
        className="absolute top-[346px] left-[998px] rounded-md w-[322px] h-[194px] object-cover"
        width={322}
        height={194}
        alt=""
        src="/unsplashmaqz3x-8-l01@2x.png"
      />
    </div>
  );
};

export default AboutUs1;

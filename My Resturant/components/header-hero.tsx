import type { NextPage } from "next";
import Image from "next/image";
import Navber from "./navber";

export type HeaderHeroType = {
  className?: string;
};

const HeaderHero: NextPage<HeaderHeroType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[1920px] h-[950px] text-left text-base text-fffffff font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[950px]">
        <Image
          className="absolute top-[0px] left-[0px] w-[1920px] h-[950px] object-cover"
          width={1920}
          height={950}
          alt=""
          src="/unsplashqom5mpoeri@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[1920px] h-[950px]" />
        <div className="absolute h-[37.47%] w-[24.58%] top-[30.84%] right-[59.79%] bottom-[31.68%] left-[15.63%]">
          <b className="absolute top-[13.48%] left-[0%] text-41xl leading-[68px] font-heading-4-32">
            <p className="m-0">
              <span className="text-primary-color">Th</span>
              <span>e Art of speed</span>
            </p>
            <p className="m-0">food Quality</p>
          </b>
          <div className="absolute top-[60.67%] left-[0%] leading-[24px]">
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="m-0">Varius sed pharetra dictum neque massa congue</p>
          </div>
          <div className="absolute top-[0%] left-[0%] text-13xl leading-[40px] font-great-vibes-32 text-primary-color">{`Its Quick & Amusing!`}</div>
          <div className="absolute top-[296px] left-[0px] w-[190px] h-[60px] text-gainsboro">
            <div className="absolute top-[0px] left-[0px] rounded-11xl bg-primary-color w-[190px] h-[60px]" />
            <div className="absolute top-[30%] left-[30%] leading-[24px]">
              See Menu
            </div>
          </div>
        </div>
        <div className="absolute top-[191px] left-[242px] w-[25.3px] h-[492px] text-2xs font-themify">
          <div className="absolute top-[0px] left-[6px] bg-fffffff border-fffffff border-r-[1px] border-solid box-border w-px h-[159px]" />
          <div className="absolute top-[345px] left-[6px] bg-fffffff border-fffffff border-r-[1px] border-solid box-border w-px h-[148px]" />
          <div className="absolute h-[21.75%] w-full top-[41.26%] right-[0%] bottom-[36.99%] left-[0%]">
            <div className="absolute h-[23.55%] w-full top-[0%] left-[0%] inline-block [-webkit-text-stroke:1px_#fff]">
              
            </div>
            <div className="absolute h-[23.55%] w-full top-[38.22%] left-[0%] text-primary-color inline-block [-webkit-text-stroke:1px_#ff9f0d]">
              
            </div>
            <div className="absolute h-[23.55%] w-full top-[76.45%] left-[0%] inline-block [-webkit-text-stroke:1px_#fff]">
              
            </div>
          </div>
        </div>
        <div className="absolute top-[198px] left-[865px] w-[877.8px] h-[670px]">
          <Image
            className="absolute top-[0px] left-[437.1px] w-[440.7px] h-[669.6px] object-contain"
            width={441}
            height={670}
            alt=""
            src="/image-68@2x.png"
          />
          <div className="absolute top-[44.9px] left-[28.1px] rounded-[50%] border-fffffff border-[2px] border-solid box-border w-[578.3px] h-[578.3px]" />
          <Image
            className="absolute top-[36.5px] left-[74.9px] w-[624.1px] h-[633.5px] object-cover"
            width={624}
            height={634}
            alt=""
            src="/rectangle-8926@2x.png"
          />
          <Image
            className="absolute top-[78.6px] left-[63.6px] w-[96.4px] h-[99.2px] object-cover"
            width={96}
            height={99}
            alt=""
            src="/rectangle-8928@2x.png"
          />
          <Image
            className="absolute top-[250.8px] left-[0px] w-[74.9px] h-[68.3px] object-cover"
            width={75}
            height={68}
            alt=""
            src="/unsplashmtzzd5z720@2x.png"
          />
          <Image
            className="absolute top-[392.1px] left-[14px] w-[60.8px] h-[54.3px] object-cover"
            width={61}
            height={54}
            alt=""
            src="/unsplashgkc-xm3vy34@2x.png"
          />
        </div>
        <Image
          className="absolute top-[700px] left-[947px] w-[26px] h-[22px] object-cover"
          width={26}
          height={22}
          alt=""
          src="/rectangle-8933@2x.png"
        />
        <div className="absolute top-[56px] left-[1411px] w-[100px] h-[100px] overflow-hidden" />
      </div>
      <Navber />
    </div>
  );
};

export default HeaderHero;

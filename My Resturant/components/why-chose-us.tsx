  import type { NextPage } from "next";
  import Image from "next/image";

  export type WhyChoseUsType = {
    className?: string;
  };

  const WhyChoseUs: NextPage<WhyChoseUsType> = ({ className = "" }) => {
    return (
      <div
        className={`absolute top-[2361px] left-[300px] w-[1320px] h-[716px] text-left text-29xl text-fffffff font-heading-4-32 ${className}`}
      >
        <Image
          className="absolute top-[0px] left-[0px] rounded-md w-[362px] h-[356px] object-cover"
          width={362}
          height={356}
          alt=""
          src="/unsplashlp5mcm6nz5a@2x.png"
        />
        <Image
          className="absolute top-[372px] left-[0px] rounded-md w-[244px] h-[306px] object-cover"
          width={244}
          height={306}
          alt=""
          src="/unsplashclmpc9uhyto3@2x.png"
        />
        <Image
          className="absolute top-[120px] left-[378px] rounded-md w-[281px] h-[231px] object-cover"
          width={281}
          height={231}
          alt=""
          src="/unsplashdphm2u1xq0u1@2x.png"
        />
        <Image
          className="absolute top-[372px] left-[260px] rounded-md w-[221px] h-[226px] object-cover"
          width={221}
          height={226}
          alt=""
          src="/unsplashgfcyhore482@2x.png"
        />
        <Image
          className="absolute top-[366px] left-[497px] rounded-md w-[161px] h-[168px] object-cover"
          width={161}
          height={168}
          alt=""
          src="/unsplashtzl1ucxg5es@2x.png"
        />
        <Image
          className="absolute top-[550px] left-[497px] rounded-md w-[161px] h-[166px] object-cover"
          width={161}
          height={166}
          alt=""
          src="/unsplashmmnki8kmxpc@2x.png"
        />
        <b className="absolute top-[15.36%] left-[60.15%] leading-[56px]">
          <p className="m-0">
            <span className="text-primary-color">Ex</span>
            <span>ta ordinary taste</span>
          </p>
          <p className="m-0">{`And Experienced `}</p>
        </b>
        <div className="absolute h-[5.59%] w-[13.18%] top-[8.66%] right-[26.67%] bottom-[85.75%] left-[60.15%] text-13xl text-primary-color font-great-vibes-32">
          <div className="absolute top-[0%] left-[0%] leading-[40px]">
            Why Choose us
          </div>
        </div>
        <div className="absolute top-[575px] left-[794px] w-[374px] h-[93px] text-xl text-black-1">
          <div className="absolute top-[0px] left-[0px] w-[374px] h-[93px]">
            <div className="absolute top-[0px] left-[0px] rounded-md bg-fffffff w-[374px] h-[92px]" />
            <div className="absolute top-[18.28%] left-[48.13%] leading-[28px] font-inter">
              Years of
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md bg-primary-color w-2.5 h-[93px]" />
            <b className="absolute top-[20.43%] left-[13.64%] text-29xl leading-[56px] text-primary-color">
              30+
            </b>
            <b className="absolute top-[42px] left-[180px] text-5xl leading-[32px]">
              Experienced
            </b>
          </div>
        </div>
        <div className="absolute top-[406px] left-[794px] w-[374px] h-[135px] text-lg font-inter">
          <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-color w-[102px] h-[100px]" />
          <div className="absolute top-[1px] left-[135px] rounded-md bg-primary-color w-[102px] h-[100px]" />
          <div className="absolute top-[0px] left-[272px] rounded-md bg-primary-color w-[102px] h-[100px]" />
          <div className="absolute top-[109px] left-[6px] leading-[26px]">
            Fast Food
          </div>
          <div className="absolute top-[109px] left-[160px] leading-[26px]">
            Lunch
          </div>
          <div className="absolute top-[109px] left-[294px] leading-[26px]">
            Dinner
          </div>
        </div>
        <div className="absolute w-[39.85%] top-[35.47%] left-[60.15%] text-base leading-[24px] font-inter inline-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </div>
        <Image
          className="absolute top-[428px] left-[817px] w-14 h-14"
          width={56}
          height={56}
          alt=""
          src="/hamburger.svg"
        />
        <Image
          className="absolute top-[429px] left-[952px] w-14 h-14"
          width={56}
          height={56}
          alt=""
          src="/cookie.svg"
        />
        <Image
          className="absolute top-[428px] left-[1089px] w-14 h-14"
          width={56}
          height={56}
          alt=""
          src="/wine.svg"
        />
      </div>
    );
  };

  export default WhyChoseUs;

import type { NextPage } from "next";
import Image from "next/image";

export type FoodCatagoryType = {
  className?: string;
};

const FoodCatagory: NextPage<FoodCatagoryType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1752px] left-[300px] w-[1792.3px] h-[803px] text-left text-29xl text-primary-color font-heading-4-32 ${className}`}
    >
      <Image
        className="absolute top-[249.5px] left-[1173px] w-[619.3px] h-[553.5px] object-contain"
        width={619}
        height={554}
        alt=""
        src="/unsplashinjdgkcwhp02@2x.png"
      />
      <div className="absolute h-[60.9%] w-[73.65%] top-[0%] right-[26.35%] bottom-[39.1%] left-[0%]">
        <b className="absolute top-[9.82%] left-[33.03%] leading-[56px]">
          <span>Ch</span>
          <span className="text-fffffff">oose Food Iteam</span>
        </b>
        <div className="absolute top-[0%] left-[43.26%] text-13xl leading-[40px] font-great-vibes-32">
          {" "}
          Food Category
        </div>
        <div className="absolute top-[160px] left-[0px] w-[1320px] h-[329px] text-xl text-snow font-inter">
          <Image
            className="absolute top-[0px] left-[676px] rounded-md w-[306px] h-[329px] object-cover"
            width={306}
            height={329}
            alt=""
            src="/unsplashmrhyvhhxgk@2x.png"
          />
          <Image
            className="absolute top-[0px] left-[1014px] rounded-md w-[306px] h-[329px] object-cover"
            width={306}
            height={329}
            alt=""
            src="/unsplashq54oxq44mzs@2x.png"
          />
          <Image
            className="absolute top-[0px] left-[338px] rounded-md w-[306px] h-[329px] object-cover"
            width={306}
            height={329}
            alt=""
            src="/unsplashdphm2u1xq0u2@2x.png"
          />
          <Image
            className="absolute top-[1px] left-[0px] rounded-md w-[305px] h-[328px] object-cover"
            width={305}
            height={328}
            alt=""
            src="/unsplashlhzukiwm74@2x.png"
          />
          <div className="absolute top-[124px] left-[0px] w-[206px] h-[97px]">
            <div className="absolute top-[51px] left-[0px] w-[206px] h-[46px]">
              <div className="absolute top-[0px] left-[0px] rounded-md bg-primary-color w-[206px] h-[46px]" />
              <b className="absolute top-[19.57%] left-[15.05%] leading-[28px]">
                Fast Food Dish
              </b>
            </div>
            <div className="absolute top-[0px] left-[81px] w-[125px] h-10 text-lg text-primary-color">
              <div className="absolute top-[0px] left-[0px] rounded-md bg-fffffff w-[125px] h-10" />
              <b className="absolute top-[17.5%] left-[15.2%] leading-[26px]">
                Save 30%
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCatagory;

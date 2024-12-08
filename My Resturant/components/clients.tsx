import type { NextPage } from "next";
import Image from "next/image";

export type ClientsType = {
  className?: string;
};

const Clients: NextPage<ClientsType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[3189px] left-[-1px] w-[1923px] h-[469px] text-left text-5xl text-fffffff font-heading-4-32 ${className}`}
    >
      <Image
        className="absolute top-[0px] left-[0px] w-[1923px] h-[468px] object-cover"
        width={1923}
        height={468}
        alt=""
        src="/unsplashbpptlxwtovg@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[469px]">
        <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[1920px] h-[469px]" />
        <div className="absolute top-[112px] left-[300px] w-[1319px] h-[247px]">
          <div className="absolute top-[0px] left-[379px] w-[162px] h-[247px]">
            <b className="absolute top-[144px] left-[0px] leading-[32px]">
              Items Of Food
            </b>
            <b className="absolute top-[199px] left-[48px] text-21xl leading-[48px]">
              320
            </b>
            <Image
              className="absolute h-[48.58%] w-[74.07%] top-[0%] right-[12.96%] bottom-[51.42%] left-[12.96%] max-w-full overflow-hidden max-h-full"
              width={120}
              height={120}
              alt=""
              src="/group10.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[0px] w-[218px] h-[247px]">
            <b className="absolute top-[144px] left-[0px] leading-[32px]">
              Professional Chefs
            </b>
            <b className="absolute top-[199px] left-[76px] text-21xl leading-[48px]">
              420
            </b>
            <Image
              className="absolute h-[48.58%] w-[55.05%] top-[0%] right-[22.48%] bottom-[51.42%] left-[22.48%] max-w-full overflow-hidden max-h-full"
              width={120}
              height={120}
              alt=""
              src="/group11.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[1113px] w-[206px] h-[247px]">
            <b className="absolute top-[144px] left-[0px] leading-[32px]">
              Happy Customers
            </b>
            <b className="absolute top-[199px] left-[70px] text-21xl leading-[48px]">
              220
            </b>
            <Image
              className="absolute h-[48.58%] w-[58.25%] top-[0%] right-[20.87%] bottom-[51.42%] left-[20.87%] max-w-full overflow-hidden max-h-full"
              width={120}
              height={120}
              alt=""
              src="/group12.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[703px] w-[248px] h-[247px]">
            <b className="absolute top-[144px] left-[0px] leading-[32px]">
              Years Of Experienced
            </b>
            <b className="absolute top-[199px] left-[90px] text-21xl leading-[48px]">
              30+
            </b>
            <Image
              className="absolute h-[48.58%] w-[48.39%] top-[0%] right-[25.81%] bottom-[51.42%] left-[25.81%] max-w-full overflow-hidden max-h-full"
              width={120}
              height={120}
              alt=""
              src="/group13.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

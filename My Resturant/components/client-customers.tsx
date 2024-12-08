import type { NextPage } from "next";
import Image from "next/image";

export type ClientCustomersType = {
  className?: string;
};

const ClientCustomers: NextPage<ClientCustomersType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2027px] left-[-1px] w-[1923px] h-[468px] text-left text-5xl text-fffffff font-heading-4-32 ${className}`}
    >
      <Image
        className="absolute top-[0px] left-[0px] w-[1923px] h-[468px] object-cover"
        width={1923}
        height={468}
        alt=""
        src="/unsplashbpptlxwtovg@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[1920px] h-[468px]" />
      <Image
        className="absolute h-[1%] w-[0.24%] top-[37.07%] right-[23.05%] bottom-[61.92%] left-[76.7%] max-w-full overflow-hidden max-h-full"
        width={5}
        height={5}
        alt=""
        src="/group.svg"
      />
      <Image
        className="absolute h-[3.72%] w-[0.57%] top-[33.12%] right-[23.24%] bottom-[63.16%] left-[76.19%] max-w-full overflow-hidden max-h-full"
        width={11}
        height={17}
        alt=""
        src="/group1.svg"
      />
      <Image
        className="absolute h-[4.55%] w-[1.11%] top-[30.3%] right-[20.09%] bottom-[65.15%] left-[78.8%] max-w-full overflow-hidden max-h-full"
        width={21}
        height={21}
        alt=""
        src="/group2.svg"
      />
      <Image
        className="absolute h-[4.55%] w-[1.11%] top-[36.5%] right-[20.12%] bottom-[58.95%] left-[78.77%] max-w-full overflow-hidden max-h-full"
        width={21}
        height={21}
        alt=""
        src="/group3.svg"
      />
      <Image
        className="absolute h-[1.2%] w-[0.62%] top-[34.25%] right-[21.31%] bottom-[64.55%] left-[78.08%] max-w-full overflow-hidden max-h-full"
        width={12}
        height={6}
        alt=""
        src="/group4.svg"
      />
      <Image
        className="absolute h-[2.03%] w-[0.28%] top-[36.67%] right-[21.6%] bottom-[61.3%] left-[78.12%] max-w-full overflow-hidden max-h-full"
        width={5}
        height={10}
        alt=""
        src="/group5.svg"
      />
      <div className="absolute top-[107px] left-[308px] w-[1314px] h-[255px]">
        <div className="absolute top-[0px] left-[378px] w-[162px] h-[255px]">
          <b className="absolute top-[225px] left-[0px] leading-[32px] inline-block w-[162px] h-[30px]">
            Items Of Food
          </b>
          <b className="absolute top-[159px] left-[48px] text-21xl leading-[48px] inline-block w-[67px] h-[46px]">
            320
          </b>
          <Image
            className="absolute h-[46.67%] w-[74.07%] top-[0%] right-[12.96%] bottom-[53.33%] left-[12.96%] max-w-full overflow-hidden max-h-full"
            width={120}
            height={119}
            alt=""
            src="/group6.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[0px] w-[218px] h-[255px]">
          <b className="absolute top-[225px] left-[0px] leading-[32px] inline-block w-[218px] h-[30px]">
            Professional Chefs
          </b>
          <b className="absolute top-[159px] left-[76px] text-21xl leading-[48px] inline-block w-[67px] h-[46px]">
            420
          </b>
          <Image
            className="absolute h-[46.67%] w-[55.05%] top-[0%] right-[22.48%] bottom-[53.33%] left-[22.48%] max-w-full overflow-hidden max-h-full"
            width={120}
            height={119}
            alt=""
            src="/group7.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[1108px] w-[206px] h-[255px]">
          <b className="absolute top-[225px] left-[0px] leading-[32px] inline-block w-[206px] h-[30px]">
            Happy Customers
          </b>
          <b className="absolute top-[159px] left-[70px] text-21xl leading-[48px] inline-block w-[67px] h-[46px]">
            220
          </b>
          <Image
            className="absolute h-[46.67%] w-[58.25%] top-[0%] right-[20.87%] bottom-[53.33%] left-[20.87%] max-w-full overflow-hidden max-h-full"
            width={120}
            height={119}
            alt=""
            src="/group8.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[700px] w-[248px] h-[255px]">
          <b className="absolute top-[225px] left-[0px] leading-[32px] inline-block w-[248px] h-[30px]">
            Years Of Experienced
          </b>
          <b className="absolute top-[159px] left-[90px] text-21xl leading-[48px] inline-block w-[68px] h-[46px]">
            30+
          </b>
          <Image
            className="absolute h-[46.67%] w-[48.39%] top-[0%] right-[25.81%] bottom-[53.33%] left-[25.81%] max-w-full overflow-hidden max-h-full"
            width={120}
            height={119}
            alt=""
            src="/group9.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientCustomers;

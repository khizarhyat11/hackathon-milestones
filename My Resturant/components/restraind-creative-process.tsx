import type { NextPage } from "next";
import Image from "next/image";

export type RestraindCreativeProcessType = {
  className?: string;
};

const RestraindCreativeProcess: NextPage<RestraindCreativeProcessType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[6229px] left-[1px] w-[1918px] h-[558px] text-left text-base text-fffffff font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] w-[1918px] h-[558px]">
        <div className="absolute top-[0px] left-[0px] w-[1918px] h-[558px]">
          <Image
            className="absolute top-[0px] left-[0px] w-[1918px] h-[558px] object-cover"
            width={1918}
            height={558}
            alt=""
            src="/unsplashe6dsqnzbz4o@2x.png"
          />
          <div className="absolute top-[20.07%] left-[70.18%] text-13xl leading-[40px] font-great-vibes-32 text-primary-color">
            Restaurant Active Process
          </div>
          <b className="absolute top-[28.67%] left-[47.65%] text-29xl leading-[56px] font-heading-4-32 text-right">
            <p className="m-0">
              <span className="text-primary-color">We</span>
              <span> Document Every Food</span>
            </p>
            <p className="m-0">Bean Process untile it is saved</p>
          </b>
          <div className="absolute w-[33.94%] top-[54.48%] left-[50.47%] leading-[24px] text-right inline-block">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, `}</div>
          <div className="absolute top-[385px] left-[1250px] w-[369px] h-[60px]">
            <div className="absolute top-[0px] left-[0px] w-[190px] h-[60px]">
              <div className="absolute top-[0px] left-[0px] rounded-11xl border-primary-color border-[1px] border-solid box-border w-[190px] h-[60px]" />
              <b className="absolute top-[30%] left-[24.74%] leading-[24px]">
                Read More
              </b>
            </div>
            <div className="absolute h-2/5 w-[22.49%] top-[28.33%] right-[0%] bottom-[31.67%] left-[77.51%]">
              <b className="absolute top-[0%] left-[0%] leading-[24px]">
                Play Video
              </b>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="absolute h-[10.75%] w-[3.13%] top-[68.82%] right-[20.54%] bottom-[20.43%] left-[76.33%] max-w-full overflow-hidden max-h-full"
        width={60}
        height={60}
        alt=""
        src="/play.svg"
      />
    </div>
  );
};

export default RestraindCreativeProcess;

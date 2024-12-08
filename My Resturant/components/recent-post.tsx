import type { NextPage } from "next";
import Component5 from "./component5";

export type RecentPostType = {
  className?: string;
};

const RecentPost: NextPage<RecentPostType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-full w-[20.74%] top-[0%] right-[0%] bottom-[0%] left-[79.26%] text-left text-xl text-fffffff font-heading-4-32 ${className}`}
    >
      <div className="absolute h-[8.43%] w-[42.51%] top-[0%] right-[57.49%] bottom-[91.57%] left-[0%]">
        <b className="absolute h-full w-full top-[0%] left-[0%] leading-[28px] inline-block">
          Recent Post
        </b>
      </div>
      <Component5 unsplashCLMpC9UhyTo="/unsplashclmpc9uhyto@2x.png" />
      <Component5
        unsplashCLMpC9UhyTo="/unsplashclmpc9uhyto1@2x.png"
        component71Top="46.98%"
        component71Bottom="28.91%"
      />
      <Component5
        unsplashCLMpC9UhyTo="/unsplashclmpc9uhyto2@2x.png"
        component71Top="75.89%"
        component71Bottom="0%"
      />
    </div>
  );
};

export default RecentPost;

import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type Component5Type = {
  className?: string;
  unsplashCLMpC9UhyTo: string;

  /** Style props */
  component71Top?: CSSProperties["top"];
  component71Bottom?: CSSProperties["bottom"];
};

const Component5: NextPage<Component5Type> = ({
  className = "",
  unsplashCLMpC9UhyTo,
  component71Top,
  component71Bottom,
}) => {
  const component71Style: CSSProperties = useMemo(() => {
    return {
      top: component71Top,
      bottom: component71Bottom,
    };
  }, [component71Top, component71Bottom]);

  return (
    <div
      className={`absolute h-[24.11%] w-full top-[18.07%] right-[0%] bottom-[57.82%] left-[0%] text-left text-base text-fffffff font-heading-4-32 ${className}`}
      style={component71Style}
    >
      <div className="absolute h-[60.03%] w-[64.83%] top-[0%] left-[35.17%] leading-[24px] inline-block">
        <p className="m-0">Is fastfood good for</p>
        <p className="m-0">your body?</p>
      </div>
      <Image
        className="absolute h-full w-[29.29%] top-[0%] right-[70.71%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        width={80}
        height={80}
        alt=""
        src={unsplashCLMpC9UhyTo}
      />
      <div className="absolute h-[27.44%] w-[64.83%] top-[66.17%] right-[0%] bottom-[6.39%] left-[35.17%] text-sm">
        <div className="absolute h-full w-full top-[0%] left-[0%] leading-[22px] inline-block opacity-[0.49]">
          February 28,2022
        </div>
      </div>
    </div>
  );
};

export default Component5;

import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type SocialiIconType = {
  className?: string;
  rectangle8789: string;
  rectangle8790: string;
  rectangle8791: string;
  rectangle8787: string;
  rectangle8788: string;

  /** Style props */
  socialiIconHeight?: CSSProperties["height"];
  socialiIconWidth?: CSSProperties["width"];
  socialiIconTop?: CSSProperties["top"];
  socialiIconRight?: CSSProperties["right"];
  socialiIconBottom?: CSSProperties["bottom"];
  socialiIconLeft?: CSSProperties["left"];
  rectangleIconWidth?: CSSProperties["width"];
  rectangleIconRight?: CSSProperties["right"];
  rectangleIconWidth1?: CSSProperties["width"];
  rectangleIconRight1?: CSSProperties["right"];
  rectangleIconLeft?: CSSProperties["left"];
  rectangleIconWidth2?: CSSProperties["width"];
  rectangleIconRight2?: CSSProperties["right"];
  divTop?: CSSProperties["top"];
  divLeft?: CSSProperties["left"];
  divColor?: CSSProperties["color"];
  divTop1?: CSSProperties["top"];
  divLeft1?: CSSProperties["left"];
  divColor1?: CSSProperties["color"];
  divTop2?: CSSProperties["top"];
  divLeft2?: CSSProperties["left"];
  divColor2?: CSSProperties["color"];
  rectangleIconWidth3?: CSSProperties["width"];
  rectangleIconRight3?: CSSProperties["right"];
  rectangleIconLeft1?: CSSProperties["left"];
  rectangleIconWidth4?: CSSProperties["width"];
  rectangleIconRight4?: CSSProperties["right"];
  rectangleIconLeft2?: CSSProperties["left"];
  divTop3?: CSSProperties["top"];
  divLeft3?: CSSProperties["left"];
  divTop4?: CSSProperties["top"];
  divLeft4?: CSSProperties["left"];
  divColor3?: CSSProperties["color"];
};

const SocialiIcon: NextPage<SocialiIconType> = ({
  className = "",
  rectangle8789,
  rectangle8790,
  rectangle8791,
  rectangle8787,
  rectangle8788,
  socialiIconHeight,
  socialiIconWidth,
  socialiIconTop,
  socialiIconRight,
  socialiIconBottom,
  socialiIconLeft,
  rectangleIconWidth,
  rectangleIconRight,
  rectangleIconWidth1,
  rectangleIconRight1,
  rectangleIconLeft,
  rectangleIconWidth2,
  rectangleIconRight2,
  divTop,
  divLeft,
  divColor,
  divTop1,
  divLeft1,
  divColor1,
  divTop2,
  divLeft2,
  divColor2,
  rectangleIconWidth3,
  rectangleIconRight3,
  rectangleIconLeft1,
  rectangleIconWidth4,
  rectangleIconRight4,
  rectangleIconLeft2,
  divTop3,
  divLeft3,
  divTop4,
  divLeft4,
  divColor3,
}) => {
  const socialiIconStyle: CSSProperties = useMemo(() => {
    return {
      height: socialiIconHeight,
      width: socialiIconWidth,
      top: socialiIconTop,
      right: socialiIconRight,
      bottom: socialiIconBottom,
      left: socialiIconLeft,
    };
  }, [
    socialiIconHeight,
    socialiIconWidth,
    socialiIconTop,
    socialiIconRight,
    socialiIconBottom,
    socialiIconLeft,
  ]);

  const rectangleIconStyle: CSSProperties = useMemo(() => {
    return {
      width: rectangleIconWidth,
      right: rectangleIconRight,
    };
  }, [rectangleIconWidth, rectangleIconRight]);

  const rectangleIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: rectangleIconWidth1,
      right: rectangleIconRight1,
      left: rectangleIconLeft,
    };
  }, [rectangleIconWidth1, rectangleIconRight1, rectangleIconLeft]);

  const rectangleIcon2Style: CSSProperties = useMemo(() => {
    return {
      width: rectangleIconWidth2,
      right: rectangleIconRight2,
    };
  }, [rectangleIconWidth2, rectangleIconRight2]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      top: divTop,
      left: divLeft,
      color: divColor,
    };
  }, [divTop, divLeft, divColor]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      top: divTop1,
      left: divLeft1,
      color: divColor1,
    };
  }, [divTop1, divLeft1, divColor1]);

  const div2Style: CSSProperties = useMemo(() => {
    return {
      top: divTop2,
      left: divLeft2,
      color: divColor2,
    };
  }, [divTop2, divLeft2, divColor2]);

  const rectangleIcon3Style: CSSProperties = useMemo(() => {
    return {
      width: rectangleIconWidth3,
      right: rectangleIconRight3,
      left: rectangleIconLeft1,
    };
  }, [rectangleIconWidth3, rectangleIconRight3, rectangleIconLeft1]);

  const rectangleIcon4Style: CSSProperties = useMemo(() => {
    return {
      width: rectangleIconWidth4,
      right: rectangleIconRight4,
      left: rectangleIconLeft2,
    };
  }, [rectangleIconWidth4, rectangleIconRight4, rectangleIconLeft2]);

  const div3Style: CSSProperties = useMemo(() => {
    return {
      top: divTop3,
      left: divLeft3,
    };
  }, [divTop3, divLeft3]);

  const div4Style: CSSProperties = useMemo(() => {
    return {
      top: divTop4,
      left: divLeft4,
      color: divColor3,
    };
  }, [divTop4, divLeft4, divColor3]);

  return (
    <div
      className={`absolute h-full w-[18.13%] top-[0%] right-[0%] bottom-[0%] left-[81.87%] text-left text-base text-black-1 font-font-awesome-5-brands ${className}`}
      style={socialiIconStyle}
    >
      <Image
        className="absolute h-full w-[15.02%] top-[0%] right-[43.31%] bottom-[0%] left-[41.67%] rounded-sm max-w-full overflow-hidden max-h-full"
        width={36}
        height={33}
        alt=""
        src={rectangle8789}
        style={rectangleIconStyle}
      />
      <Image
        className="absolute h-full w-[14.98%] top-[0%] right-[64.18%] bottom-[0%] left-[20.84%] rounded-sm max-w-full overflow-hidden max-h-full"
        width={36}
        height={33}
        alt=""
        src={rectangle8790}
        style={rectangleIcon1Style}
      />
      <Image
        className="absolute h-full w-[15.02%] top-[0%] right-[84.98%] bottom-[0%] left-[0%] rounded-sm max-w-full overflow-hidden max-h-full"
        width={36}
        height={33}
        alt=""
        src={rectangle8791}
        style={rectangleIcon2Style}
      />
      <div
        className="absolute top-[25.15%] left-[4.98%] text-center"
        style={divStyle}
      >
        
      </div>
      <div
        className="absolute top-[25.15%] left-[24.6%] text-center"
        style={div1Style}
      >
        
      </div>
      <div className="absolute top-[22.12%] left-[46.23%]" style={div2Style}>
        
      </div>
      <Image
        className="absolute h-full w-[14.98%] top-[0%] right-[22.51%] bottom-[0%] left-[62.51%] rounded-sm max-w-full overflow-hidden max-h-full"
        width={36}
        height={33}
        alt=""
        src={rectangle8787}
        style={rectangleIcon3Style}
      />
      <Image
        className="absolute h-full w-[15.02%] top-[0%] right-[1.63%] bottom-[0%] left-[83.35%] rounded-sm max-w-full overflow-hidden max-h-full"
        width={36}
        height={33}
        alt=""
        src={rectangle8788}
        style={rectangleIcon4Style}
      />
      <div
        className="absolute top-[19.09%] left-[66.23%] text-primary-color"
        style={div3Style}
      >
        
      </div>
      <div className="absolute top-[25.15%] left-[87.49%]" style={div4Style}>
        
      </div>
    </div>
  );
};

export default SocialiIcon;

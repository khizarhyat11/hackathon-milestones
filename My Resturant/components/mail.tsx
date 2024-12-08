import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type MailType = {
  className?: string;
  rectangle8783: string;
  rectangle8784: string;

  /** Style props */
  mailHeight?: CSSProperties["height"];
  mailWidth?: CSSProperties["width"];
  mailTop?: CSSProperties["top"];
  mailBottom?: CSSProperties["bottom"];
  mailLeft?: CSSProperties["left"];
  subscribeNowTop?: CSSProperties["top"];
  enterYourEmailTop?: CSSProperties["top"];
};

const Mail: NextPage<MailType> = ({
  className = "",
  rectangle8783,
  rectangle8784,
  mailHeight,
  mailWidth,
  mailTop,
  mailBottom,
  mailLeft,
  subscribeNowTop,
  enterYourEmailTop,
}) => {
  const mailStyle: CSSProperties = useMemo(() => {
    return {
      height: mailHeight,
      width: mailWidth,
      top: mailTop,
      bottom: mailBottom,
      left: mailLeft,
    };
  }, [mailHeight, mailWidth, mailTop, mailBottom, mailLeft]);

  const subscribeNowStyle: CSSProperties = useMemo(() => {
    return {
      top: subscribeNowTop,
    };
  }, [subscribeNowTop]);

  const enterYourEmailStyle: CSSProperties = useMemo(() => {
    return {
      top: enterYourEmailTop,
    };
  }, [enterYourEmailTop]);

  return (
    <div
      className={`absolute h-[49.91%] w-[39.26%] top-[0%] right-[0%] bottom-[50.09%] left-[60.74%] text-left text-base text-primary-color font-inter ${className}`}
      style={mailStyle}
    >
      <Image
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full"
        width={459}
        height={56}
        alt=""
        src={rectangle8783}
      />
      <Image
        className="absolute h-full w-[35.51%] top-[0%] right-[0%] bottom-[0%] left-[64.49%] rounded max-w-full overflow-hidden max-h-full"
        width={163}
        height={56}
        alt=""
        src={rectangle8784}
      />
      <div
        className="absolute top-[28.62%] left-[69.72%] leading-[24px]"
        style={subscribeNowStyle}
      >
        Subscribe Now
      </div>
      <div
        className="absolute top-[28.62%] left-[4.36%] leading-[24px] text-fffffff opacity-[0.59]"
        style={enterYourEmailStyle}
      >
        {" "}
        Enter Your Email
      </div>
    </div>
  );
};

export default Mail;

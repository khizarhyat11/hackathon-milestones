import type { NextPage } from "next";
import Image from "next/image";
import Mail from "./mail";

export type NewsletterType = {
  className?: string;
};

const Newsletter: NextPage<NewsletterType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-[14.47%] w-[60.89%] top-[15.5%] right-[19.27%] bottom-[70.03%] left-[19.84%] text-left text-base text-primary-color font-heading-4-32 ${className}`}
    >
      <Mail
        rectangle8783="/rectangle-8783.svg"
        rectangle8784="/rectangle-8784.svg"
      />
      <div className="absolute h-[21.34%] w-[39.09%] top-[49.91%] left-[0%] leading-[24px] text-fffffff inline-block">{`Don’t wait make a smart & logical quote here. Its pretty easy.`}</div>
      <b className="absolute h-[35.63%] w-[37.55%] top-[0%] left-[0%] text-13xl leading-[40px] inline-block">
        <span>St</span>
        <span className="text-fffffff">ill You Need Our Support ?</span>
      </b>
      <Image
        className="absolute h-[0.27%] w-full top-[99.73%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
        width={1169}
        height
        alt=""
        src="/vector-17.svg"
      />
    </div>
  );
};

export default Newsletter;

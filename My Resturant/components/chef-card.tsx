import type { NextPage } from "next";
import Image from "next/image";

export type ChefCardType = {
  className?: string;
  rectangle8863: string;
  dEstwood?: string;
  chiefChef?: string;
};

const ChefCard: NextPage<ChefCardType> = ({
  className = "",
  rectangle8863,
  dEstwood,
  chiefChef,
}) => {
  return (
    <div
      className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] text-left text-lg text-gray-1 font-inter ${className}`}
    >
      <Image
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md max-w-full overflow-hidden max-h-full object-cover"
        width={312}
        height={391}
        alt=""
        src={rectangle8863}
      />
      <div className="absolute h-[17.14%] w-[58.01%] top-[82.86%] right-[41.99%] bottom-[0%] left-[0%] rounded-t-none rounded-br-none rounded-bl-md bg-fffffff" />
      <b className="absolute top-[84.4%] left-[6.41%] leading-[26px]">
        {dEstwood}
      </b>
      <div className="absolute top-[92.07%] left-[6.41%] text-sm leading-[22px]">
        {chiefChef}
      </div>
    </div>
  );
};

export default ChefCard;

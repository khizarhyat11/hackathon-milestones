import type { NextPage } from "next";
import Image from "next/image";

export type ClientsAndPartnerType = {
  className?: string;
};

const ClientsAndPartner: NextPage<ClientsAndPartnerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[4111px] left-[295px] w-[1322px] h-[275px] text-left text-29xl text-gray-1 font-heading-4-32 ${className}`}
    >
      <div className="absolute top-[145.6px] left-[0px] w-[1322px] h-[129.4px]">
        <Image
          className="absolute top-[0px] left-[0px] w-[241px] h-[129.2px] object-cover"
          width={241}
          height={129}
          alt=""
          src="/image-2@2x.png"
        />
        <Image
          className="absolute top-[0px] left-[311px] w-[166px] h-[128.7px] object-cover"
          width={166}
          height={129}
          alt=""
          src="/image-60@2x.png"
        />
        <Image
          className="absolute top-[0px] left-[548.9px] w-36 h-[127px] object-cover"
          width={144}
          height={127}
          alt=""
          src="/image-56@2x.png"
        />
        <Image
          className="absolute top-[0px] left-[1208px] w-[114px] h-[129.1px] object-cover"
          width={114}
          height={129}
          alt=""
          src="/image-59@2x.png"
        />
        <Image
          className="absolute top-[0px] left-[967.4px] w-[170px] h-[129.2px] object-cover"
          width={170}
          height={129}
          alt=""
          src="/image-57@2x.png"
        />
        <Image
          className="absolute top-[0px] left-[766.1px] w-[131px] h-[129.4px] object-cover"
          width={131}
          height={129}
          alt=""
          src="/image-58@2x.png"
        />
      </div>
      <b className="absolute top-[33.9px] left-[325px] leading-[56px] inline-block w-[672.9px] h-[55.9px]">
        We work with the best pepole
      </b>
      <div className="absolute top-[0px] left-[592.9px] text-lg leading-[26px] font-inter inline-block w-[153px] h-[25.9px]">{`Partners & Clients`}</div>
    </div>
  );
};

export default ClientsAndPartner;

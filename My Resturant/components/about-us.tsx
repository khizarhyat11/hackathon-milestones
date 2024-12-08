import type { NextPage } from "next";
import Image from "next/image";

export type AboutUsType = {
  className?: string;
};

const AboutUs: NextPage<AboutUsType> = ({ className = "" }) => {
  return (
    <div
      className={`relative p-6 md:p-8 lg:p-10 bg-gray-50 text-left text-xl text-gray-900 font-heading-4-32 ${className}`}
    >
      <b className="text-2xl md:text-3xl font-bold mb-4 block">
        About Us.
      </b>
      <p className="text-lg leading-7 mb-6">
        Corporate clients and leisure travelers have been relying on Groundlink for
        dependable, safe, and professional chauffeured car service in major cities
        across the world.
      </p>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <Image
          className="flex-shrink-0"
          width={77}
          height={71}
          alt="Watch Icon"
          src="/watch.svg"
        />
        <div>
          <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
          <p className="leading-6">Mon - Sat (8:00 AM - 6:00 PM)</p>
          <p className="leading-6">Sunday - Closed</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

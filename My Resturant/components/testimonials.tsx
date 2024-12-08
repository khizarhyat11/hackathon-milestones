import type { NextPage } from "next";
import Image from "next/image";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: NextPage<TestimonialsType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[5339px] left-[300px] w-[1273px] h-[770px] overflow-hidden text-left text-29xl text-fffffff font-heading-4-32 ${className}`}
    >
      <Image
        className="absolute h-[2.08%] w-[6.75%] top-[95.3%] right-[44.97%] bottom-[2.62%] left-[48.28%] max-w-full overflow-hidden max-h-full"
        width={86}
        height={16}
        alt=""
        src="/dot.svg"
      />
      <b className="absolute top-[6.23%] left-[0%] leading-[56px]">
        What our client are saying
      </b>
      <div className="absolute h-[58.56%] w-[68.22%] top-[29.47%] right-[14.03%] bottom-[11.97%] left-[17.75%] shadow-[0px_0px_80px_rgba(205,_205,_205,_0.25)] bg-fffffff" />
      <div className="absolute h-[63.1%] w-[54.72%] top-[20.78%] right-[20.79%] bottom-[16.12%] left-[24.49%] text-5xl text-gray-1">
        <Image
          className="absolute h-[27.58%] w-[19.08%] top-[0%] right-[40.47%] bottom-[72.42%] left-[40.45%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
          width={133}
          height={134}
          alt=""
          src="/ellipse-6@2x.png"
        />
        <Image
          className="absolute h-[4.94%] w-[21.81%] top-[78.6%] right-[39.03%] bottom-[16.46%] left-[39.16%] max-w-full overflow-hidden max-h-full"
          width={152}
          height={24}
          alt=""
          src="/star.svg"
        />
        <b className="absolute top-[86.83%] left-[38.59%] leading-[32px]">
          Alamin Hasan
        </b>
        <div className="absolute top-[95.06%] left-[42.18%] text-base leading-[24px] text-gray-3">
          Food Specialist
        </div>
        <div className="absolute h-[21.4%] w-full top-[50.61%] left-[0%] text-lg leading-[26px] text-gray-2 text-center inline-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </div>
        <Image
          className="absolute h-[9.88%] w-[6.89%] top-[34.16%] right-[46.48%] bottom-[55.96%] left-[46.63%] max-w-full overflow-hidden max-h-full"
          width={48}
          height={48}
          alt=""
          src="/quotes.svg"
        />
      </div>
      <Image
        className="absolute h-[75.19%] w-[39.4%] top-[24.81%] right-[0%] bottom-[0%] left-[60.6%] max-w-full overflow-hidden max-h-full object-contain"
        width={502}
        height={579}
        alt=""
        src="/unsplashioq6qeibtbu@2x.png"
      />
      <div className="absolute h-[5.19%] w-[10.05%] top-[0%] right-[89.63%] bottom-[94.81%] left-[0.31%] text-13xl text-primary-color font-great-vibes-32">
        <div className="absolute top-[0%] left-[0%] leading-[40px]">
          Testimonials
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

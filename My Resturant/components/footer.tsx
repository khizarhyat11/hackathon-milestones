import type { NextPage } from "next";
import Image from "next/image";
import Mail from "./mail";
import SocialiIcon from "./sociali-icon";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-[8.73%] w-[100.19%] top-[91.51%] right-[-0.19%] bottom-[-0.24%] left-[0%] text-left text-base text-fffffff font-inter ${className}`}
    >
      <Image
        className="absolute h-[13.51%] w-[99.81%] top-[83.77%] right-[0.19%] bottom-[2.72%] left-[0%] max-w-full overflow-hidden max-h-full"
        width={1920}
        height={100}
        alt=""
        src="/rectangle-87882.svg"
      />
      <b className="absolute top-[27.97%] left-[15.59%] text-5xl leading-[32px] font-heading-4-32">
        About Us.
      </b>
      <div className="absolute h-[12.84%] w-[16.22%] top-[35.54%] left-[15.59%] leading-[24px] inline-block">
        <p className="m-0">orporate clients and leisure travelers has</p>
        <p className="m-0">been relying on Groundlink for dependab</p>
        <p className="m-0">safe, and professional chauffeured car</p>
        <p className="m-0">service in major cities across World.</p>
      </div>
      <div className="absolute h-[10%] w-[7.75%] top-[52.83%] right-[71.77%] bottom-[37.17%] left-[20.48%] text-sm">
        <div className="absolute h-[34.86%] w-[92.48%] top-[0%] left-[0%] text-lg leading-[26px] inline-block">
          Opening Houres
        </div>
        <div className="absolute h-[29.59%] w-[99.87%] top-[37.43%] left-[0.13%] leading-[22px] inline-block">
          Mon - Sat(8.00 - 6.00)
        </div>
        <div className="absolute h-[29.59%] w-[73.69%] top-[70.41%] left-[0.13%] leading-[22px] inline-block">
          Sunday - Closed
        </div>
      </div>
      <div className="absolute h-[49.59%] w-[7.45%] top-[27.97%] right-[53.82%] bottom-[22.44%] left-[38.73%] text-5xl font-heading-4-32">
        <b className="absolute top-[0%] left-[0.28%] leading-[32px]">
          Useful Links
        </b>
        <div className="absolute h-[84.74%] w-[60.67%] top-[15.26%] left-[0%] text-xl leading-[28px] font-inter inline-block">
          <p className="[margin-block-start:0] [margin-block-end:28px]">
            About
          </p>
          <p className="[margin-block-start:0] [margin-block-end:28px]">News</p>
          <p className="[margin-block-start:0] [margin-block-end:28px]">
            Partners
          </p>
          <p className="[margin-block-start:0] [margin-block-end:28px]">Team</p>
          <p className="[margin-block-start:0] [margin-block-end:28px]">Menu</p>
          <p className="m-0">Contacts</p>
        </div>
      </div>
      <div className="absolute h-[49.05%] w-[8.84%] top-[27.97%] right-[34.66%] bottom-[22.98%] left-[56.51%] text-5xl font-heading-4-32">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <b className="absolute top-[0%] left-[0%] leading-[32px]">Help?</b>
          <div className="absolute h-[84.57%] w-full top-[15.43%] left-[0%] text-xl leading-[28px] font-inter inline-block">
            <p className="[margin-block-start:0] [margin-block-end:28px]">
              FAQ
            </p>
            <p className="[margin-block-start:0] [margin-block-end:28px]">{`Term & conditions`}</p>
            <p className="[margin-block-start:0] [margin-block-end:28px]">
              Reporting
            </p>
            <p className="[margin-block-start:0] [margin-block-end:28px]">
              Documentation
            </p>
            <p className="[margin-block-start:0] [margin-block-end:28px]">
              Support Policy
            </p>
            <p className="m-0">Privacy</p>
          </div>
        </div>
      </div>
      <div className="absolute h-[7.16%] w-[12.68%] top-[35.4%] right-[15.79%] bottom-[57.44%] left-[71.53%]">
        <Image
          className="absolute h-[90.57%] w-[24.18%] top-[0%] right-[75.82%] bottom-[9.43%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          width={59}
          height={48}
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="absolute h-full w-[68.85%] top-[0%] right-[0.41%] bottom-[0%] left-[30.74%]">
          <div className="absolute top-[0%] left-[0%] leading-[24px] opacity-[0.49]">
            20 Feb 2022
          </div>
          <div className="absolute top-[50.94%] left-[0%] text-lg leading-[26px]">{`Keep Your Business `}</div>
        </div>
      </div>
      <div className="absolute h-[7.16%] w-[12.68%] top-[44.45%] right-[15.79%] bottom-[48.39%] left-[71.53%]">
        <Image
          className="absolute h-[90.94%] w-[24.55%] top-[1.89%] right-[75.45%] bottom-[7.17%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          width={60}
          height={48}
          alt=""
          src="/mask-group1@2x.png"
        />
        <div className="absolute h-[100.19%] w-[68.77%] top-[-1.89%] right-[0.12%] bottom-[1.7%] left-[31.11%]">
          <div className="absolute h-[44.44%] w-[57.15%] top-[0%] left-[0%] leading-[24px] inline-block opacity-[0.49]">
            20 Feb 2022
          </div>
          <div className="absolute h-[48.21%] w-full top-[51.98%] left-[0%] text-lg leading-[26px] inline-block">{`Keep Your Business `}</div>
        </div>
      </div>
      <div className="absolute h-[7.16%] w-[12.68%] top-[53.37%] right-[15.79%] bottom-[39.47%] left-[71.53%]">
        <Image
          className="absolute h-[90.94%] w-[24.55%] top-[1.89%] right-[75.45%] bottom-[7.17%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          width={60}
          height={48}
          alt=""
          src="/mask-group2@2x.png"
        />
        <div className="absolute h-[100.19%] w-[68.77%] top-[-1.89%] right-[0.12%] bottom-[1.7%] left-[31.11%]">
          <div className="absolute h-[44.44%] w-[57.15%] top-[0%] left-[0%] leading-[24px] inline-block opacity-[0.49]">
            20 Feb 2022
          </div>
          <div className="absolute h-[48.21%] w-full top-[51.98%] left-[0%] text-lg leading-[26px] inline-block">{`Keep Your Business `}</div>
        </div>
      </div>
      <div className="absolute h-[4.32%] w-[7.23%] top-[27.97%] right-[21.25%] bottom-[67.71%] left-[71.53%] text-5xl font-heading-4-32">
        <b className="absolute top-[0%] left-[0%] leading-[32px]">
          Recent Post
        </b>
      </div>
      <div className="absolute h-[19.27%] w-[60.82%] top-[0%] right-[20.52%] bottom-[80.73%] left-[18.66%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute top-[39.97%] left-[0%] leading-[24px]">{`Don’t wait make a smart & logical quote here. Its pretty easy.`}</div>
              <b className="absolute top-[0%] left-[0%] text-13xl leading-[40px] font-heading-4-32 text-primary-color">
                <span>St</span>
                <span className="text-fffffff">ill You Need Our Support ?</span>
              </b>
              <Image
                className="absolute h-[0.21%] w-full top-[99.79%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
                width={1170}
                height={100}
                alt=""
                src="/vector-171.svg"
              />
            </div>
          </div>
        </div>
        <Mail
          rectangle8783="/rectangle-87831.svg"
          rectangle8784="/rectangle-87841.svg"
          mailHeight="39.27%"
          mailWidth="39.23%"
          mailTop="0.07%"
          mailBottom="60.66%"
          mailLeft="60.77%"
          subscribeNowTop="28.57%"
          enterYourEmailTop="28.57%"
        />
      </div>
      <div className="absolute h-[3.24%] w-[19.96%] top-[88.91%] right-[64.44%] bottom-[7.85%] left-[15.59%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute top-[0%] left-[0%] leading-[24px]">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </div>
        </div>
      </div>
      <Image
        className="absolute h-[57.56%] w-[15.57%] top-[42.44%] right-[0%] bottom-[0%] left-[84.43%] max-w-full overflow-hidden max-h-full object-contain"
        width={300}
        height={426}
        alt=""
        src="/rectangle-8925@2x.png"
      />
      <Image
        className="absolute h-[9.73%] w-[4.05%] top-[52.97%] right-[80.35%] bottom-[37.31%] left-[15.59%] max-w-full overflow-hidden max-h-full"
        width={78}
        height={72}
        alt=""
        src="/watch1.svg"
      />
      <SocialiIcon
        rectangle8789="/rectangle-87891.svg"
        rectangle8790="/rectangle-87891.svg"
        rectangle8791="/rectangle-87891.svg"
        rectangle8787="/rectangle-87891.svg"
        rectangle8788="/rectangle-87891.svg"
        socialiIconHeight="4.59%"
        socialiIconWidth="12.48%"
        socialiIconTop="88.23%"
        socialiIconRight="15.79%"
        socialiIconBottom="7.17%"
        socialiIconLeft="71.74%"
        rectangleIconWidth="15%"
        rectangleIconRight="43.33%"
        rectangleIconWidth1="15%"
        rectangleIconRight1="64.17%"
        rectangleIconLeft="20.83%"
        rectangleIconWidth2="15%"
        rectangleIconRight2="85%"
        divTop="25%"
        divLeft="5.42%"
        divColor="#4f4f4f"
        divTop1="25%"
        divLeft1="25%"
        divColor1="#4f4f4f"
        divTop2="22.06%"
        divLeft2="46.25%"
        divColor2="#4f4f4f"
        rectangleIconWidth3="15%"
        rectangleIconRight3="22.5%"
        rectangleIconLeft1="62.5%"
        rectangleIconWidth4="15%"
        rectangleIconRight4="1.67%"
        rectangleIconLeft2="83.33%"
        divTop3="22.06%"
        divLeft3="66.25%"
        divTop4="25%"
        divLeft4="87.5%"
        divColor3="#4f4f4f"
      />
    </div>
  );
};

export default Footer;

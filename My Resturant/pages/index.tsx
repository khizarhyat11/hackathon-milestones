import type { NextPage } from "next";
import Footer from "../components/footer";
import RestraindCreativeProcess from "../components/restraind-creative-process";
import Blog from "../components/blog";
import Testimonials from "../components/testimonials";
import MeetOurCheef from "../components/meet-our-cheef";
import OurMenu from "../components/our-menu";
import Clients from "../components/clients";
import WhyChoseUs from "../components/why-chose-us";
import FoodCatagory from "../components/food-catagory";
import AboutUs1 from "../components/about-us1";
import HeaderHero from "../components/header-hero";

const Restaurant: NextPage = () => {
  return (
    <div className="w-full relative bg-black-ododod h-[8479px] overflow-hidden">
      <Footer />
      <RestraindCreativeProcess />
      <Blog />
      <Testimonials />
      <MeetOurCheef />
      <OurMenu />
      <Clients />
      <WhyChoseUs />
      <FoodCatagory />
      <AboutUs1 />
      <HeaderHero />
    </div>
  );
};

export default Restaurant;

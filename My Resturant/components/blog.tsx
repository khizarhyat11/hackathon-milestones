import type { NextPage } from "next";
import BlogCard from "./blog-card";

export type BlogType = {
  className?: string;
};

const Blog: NextPage<BlogType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[6907px] left-[300px] w-[1320px] h-[732px] text-left text-29xl text-primary-color font-heading-4-32 ${className}`}
    >
      <b className="absolute top-[48px] left-[429px] leading-[56px]">
        <span> La</span>
        <span className="text-fffffff">{`test News & Blog`}</span>
      </b>
      <div className="absolute top-[0%] left-[45.3%] text-13xl leading-[40px] font-great-vibes-32">
        Blog Post
      </div>
      <BlogCard
        pellentesqueNonEfficiturMi="Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis"
        imagePlaceholder="/image-placeholder@2x.png"
      />
      <BlogCard
        pellentesqueNonEfficiturMi="Curabitur rutrum velit ac congue malesuada"
        imagePlaceholder="/image-placeholder1@2x.png"
        blogCard1Left="896px"
      />
      <BlogCard
        pellentesqueNonEfficiturMi="Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A"
        imagePlaceholder="/image-placeholder2@2x.png"
        blogCard1Left="448px"
      />
    </div>
  );
};

export default Blog;

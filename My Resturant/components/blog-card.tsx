import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type BlogCardType = {
  className?: string;
  pellentesqueNonEfficiturMi?: string;
  imagePlaceholder: string;

  /** Style props */
  blogCard1Left?: CSSProperties["left"];
};

const BlogCard: NextPage<BlogCardType> = ({
  className = "",
  pellentesqueNonEfficiturMi = "Default Blog Title",
  imagePlaceholder,
  blogCard1Left,
}) => {
  const blogCard1Style: CSSProperties = useMemo(() => {
    return {
      left: blogCard1Left,
    };
  }, [blogCard1Left]);

  return (
    <div
      className={`relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden ${className}`}
      style={blogCard1Style}
    >
      {/* Image */}
      <Image
        className="w-full h-48 object-cover"
        width={423}
        height={349}
        alt="Blog Image"
        src={imagePlaceholder}
      />

      {/* Content */}
      <div className="p-4">
        {/* Date */}
        <p className="text-sm text-primary-color mb-2">10 February 2022</p>

        {/* Title */}
        <b className="text-lg font-bold leading-snug mb-3 block">
          {pellentesqueNonEfficiturMi}
        </b>

        {/* Learn More Button */}
        <button className="text-primary-color text-sm font-medium hover:underline">
          Learn More
        </button>
      </div>

      {/* Action Icons */}
      <div className="flex items-center justify-end p-4 gap-4">
        <Image
          width={20}
          height={20}
          src="/thumbsup.svg"
          alt="Like Icon"
          className="cursor-pointer"
        />
        <Image
          width={20}
          height={20}
          src="/chatdots.svg"
          alt="Comment Icon"
          className="cursor-pointer"
        />
        <Image
          width={20}
          height={20}
          src="/sharenetwork.svg"
          alt="Share Icon"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default BlogCard;

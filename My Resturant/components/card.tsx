import type { NextPage } from "next";
import ChefCard from "./chef-card";

export type CardType = {
  className?: string;
};

const Card: NextPage<CardType> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[160px] left-[1116px] w-[312px] h-[391px] text-left text-lg text-gray-1 font-inter ${className}`}
    >
      <ChefCard
        rectangle8863="/rectangle-8863@2x.png"
        dEstwood="M. William"
        chiefChef="Advertising Chef"
      />
    </div>
  );
};

export default Card;

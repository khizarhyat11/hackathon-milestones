import type { NextPage } from "next";
import ChefCard from "./chef-card";

export type Card1Type = {
  className?: string;
};

const Card1: NextPage<Card1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[160px] left-[1452px] w-[312px] h-[391px] ${className}`}
    >
      <ChefCard
        rectangle8863="/rectangle-88631@2x.png"
        dEstwood="W.Readfroad"
        chiefChef="Chef"
      />
    </div>
  );
};

export default Card1;

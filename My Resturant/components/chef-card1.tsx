import type { NextPage } from "next";
import ChefCard from "./chef-card";

export type ChefCard1Type = {
  className?: string;
};

const ChefCard1: NextPage<ChefCard1Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[160px] left-[444px] w-[312px] h-[391px] ${className}`}
    >
      <ChefCard
        rectangle8863="/rectangle-88632@2x.png"
        dEstwood="D.Estwood"
        chiefChef="Chief Chef"
      />
    </div>
  );
};

export default ChefCard1;

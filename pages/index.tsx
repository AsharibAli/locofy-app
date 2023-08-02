import type { NextPage } from "next";
import Head from "next/head";
import GroupIcon from "../components/group-icon";
import Homepage from "../components/homepage";

const CoverFrame: NextPage = () => {
  return (
    <div className="relative bg-primary-contrast w-full h-[960px] overflow-hidden text-left text-xl text-skyblue font-components-button-large">
      <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[1920px] h-[960px]" />
      <GroupIcon />
      <img
        className="absolute h-[7.2%] w-[22.92%] top-[44.34%] right-[3.36%] bottom-[48.46%] left-[73.72%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/weblogo-1.svg"
      />
      <div className="absolute top-[875.25px] left-[1173.29px]">
        Made by Team Locofy
      </div>
      <div className="absolute top-[827.38px] left-[1173.29px] text-[34px] font-medium text-primary-contrast">
        Travel Website
      </div>
      <Homepage />
    </div>
  );
};

export default CoverFrame;

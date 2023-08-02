import type { NextPage } from "next";

const AccountSection: NextPage = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-[8.97px]">
      <img
        className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0 hidden md:flex"
        alt=""
        src="/notification.svg"
      />
      <img
        className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
        alt=""
        src="/notification1.svg"
      />
      <img
        className="rounded-[28.41px] w-[26.91px] h-[26.91px] object-cover"
        alt=""
        src="/top_avatar@2x.png"
      />
    </div>
  );
};

export default AccountSection;

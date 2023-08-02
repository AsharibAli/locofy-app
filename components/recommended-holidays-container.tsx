import type { NextPage } from "next";
import RecommendedHolidaysCard from "./recommended-holidays-card";

const RecommendedHolidaysContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-center gap-[17.94px] text-left text-[22.43px] text-darkslategray-300 font-components-button-large">
      <div className="self-stretch flex flex-row items-center justify-start">
        <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-3xl">
          Recommended Holidays
        </b>
        <a
          className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast w-[149.43px] flex flex-row items-start justify-start gap-[7.48px] text-right text-[13.46px] text-cornflowerblue-300 md:hidden"
          href="#"
        >
          <div className="relative tracking-[0.04em] font-medium inline-block w-[124.01px] shrink-0">
            View all holidays
          </div>
          <img
            className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
            alt=""
            src="/arrowright2.svg"
          />
        </a>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
        <RecommendedHolidaysCard
          imageDimensions="/unsplash5mv818tzxeo@2x.png"
          locationName="Bali"
          packageDuration="4D3N"
          price="$899"
        />
        <RecommendedHolidaysCard
          imageDimensions="/unsplashj82dskoxvy8@2x.png"
          locationName="Switzerland"
          packageDuration="6D5N"
          price="$900"
        />
        <RecommendedHolidaysCard
          imageDimensions="/unsplash4ezkckxolre@2x.png"
          locationName="Boracay"
          packageDuration="5D4N"
          price="$699"
        />
        <RecommendedHolidaysCard
          imageDimensions="/unsplashuyqmxhjr3ne@2x.png"
          locationName="Palawan"
          packageDuration="4D3N"
          price="$789"
        />
      </div>
      <div className="rounded-[23.17px] bg-primary-contrast w-[149.43px] hidden flex-row items-start justify-start gap-[7.48px] text-right text-[13.46px] text-cornflowerblue-300 md:flex md:[mrgin-top:16px]">
        <div className="relative tracking-[0.04em] font-medium inline-block w-[124.01px] shrink-0 md:w-auto">
          View all holidays
        </div>
        <img
          className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
          alt=""
          src="/arrowright3.svg"
        />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;

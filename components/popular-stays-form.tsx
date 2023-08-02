import type { NextPage } from "next";
import HotelCardForm1 from "./hotel-card-form1";
import HotelCardForm from "./hotel-card-form";

const PopularStaysForm: NextPage = () => {
  return (
    <form className="self-stretch flex flex-col items-start justify-start gap-[14.95px]">
      <div className="self-stretch flex flex-row items-center justify-center">
        <b className="relative text-[22.43px] tracking-[0.04em] capitalize inline-block font-components-button-large text-darkslategray-300 text-left w-[826.29px] h-[26.16px] shrink-0 sm:text-3xl">
          Popular Stays
        </b>
        <a
          className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast flex flex-row items-start justify-start gap-[7.48px] md:hidden"
          href="#"
        >
          <div className="relative text-[13.46px] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[105.15px] shrink-0">
            View all stays
          </div>
          <img
            className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
            alt=""
            src="/arrowright4.svg"
          />
        </a>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
        <HotelCardForm1
          imageDimensions="/unsplashrlwe8f8anoc@2x.png"
          accommodationType="Entire bungalow"
          accommodationName="Matterhorn Suites"
          pricePerNight="$575/night"
          roomDimensions="/video1.svg"
          reviewCount="(60 reviews)"
          rating="4.9"
          roomSizeDimensions="/vector.svg"
        />
        <HotelCardForm
          roomDimensions="/unsplashtsn8bpopveo@2x.png"
          accommodationType="2-Story beachfront suite"
          accommodationName="Discovery Shores"
          pricePerNight="$360/night"
          reviewCount="(116 reviews)"
          rating="4.8"
          imageDimensions="/vector1.svg"
        />
        <HotelCardForm
          roomDimensions="/unsplashrlwe8f8anoc1@2x.png"
          accommodationType="Single deluxe hut"
          accommodationName="Arctic Hut "
          pricePerNight="$420/night"
          reviewCount="(78 reviews)"
          rating="4.7"
          imageDimensions="/vector2.svg"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelCardForm1
          imageDimensions="/unsplashyqrybvxug5q@2x.png"
          accommodationType="Deluxe King Room"
          accommodationName="Lake Louise Inn"
          pricePerNight="$244/night"
          roomDimensions="/video2.svg"
          reviewCount="(63 reviews)"
          rating="4.6"
          roomSizeDimensions="/vector3.svg"
        />
      </div>
      <div className="rounded-[23.17px] bg-primary-contrast hidden flex-row items-start justify-start gap-[7.48px] md:flex md:mt-4">
        <div className="relative text-[13.46px] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[105.15px] shrink-0 md:w-auto">
          View all stays
        </div>
        <img
          className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
          alt=""
          src="/arrowright5.svg"
        />
      </div>
    </form>
  );
};

export default PopularStaysForm;

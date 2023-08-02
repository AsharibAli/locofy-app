import type { NextPage } from "next";

type HotelCardForm1Type = {
  imageDimensions?: string;
  accommodationType?: string;
  accommodationName?: string;
  pricePerNight?: string;
  roomDimensions?: string;
  reviewCount?: string;
  rating?: string;
  roomSizeDimensions?: string;
};

const HotelCardForm1: NextPage<HotelCardForm1Type> = ({
  imageDimensions,
  accommodationType,
  accommodationName,
  pricePerNight,
  roomDimensions,
  reviewCount,
  rating,
  roomSizeDimensions,
}) => {
  return (
    <div className="self-stretch flex-1 flex flex-row py-0 px-[8.970474243164062px] box-border items-start justify-center w-3/12 text-left text-[11.96px] text-darkslategray-300 font-components-button-large md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
      <a
        className="[text-decoration:none] self-stretch flex-1 rounded-[7.48px] bg-primary-contrast box-border flex flex-col py-[11.213094711303711px] px-[9.71801471710205px] items-start justify-start gap-[17.19px] w-3/12 text-[inherit] border-[0.7px] border-solid border-whitesmoke hover:bg-gainsboro-200 lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5"
        href="#"
      >
        <img
          className="self-stretch relative rounded-[7.48px] max-w-full overflow-hidden h-[149.51px] shrink-0 object-cover"
          alt=""
          src={imageDimensions}
        />
        <div className="self-stretch flex flex-row items-start justify-start gap-[8.22px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[4.49px]">
            <div className="self-stretch relative tracking-[0.02em] text-gray-100">
              {accommodationType}
            </div>
            <b className="self-stretch relative text-[16.45px] tracking-[0.04em] capitalize sm:text-xl">
              {accommodationName}
            </b>
            <div className="self-stretch relative text-[13.46px] tracking-[0.04em]">
              {pricePerNight}
            </div>
          </div>
          <img
            className="relative w-[18.69px] h-[18.69px] overflow-hidden shrink-0"
            alt=""
            src={roomDimensions}
          />
        </div>
        <div className="relative w-[201.84px] h-[14.2px] text-cornflowerblue-200">
          <div className="absolute top-[0px] left-[40.09px] tracking-[0.04em] inline-block w-[161.74px] h-[14.2px]">
            {reviewCount}
          </div>
          <div className="absolute top-[0px] left-[0px] w-[33.15px] h-[14.2px] text-darkslategray-300">
            <div className="absolute top-[0px] left-[15.21px] tracking-[0.04em] font-medium inline-block w-[17.94px] h-[14.2px]">
              {rating}
            </div>
            <img
              className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src={roomSizeDimensions}
            />
          </div>
        </div>
        <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded-[2.99px] box-border h-[34.39px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[0.7px] border-solid border-lavender sm:w-[100%!important]">
          <div className="relative text-[11.21px] tracking-[0.34px] leading-[19.44px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left inline-block w-[81.48px] h-[19.44px] shrink-0">
            More details
          </div>
        </button>
      </a>
    </div>
  );
};

export default HotelCardForm1;

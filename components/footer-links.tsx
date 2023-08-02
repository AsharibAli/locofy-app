import type { NextPage } from "next";

const FooterLinks: NextPage = () => {
  return (
    <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row py-[24.668806076049805px] px-[62.7933235168457px] items-start justify-start gap-[32.89px] text-left text-[13.46px] text-primary-contrast font-components-button-large lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[10.47px] mb-[40px!important] md:flex-[unset] md:self-stretch">
        <img
          className="relative w-[130.07px] h-[24.67px] overflow-hidden shrink-0"
          alt=""
          src="/logo.svg"
        />
        <div className="self-stretch relative leading-[20.18px]">
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <img
          className="relative w-[97.18px] h-[22.43px]"
          alt=""
          src="/social-icons.svg"
        />
      </div>
      <div className="relative box-border w-[0.75px] h-[118.02px] border-r-[0.7px] border-solid border-gray-500 md:hidden" />
      <div className="flex-1 flex flex-row items-start justify-between text-[11.96px] md:flex-[unset] md:self-stretch sm:flex-col">
        <div className="relative w-[147.51px] h-[119.43px] sm:mb-[40px!important]">
          <a className="[text-decoration:none] absolute top-[35.7px] left-[0px] text-[inherit] inline-block w-[101.42px] h-[14.2px]">
            About Us
          </a>
          <div className="absolute top-[0px] left-[0px] text-[14.95px] leading-[20.18px] font-medium inline-block w-[130.61px] h-[20.18px]">
            Company
          </div>
          <div className="absolute top-[58.87px] left-[0px] inline-block w-[63px] h-[14.2px]">
            News
          </div>
          <div className="absolute top-[82.05px] left-[0px] inline-block w-[86.05px] h-[14.2px]">
            Careers
          </div>
          <div className="absolute top-[105.22px] left-[0px] inline-block w-[147.51px] h-[14.2px]">
            How we work
          </div>
        </div>
        <div className="relative w-[147.51px] h-[119.43px] sm:mb-[40px!important]">
          <div className="absolute top-[35.7px] left-[0px] inline-block w-[81.95px] h-[14.2px]">
            Account
          </div>
          <div className="absolute top-[0px] left-[0px] text-[14.95px] leading-[20.18px] font-medium inline-block w-[98.34px] h-[20.18px]">
            Support
          </div>
          <div className="absolute top-[58.87px] left-[0px] inline-block w-[147.51px] h-[14.2px]">
            Support Center
          </div>
          <div className="absolute top-[82.05px] left-[0px] inline-block w-[39.61px] h-[14.2px]">
            FAQ
          </div>
          <div className="absolute top-[105.22px] left-[0px] inline-block w-[122.93px] h-[14.2px]">
            Accessibility
          </div>
        </div>
        <div className="relative w-[147.51px] h-[119.43px]">
          <div className="absolute top-[35.7px] left-[0px] inline-block w-[129.23px] h-[14.2px]">
            Covid Advisory
          </div>
          <div className="absolute top-[0px] left-[0px] text-[14.95px] leading-[20.18px] font-medium inline-block w-[57.3px] h-[20.18px]">
            More
          </div>
          <div className="absolute top-[58.87px] left-[0px] inline-block w-[101.19px] h-[14.2px]">
            Airline Fees
          </div>
          <div className="absolute top-[82.05px] left-[0px] inline-block w-[37.79px] h-[14.2px]">
            Tips
          </div>
          <div className="absolute top-[105.22px] left-[0px] inline-block w-[147.51px] h-[14.2px]">
            Quarantine Rules
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLinks;

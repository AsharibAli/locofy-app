import type { NextPage } from "next";
import { useState } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import AccountSection from "./account-section";
import PopularDestinationsContainer from "./popular-destinations-container";
import RecommendedHolidaysContainer from "./recommended-holidays-container";
import PopularStaysForm from "./popular-stays-form";
import VariantContainedSizeLarge from "./variant-contained-size-large";
import FooterLinks from "./footer-links";

const Homepage: NextPage = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="absolute top-[53.25px] left-[56px] rounded-2xl bg-primary-contrast w-[1076.45px] h-[850.71px] overflow-hidden flex flex-col items-center justify-start gap-[51.58px] text-center text-[13.46px] text-primary-contrast font-components-button-large hover:[background:linear-gradient(#fff,_#fff),_#87550a] md:flex-row sm:w-full sm:hover:bg-gray-200">
        <div className="self-stretch flex flex-col items-center justify-start text-26xl-6 font-baloo-bhai">
          <header className="self-stretch bg-primary-contrast h-[57.56px] flex flex-row py-[16.445871353149414px] px-[59.803165435791016px] box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-[10.47px] text-darkslategray-200 font-components-button-large lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
            <div className="flex-1 flex flex-row items-center justify-between">
              <img
                className="relative w-[130.07px] h-[24.67px] overflow-hidden shrink-0"
                alt=""
                src="/fickleflight-logo.svg"
              />
              <div className="flex flex-row items-center justify-end gap-[26.91px] sm:flex">
                <div className="flex flex-row items-center justify-end gap-[22.43px] md:hidden">
                  <div className="relative text-cornflowerblue-200 inline-block w-[35.13px] h-[11.96px] shrink-0">
                    Explore
                  </div>
                  <div className="relative inline-block w-[32.14px] h-[11.96px] shrink-0">
                    Search
                  </div>
                  <div className="relative inline-block w-[30.65px] h-[11.96px] shrink-0">
                    Hotels
                  </div>
                  <div className="relative inline-block w-[29.15px] h-[11.96px] shrink-0">
                    Offers
                  </div>
                </div>
                <AccountSection />
              </div>
            </div>
          </header>
          <div className="self-stretch relative h-[478.43px] bg-[url(/search-section@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[0px] left-[0px] w-full h-[478.43px] flex flex-col py-0 px-[104.6555404663086px] box-border items-center justify-center gap-[32.14px] md:pl-[30px] md:pr-[30px] md:box-border">
              <div className="self-stretch flex flex-col items-center justify-start gap-[3.74px]">
                <div className="self-stretch relative leading-[50.09px] sm:text-23xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
                <div className="self-stretch relative text-[17.94px] leading-[23.92px] font-components-button-large">
                  Find the best destinations and the most popular stays!
                </div>
              </div>
              <div className="self-stretch rounded-[7.48px] bg-primary-contrast flex flex-row p-[14.950791358947754px] items-start justify-start text-[8.97px] text-dimgray font-components-button-large md:flex-col">
                <div className="flex-1 flex flex-row items-start justify-start md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                  <div className="flex-1 flex flex-col p-[3.7376978397369385px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                    <Autocomplete
                      className="self-stretch"
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)Sanya (SYX)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Departure"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Singapore -  Changi (SIN)"
                      size="medium"
                    />
                  </div>
                  <div className="flex-1 flex flex-col p-[3.7376978397369385px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                    <div className="self-stretch h-[41.86px] flex flex-col items-start justify-start">
                      <div className="self-stretch rounded-[2.99px] box-border h-[41.86px] flex flex-col py-0 px-[8.970474243164062px] items-start justify-start border-[0.7px] border-solid border-gray-400">
                        <button className="cursor-pointer [border:none] py-0 px-[2.9901583194732666px] bg-primary-contrast h-[1.5px] flex flex-row box-border items-center justify-start">
                          <div className="relative text-[8.97px] tracking-[0.11px] leading-[8.97px] font-components-button-large text-gray-300 text-left flex items-center w-[26.16px] h-[8.97px] shrink-0">
                            Arrival
                          </div>
                        </button>
                        <div className="self-stretch overflow-hidden flex flex-row py-[11.213094711303711px] px-0 items-center justify-start gap-[5.98px]">
                          <div className="hidden flex-row items-start justify-start gap-[5.98px]">
                            <div className="flex flex-col items-start justify-start">
                              <div className="rounded-[11.96px] bg-gainsboro-100 flex flex-row p-[2.9901583194732666px] items-center justify-start">
                                <div className="rounded-[47.84px] bg-silver w-[17.94px] h-[17.94px] overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                  <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[166%] flex items-center justify-center">
                                    F
                                  </div>
                                </div>
                                <div className="flex flex-col py-[2.2426187992095947px] px-[4.4852375984191895px] items-start justify-start text-left text-[9.72px] text-text-primary">
                                  <div className="relative tracking-[0.12px] leading-[13.46px]">
                                    Chip
                                  </div>
                                </div>
                                <img
                                  className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/cancel.svg"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start">
                              <div className="rounded-[11.96px] bg-gainsboro-100 flex flex-row p-[2.9901583194732666px] items-center justify-start">
                                <div className="rounded-[47.84px] bg-silver w-[17.94px] h-[17.94px] overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                  <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[166%] flex items-center justify-center">
                                    F
                                  </div>
                                </div>
                                <div className="flex flex-col py-[2.2426187992095947px] px-[4.4852375984191895px] items-start justify-start text-left text-[9.72px] text-text-primary">
                                  <div className="relative tracking-[0.12px] leading-[13.46px]">
                                    Chip
                                  </div>
                                </div>
                                <img
                                  className="relative w-[17.94px] h-[17.94px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/cancel1.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 relative text-[11.96px] tracking-[0.11px] leading-[17.94px] text-text-primary text-left">
                            Los Angeles (LA)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col p-[3.7376978397369385px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                    <div className="self-stretch">
                      <DatePicker
                        label="Date"
                        value={dateFieldDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setDateFieldDateTimePickerValue(newValue);
                        }}
                        slotProps={{
                          textField: {
                            variant: "outlined",
                            size: "medium",
                            fullWidth: true,
                            color: "primary",
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-[3.7376978397369385px] items-center justify-center md:w-full md:text-left">
                  <button className="cursor-pointer [border:none] p-0 bg-black rounded-[2.99px] w-[122.6px] h-[41.86px] overflow-hidden shrink-0 flex flex-col items-center justify-center [transition:0.3s] hover:bg-orange md:mr-[auto] sm:w-[100%!important]">
                    <div className="relative text-[11.21px] tracking-[0.34px] leading-[19.44px] uppercase font-medium font-components-button-large text-primary-contrast text-center inline-block w-[109.87px]">
                      Update flights
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col py-0 px-[59.803165435791016px] box-border items-center justify-start gap-[59.8px] max-w-[1280px] text-left text-darkslategray-300 md:pl-[30px] md:pr-[30px] md:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[14.95px] md:block">
            <b className="relative tracking-[0.04em] uppercase inline-block w-[947.92px]">
              Upcoming Flight
            </b>
            <form className="self-stretch flex flex-row items-start justify-start gap-[26.91px] md:flex-col">
              <div className="rounded-[5.98px] flex flex-col p-[14.950791358947754px] items-start justify-start gap-[15.7px] border-[0.7px] border-solid border-whitesmoke lg:w-[520px] md:w-full md:block md:mb-[30px]">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative w-[53.82px] h-[34.39px]">
                    <b className="absolute top-[0px] left-[0px] text-[17.94px] tracking-[0.04em] capitalize inline-block font-components-button-large text-cornflowerblue-300 text-left w-[33.44px] h-[20.93px]">
                      SIN
                    </b>
                    <div className="absolute top-[22.43px] left-[0px] text-[10.47px] tracking-[0.02em] capitalize font-components-button-large text-gray-100 text-left inline-block w-[53.82px] h-[11.96px]">
                      Singapore
                    </div>
                  </div>
                  <div className="relative w-[87.72px] h-[32.96px]">
                    <b className="absolute top-[20.99px] left-[17.71px] text-[10.47px] tracking-[0.02em] capitalize inline-block font-components-button-large text-gray-100 text-left w-[49.08px] h-[11.96px]">
                      15H 55M
                    </b>
                    <img
                      className="absolute top-[0px] left-[0px] w-[87.72px] h-[17.94px]"
                      alt=""
                      src="/group-17.svg"
                    />
                  </div>
                  <div className="relative w-[65.24px] h-[34.39px]">
                    <b className="absolute top-[0px] left-[26.91px] text-[17.94px] tracking-[0.04em] capitalize inline-block font-components-button-large text-cornflowerblue-300 text-right w-[38.33px] h-[20.93px]">
                      LAX
                    </b>
                    <div className="absolute top-[22.43px] left-[0px] text-[10.47px] tracking-[0.02em] capitalize font-components-button-large text-gray-100 text-right inline-block w-[65.24px] h-[11.96px]">
                      Los Angeles
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative box-border h-[0.75px] border-t-[0.7px] border-solid border-whitesmoke md:w-full" />
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative text-[10.47px] tracking-[0.02em] capitalize font-components-button-large text-gray-100 text-left inline-block w-[152.42px] shrink-0">
                    Departs on: 1 May, 08:00 AM
                  </div>
                  <div className="relative text-[10.47px] tracking-[0.02em] text-gray-100 text-right inline-block w-[65.21px] shrink-0">
                    <b className="font-components-button-large">4 days</b>
                    <span className="font-components-button-large"> to go</span>
                  </div>
                </div>
              </div>
              <div className="relative box-border w-[0.75px] h-[109.13px] border-r-[0.7px] border-solid border-whitesmoke md:hidden" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[14.95px] md:w-full md:flex-[unset] md:self-stretch">
                <div className="self-stretch relative text-[13.46px] tracking-[0.04em] uppercase font-components-button-large text-lightgray text-left">
                  Prepare for your trip
                </div>
                <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <img
                      className="relative w-[48.88px] h-[48.88px]"
                      alt=""
                      src="/group-21.svg"
                    />
                    <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-left inline-block w-[29.15px] h-[13.46px] shrink-0">
                      Hotel
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <img
                      className="relative rounded-[11.96px] w-[48.88px] h-[48.88px]"
                      alt=""
                      src="/frame-21.svg"
                    />
                    <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[59.8px] h-[13.46px] shrink-0">
                      Attractions
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <img
                      className="relative w-[48.88px] h-[48.88px]"
                      alt=""
                      src="/group-211.svg"
                    />
                    <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[23.92px] h-[13.46px] shrink-0">
                      Eats
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <input
                      className="[border:none] bg-gold relative rounded-[11.96px] w-[48.88px] h-[48.88px]"
                      type="text"
                    />
                    <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[52.33px] h-[13.46px] shrink-0">
                      Commute
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <input
                      className="[border:none] bg-cornflowerblue-100 relative rounded-[11.96px] w-[52.33px] h-[48.88px]"
                      type="text"
                    />
                    <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[24.01px]">
                      Taxi
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                    <img
                      className="relative rounded-[11.96px] w-[48.88px] h-[48.88px]"
                      alt=""
                      src="/frame-211.svg"
                    />
                    <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[38.87px] h-[13.46px] shrink-0">
                      Movies
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <PopularDestinationsContainer />
          <RecommendedHolidaysContainer />
          <PopularStaysForm />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-cornflowerblue-300">
          <div className="self-stretch relative h-[395.45px] overflow-hidden shrink-0 bg-[url(/frame-708@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="[position:relative!important] top-[38.87px] left-[auto!important] w-[410.4px] flex flex-col p-[14.950791358947754px] box-border items-center justify-start gap-[22.43px] ml-[auto] mr-[auto] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
              <div className="self-stretch flex flex-col items-center justify-start gap-[5.23px]">
                <b className="self-stretch relative tracking-[0.04em] uppercase">
                  subscribe to our newsletter
                </b>
                <b className="self-stretch relative text-[22.43px] text-darkslategray-100">
                  Get weekly updates
                </b>
              </div>
              <div className="self-stretch rounded-[8.97px] bg-primary-contrast shadow-[0px_0px_17.94px_rgba(0,_0,_0,_0.03)] flex flex-col py-[20.931108474731445px] px-[22.426189422607422px] items-start justify-start gap-[12.71px] text-left text-slategray border-[0.7px] border-solid border-whitesmoke">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[25.42px]">
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[7.48px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch"
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Your name"
                      size="medium"
                      margin="none"
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch"
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Email address"
                      size="medium"
                      margin="none"
                    />
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-orange rounded-[2.99px] w-[122.6px] h-[41.86px] overflow-hidden shrink-0 flex flex-col items-center justify-center hover:bg-saddlebrown sm:w-full sm:hover:bg-peru">
                  <VariantContainedSizeLarge
                    button="submit"
                    variantContainedSizeLargePosition="unset"
                    variantContainedSizeLargeBoxSizing="border-box"
                    buttonFontSize="11.21px"
                    buttonLineHeight="19.44px"
                    buttonColor="#fff"
                    buttonDisplay="inline-block"
                  />
                </button>
              </div>
            </div>
          </div>
          <FooterLinks />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Homepage;

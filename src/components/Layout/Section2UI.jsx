import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { ArrowBigTopBtn, ArrowBottom, ArrowBtn } from "../../assets/icon";
import Section2 from "../../assets/icon/Section2";
import {
  Beautiful,
  BG,
  BGMobi,
  BG_motobike_full,
  Group,
  GroupMap,
  NuiMobie,
  OverMotoTour,
  OverMotoTourMobi,
  PhoneContact,
  Section2ImgVideo,
  Video,
} from "../../assets/img";
import { FileldCheck } from "../field";
import { AnimationSpin } from "../pages/HomePage";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
const BGStyless = styled.div`
  background: url(${BG}) lightgray 100% / cover no-repeat;
  background-color: #122718;
`;
const OverRungNui = styled.div`
  background: linear-gradient(
      180deg,
      #13341c 0%,
      rgba(18, 39, 24, 0.5) 50%,
      #13341c 100%
    ),
    url(${BGMobi}) lightgray 100% / cover no-repeat;
  background-color: #13341c;
  /* background: ; */
`;
const MobiSection = styled.div``;
const SpinStyless = styled.div`
  .img_spin {
    animation: spin 20s linear infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(-360deg);
    }
  }
`;
const Section2UI = ({ tgMenu }) => {
  const refImgMotoTour = useRef();
  useEffect(() => {
    // const newTl = gsap.timeline();
    const el = refImgMotoTour.current;
    gsap.fromTo(
      el,
      { x: 400 },
      {
        x: 0,
        duration: 4,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
    gsap.fromTo(
      ".videoSec2",
      { scale: 0.93, y: 15 },
      {
        scale: 1.9,
        y: -190,
        duration: 4,
        scrollTrigger: {
          trigger: ".videoSec2",
        },
      }
    );
    gsap.fromTo(
      "#webcome_hagiang",
      { scale: 1 },
      {
        scale: 0.7,
        duration: 3,
        scrollTrigger: {
          trigger: "#webcome_hagiang",
        },
      }
    );
    gsap.fromTo(
      "#imgBgVideo",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 4,
        scrollTrigger: {
          trigger: "#imgBgVideo",
        },
      }
    );
  }, []);
  const handleResetTrigger = () => {
    const el = refImgMotoTour.current;
    gsap.fromTo(
      el,
      { x: 400 },
      {
        x: 0,
        duration: 4,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  };
  const handleResetTrigger1 = () => {
    const el = refImgMotoTour.current;
    gsap.fromTo(
      el,
      { x: 0 },
      {
        x: 400,
        duration: 4,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  };
  const UpText = (text) => {
    return text.toUpperCase();
  };
  return (
    <>
      <div
        className={`hidden lg:block h-[160.458rem] w-full relative bg-[#122718]  ${
          tgMenu ? "pointer-events-none" : ""
        }`}
      >
        <div className="absolute -top-[1.1rem] w-full h-[calc(100%+1.1rem)]  overflow-hidden">
          <Section2></Section2>
          <div className="absolute top-[43rem]">
            <BGStyless className="h-[21rem] lg:h-[90.6875rem] w-full mt-[4rem] ">
              <img src={OverMotoTour} alt="" className="h-full w-full" />
            </BGStyless>
          </div>
          <div className="w-[102.6875rem] h-[50.10013rem] opacity-15 absolute top-[15.61rem] ">
            <img src={Group} alt="" className="absolute bottom-10" />
          </div>
          <div className="absolute w-full">
            <div className="flex justify-center px-[3.39rem] lg:px-[17.25rem] ">
              <div className="w-[65rem] h-[46.3125rem] flex flex-col items-center gap-[4rem]">
                <div>
                  <img src={GroupMap} alt="" />
                </div>
                <div className="londrina_font w-full lg:w-[53.75rem] text-center">
                  Hong Hao Travel is a travel company in Ha Giang, we specialize
                  in organizing unforgettable tours to explore Ha Giang loop but
                  still focus on the pristine nature of nature.
                </div>
                <SpinStyless className="flex">
                  <AnimationSpin children=""></AnimationSpin>
                  <AnimationSpin></AnimationSpin>
                  <AnimationSpin status={2}>
                    <div>
                      <div>{UpText("Tour guide")}</div>
                      <div className="tracking-tight">
                        {UpText("with good English")}
                      </div>
                    </div>
                  </AnimationSpin>
                  <AnimationSpin children=""></AnimationSpin>
                  <AnimationSpin status={2}>
                    <div>
                      <div>{UpText("Unique")}</div>
                      <div> {UpText("Experiences")}</div>
                    </div>
                  </AnimationSpin>
                </SpinStyless>
              </div>
            </div>
            <div className="flex justify-center mt-[6.63rem]">
              <div className="flex flex-col items-center">
                <div className="trip_font font-semibold text-[0.875rem]">
                  EXPLORE YOUR JOURNEY WITH US
                </div>
                <div className="mt-[1.81rem]">
                  <ArrowBottom></ArrowBottom>
                </div>
              </div>
            </div>
            <div className="pl-[6.75rem] w-full h-[44.375rem] flex justify-between items-center ">
              <div className="w-1/2">
                <div className="content w-[38.8125rem] h-[30.375rem] text-left -mt-10">
                  <div className="londrina_font">HONG HAO MOTORBIKE TOUR</div>
                  <div className="trip_font text-[1rem] leading-[150%] tracking-[0.01rem] mt-[3.5rem] opacity-80">
                    Experience the raw beauty of Hà Giang with our immersive
                    travel adventures. From rugged mountain landscapes to
                    vibrant ethnic cultures, Hà Giang offers a truly unique and
                    authentic experience. Explore remote villages.
                  </div>
                  <div className="flex flex-col gap-[0.75rem] mt-[1rem]">
                    <FileldCheck></FileldCheck>
                    <FileldCheck>Flexible cancellation policy</FileldCheck>
                    <FileldCheck>Book now, pay later</FileldCheck>
                    <FileldCheck>Fluent English-speaking guides</FileldCheck>
                    <FileldCheck>
                      Creating job opportunities for the Vietnamese community
                    </FileldCheck>
                  </div>
                  <div className="flex items-center gap-x-4 mt-[2rem] ">
                    <button
                      type="button"
                      onClick={handleResetTrigger}
                      className="z-40 btn bg-[#DA4B19] py-[1rem] px-[2rem] rounded-lg flex justify-center items-center cursor-pointer group"
                    >
                      <div className="w-[4.88rem] h-[1.5rem] group-hover:w-[1rem] transition-all duration-500"></div>
                      <ArrowBtn></ArrowBtn>
                    </button>
                    <button
                      type="button"
                      onClick={handleResetTrigger1}
                      className="border-2 border-white py-[1rem] px-[2rem] rounded-lg flex justify-center items-center z-40 group"
                    >
                      <div className="w-[4.88rem] h-[1.5rem] group-hover:w-[1rem] transition-all duration-500"></div>
                      <ArrowBtn></ArrowBtn>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="h-[44rem] absolute -right-[9rem]"
                ref={refImgMotoTour}
              >
                <img src={BG_motobike_full} alt="" className="h-full w-full" />
              </div>
            </div>
            {/* BANNER */}
            <div className="w-full h-[48.75rem] relative">
              {/* video */}
              <div className="videoSec2 w-[53rem] absolute top-[20.96rem] left-[50%] translate-x-[-50%]">
                <div className="relative">
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full"
                    src={Video}
                  ></video>
                  <div
                    id="imgBgVideo"
                    className="absolute top-0 left-0 w-full h-full"
                  >
                    <img src={Section2ImgVideo} alt="" className="h-full" />
                  </div>
                </div>
              </div>
              <div
                id="webcome_hagiang"
                className="absolute top-0 left-[50%] translate-x-[-50%]"
              >
                <div>
                  <div className="trip_font opacity-40 font-bold text-[1.125rem] mb-[0.75rem] text-center">
                    WELCOME TO
                  </div>
                  <div className="londrina_font font-bold relative">
                    HA GIANG NATURALLY
                  </div>
                  <div className="flex justify-center -mt-11">
                    <img src={Beautiful} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section body mobie */}
      <MobiSection className="block lg:hidden relative bg-[#13341c] z-30 lg:z-auto">
        <div className="bg-white w-full h-[2.5rem]"></div>
        <img src={NuiMobie} alt="" className=" w-full h-full -mt-[4rem] z-10" />
        <img src={Group} alt="" className="absolute top-[8rem] opacity-40" />
        <div className=" absolute top-[6rem] left-[50%] translate-x-[-50%] w-full px-[1.7rem]">
          <img
            src={GroupMap}
            alt=""
            className="w-[4.5rem] h-[4.5rem] mx-auto"
          />
          <div className="londrina_font_mobi text-center text-[2.065rem] mt-[1.55rem]">
            Hong Hao Travel is a travel company in Ha Giang, we specialize in
            organizing unforgettable tours to explore Ha Giang loop but still
            focus on the pristine nature of nature.
          </div>
          <SpinStyless className="mt-[1.5rem]">
            <div className="flex">
              <AnimationSpin children=""></AnimationSpin>
              <AnimationSpin></AnimationSpin>
              <AnimationSpin status={2}>
                <div>
                  <div>{UpText("Tour guide")}</div>
                  <div className="tracking-tight">
                    {UpText("with good English")}
                  </div>
                </div>
              </AnimationSpin>
            </div>
            <div className="flex">
              <AnimationSpin children=""></AnimationSpin>
              <AnimationSpin status={2}>
                <div>
                  <div>{UpText("Unique")}</div>
                  <div> {UpText("Experiences")}</div>
                </div>
              </AnimationSpin>
            </div>
          </SpinStyless>
        </div>
        <OverRungNui className=" w-full px-[1.25rem] -mt-5 z-50">
          <div className="content text-left">
            <div className="trip_font text-[0.875rem] opacity-45 font-bold mb-5">
              START WITH
            </div>
            <div className="londrina_font_mobi text-[2.8rem]">
              HONG HAO MOTORBIKE TOUR
            </div>
            <div className="trip_font text-[0.875rem] leading-[150%] tracking-[0.01rem] mt-[2rem] opacity-80">
              Experience the raw beauty of Hà Giang with our immersive travel
              adventures. From rugged mountain landscapes to vibrant ethnic
              cultures, Hà Giang offers a truly unique and authentic experience.
              Explore remote villages.
            </div>
            <div className="flex flex-col gap-[0.75rem] mt-[1rem]">
              <FileldCheck></FileldCheck>
              <FileldCheck>Flexible cancellation policy</FileldCheck>
              <FileldCheck>Book now, pay later</FileldCheck>
              <FileldCheck>Fluent English-speaking guides</FileldCheck>
              <FileldCheck>
                Creating job opportunities for the Vietnamese community
              </FileldCheck>
            </div>
            <div className="flex items-center gap-x-4 mt-[2rem] ">
              <button
                type="button"
                onClick={handleResetTrigger}
                className="z-40 w-1/2 btn bg-[#DA4B19] py-[1rem] px-[2rem] rounded-lg flex justify-center items-center cursor-pointer group"
              >
                <div className="w-[4.88rem] h-[1.5rem] group-hover:w-[1rem] transition-all duration-500"></div>
                <ArrowBtn></ArrowBtn>
              </button>
              <button
                type="button"
                onClick={handleResetTrigger1}
                className="border-2 w-1/2 border-white py-[1rem] px-[2rem] rounded-lg flex justify-center items-center z-40 group"
              >
                <div className="w-[4.88rem] h-[1.5rem] group-hover:w-[1rem] transition-all duration-500"></div>
                <ArrowBtn></ArrowBtn>
              </button>
            </div>
          </div>
        </OverRungNui>
        <OverRungNui className="w-full h-[8.25rem] mt-[2.64rem] text-center ">
          <div className="text-[0.46638rem] trip_font opacity-40 font-bold">
            WELCOME TO
          </div>
          <div className="londrina_font_mobi text-[1.451rem] font-bold mt-[0.31rem] relative">
            HA GIANG NATURALLY
          </div>
          <div className="flex justify-center -mt-[1.15rem]">
            <img src={Beautiful} alt="" className="w-[10rem]" />
          </div>
          <img
            src={Section2ImgVideo}
            alt=""
            className="h-[6.98775rem] w-[12.42269rem] mx-auto mt-2"
          />
        </OverRungNui>
        <div className="w-full h-[4.25rem] mt-[2.64rem] text-center bg-white"></div>
      </MobiSection>
    </>
  );
};

export default Section2UI;

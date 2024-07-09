import React, { useEffect, useRef, useState } from "react";
import { ArrowBigTopBtn, ArrowBottom, ArrowBtn } from "../../assets/icon";
import {
  BG,
  Group,
  GroupMap,
  circle,
  Beautiful,
  Video,
  Map_2day_3night,
  HaGiangTour2,
  HaGiangTour3,
  HaGiangTour4,
  HaGiangTour5,
  BG_Footer,
  Weather,
  Vector,
  Polygon,
  OverMotoTour,
  BG_motobike_full,
  Section2ImgVideo,
  PhoneContact,
  Bars,
} from "../../assets/img";
import Header from "../Layout/Header";
import styled from "styled-components";
import Section2 from "../../assets/icon/Section2";
import { CardContent, CardWeather } from "../card";
import Footer from "../Layout/Footer";
import BannerTop from "../Layout/BannerTop";
import Menu from "../Layout/Menu";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SlideFooter from "../Layout/SlideFooter";
import { FieldLayout, FileldCheck } from "../field";
gsap.registerPlugin(ScrollTrigger);

const BGStyless = styled.div`
  background: url(${BG}) lightgray 100% / cover no-repeat;
  background-color: #122718;
`;
// const BgFooterStyless = styled.div`
//   background: url(${Group}) lightgray 100% / cover no-repeat;
// `;
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
const HomePage = () => {
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
  const [tgMenu, setTgMenu] = useState(false);

  const handleOpenMenu = () => {
    setTgMenu(true);
  };

  const handleCloseMenu = () => {
    setTgMenu(false);
  };
  useEffect(() => {
    const className = "overflow-y-hidden";
    const element = window.document.querySelector("body");
    if (tgMenu) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [tgMenu]);
  return (
    <div className="flex justify-center ">
      <FieldLayout className="relative">
        <BannerTop></BannerTop>

        <div className="absolute top-0 lg:top-0 w-[30rem] lg:w-0">
          <img src={Bars} alt="" className="w-full object-cover lg:hidden" />
          <div className="-mt-5 lg:mt-0">
            <Header handleOpenMenu={handleOpenMenu}></Header>
          </div>
        </div>
        <div
          onClick={handleCloseMenu}
          className={`absolute top-0 left-0 bg-black ${
            tgMenu ? "opacity-45 " : "opacity-0 pointer-events-none"
          } h-full w-full transition-all duration-700`}
        ></div>
        <Menu handleCloseMenu={handleCloseMenu} tgMenu={tgMenu}></Menu>
        {/* section 2 */}
        <div
          className={`h-[160.458rem] w-full relative bg-[#122718] ${
            tgMenu ? "pointer-events-none" : ""
          }`}
        >
          <div className="absolute -top-[1.1rem] w-full h-[calc(100%+1.1rem)]  overflow-hidden">
            <Section2></Section2>
            <div className="absolute top-[43rem]">
              <BGStyless className=" h-[90.6875rem] w-full mt-[4rem] ">
                <img src={OverMotoTour} alt="" className="h-full w-full" />
              </BGStyless>
            </div>
            <div className="w-[102.6875rem] h-[50.10013rem] opacity-15 absolute top-[15.61rem] ">
              <img src={Group} alt="" className="absolute bottom-10" />
            </div>
            <div className="absolute w-full">
              <div className="flex justify-center px-[17.25rem] ">
                <div className="w-[65rem] h-[46.3125rem] flex flex-col items-center gap-[4rem]">
                  <div>
                    <img src={GroupMap} alt="" />
                  </div>
                  <div className="londrina_font w-[53.75rem] text-center">
                    Hong Hao Travel is a travel company in Ha Giang, we
                    specialize in organizing unforgettable tours to explore Ha
                    Giang loop but still focus on the pristine nature of nature.
                  </div>
                  <SpinStyless className="flex">
                    <AnimationSpin children=""></AnimationSpin>
                    <AnimationSpin></AnimationSpin>
                    <AnimationSpin status={2}>
                      <div>
                        <div>{UpText("Tour guide")}</div>
                        <div className="tracking-tight">
                          {" "}
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
                      vibrant ethnic cultures, Hà Giang offers a truly unique
                      and authentic experience. Explore remote villages.
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
                  <img
                    src={BG_motobike_full}
                    alt=""
                    className="h-full w-full"
                  />
                </div>
              </div>
              {/* BANNER */}
              <div className="w-full h-[48.75rem] relative">
                {/* video */}
                <div className="videoSec2 w-[53rem] absolute top-[18.96rem] left-[50%] translate-x-[-50%]">
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
                <div className="absolute top-0 left-[50%] translate-x-[-50%]">
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
        <div className="w-full bg-white relative">
          <div className="flex">
            <div className="w-1/2 ">
              <div className="sticky top-0">
                <div className="londrina_font pl-[5rem] pt-[5.63rem]">
                  <span className="text-[#262626]">BEST TRIPS FOR YOU </span>
                </div>
                <div className=" w-[29.29231rem] h-[28.12494rem] ml-[6.79rem] mt-[2.44rem] mb-[10.2rem]">
                  <img src={Map_2day_3night} alt="" />
                </div>
              </div>
            </div>
            <div className="w-1/2 pt-[3.31rem] mr-[6.5rem] flex flex-col gap-[2rem]  ">
              <CardContent></CardContent>
              <CardContent img={HaGiangTour2}></CardContent>
              <CardContent img={HaGiangTour3}></CardContent>
              <CardContent img={HaGiangTour4}></CardContent>
              <CardContent img={HaGiangTour5}></CardContent>
              <div className="w-[47.3125rem] h-[34.375rem] "></div>
            </div>
          </div>
          {/* BG WEATHER FOOTER */}
          <SlideFooter></SlideFooter>
          {/* FOOTER */}
          <Footer></Footer>
        </div>
        <div className="fixed top-[34.75rem] right-[1.33rem]  lg:right-[10.33rem]">
          <div className="flex flex-col justify-center items-center gap-[1rem]">
            <div
              className="bg-[#E64827] w-[3.125rem] h-[3.125rem]
            font-extrabold
            rounded-full text-center flex justify-center items-center trip_font text-[0.625rem]"
            >
              BOOK NOW
            </div>
            <div className="ml-2">
              <img src={PhoneContact} alt="" />
            </div>
            <div
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="cursor-pointer"
            >
              <ArrowBigTopBtn></ArrowBigTopBtn>
            </div>
          </div>
        </div>
      </FieldLayout>
    </div>
  );
};
export function AnimationSpin({ children = "PERSONALIZATION", status = 1 }) {
  return (
    <div className="group relative">
      <img
        src={circle}
        alt=""
        className="img_spin group-hover:opacity-0 transition-all duration-100"
      />
      <div className="h-full w-full scale-90 opacity-0 group-hover:opacity-100  bg-[#DA4B19] rounded-full absolute top-0 group-hover:scale-105 transition-all duration-500 z-0 border-2 border-dashed flex justify-center items-center"></div>

      <div
        className={`txt overflow-hidden text-[0.875rem] font-bold w-[10rem] ${
          status == 1 ? "h-[1.5rem]" : "h-[2.5rem]"
        } trip_font absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-500`}
      >
        <div
          className={`span1 relative ${
            status == 1 ? "group-hover:-top-5" : "group-hover:-top-10"
          }  top-0 transition-all duration-500  text-center`}
        >
          {children}
        </div>
        <div
          className={`span2  ${
            status == 1
              ? " group-hover:top-0 absolute"
              : "group-hover:-top-10 relative"
          } top-10 left-[50%] flex-shrink-0 translate-x-[-50%] transition-all duration-500  text-center`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
export default HomePage;

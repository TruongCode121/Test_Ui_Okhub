import React, { useEffect, useRef, useState } from "react";
import {
  ArrowBigTopBtn,
  ArrowBottom,
  ArrowBtn,
  ArrowLeft,
  ArrowRightUp,
  CaretDown,
} from "../../assets/icon";
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
  NuiMobie,
  OverMotoTourMobi,
  BG_Mountain,
  BGMobiMenu,
  Close,
  Logo,
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
import Section2UI from "../Layout/Section2UI";
gsap.registerPlugin(ScrollTrigger);

const BgMenuMobi = styled.div`
  background: linear-gradient(
      180deg,
      #122718 0%,
      rgba(18, 39, 24, 0) 35%,
      rgba(18, 39, 24, 0) 70%,
      #122718 100%
    ),
    url(${BGMobiMenu}) lightgray 50% / cover no-repeat;
  background-color: #1a543a;
`;
const ULMenuStyle = styled.div`
  list-style-type: none;

  li {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  li:last-child {
    border-bottom: 0;
  }
  .borderTop {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
  .item {
    width: 50%;
    /* background-color: aquamarine; */
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0 8px;
  }
  .sub_menu {
    /* background-color: antiquewhite; */
    margin-top: 1rem;
    li {
      padding: 1.125rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      font-weight: 500;
      opacity: 0.5;
      cursor: pointer;
    }
    li:first-child {
      opacity: 1;
    }
    li:last-child {
      border-bottom: 0;
      padding: 1.25rem 0 0;
    }
  }
`;
const HomePage = () => {
  const [tgMenu, setTgMenu] = useState(false);
  const [tgSubMenu, setTgSubMenu] = useState(false);
  const handleOpenSubMenu = () => {
    setTgSubMenu(true);
  };
  const handleCloseSubMenu = () => {
    setTgSubMenu(false);
  };
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

        <div className="absolute top-0 lg:top-0 w-full lg:w-0">
          <img src={Bars} alt="" className="w-full object-cover lg:hidden" />
          <div className="-mt-5 lg:mt-0">
            <Header handleOpenMenu={handleOpenMenu}></Header>
          </div>
        </div>
        <Menu handleCloseMenu={handleCloseMenu} tgMenu={tgMenu}></Menu>
        {/* section 2 pc */}
        <Section2UI tgMenu={tgMenu}></Section2UI>
        {/* menu mobi */}
        <BgMenuMobi
          className={`z-40 lg:hidden bg-red-500 overflow-y-auto  px-[1.25rem] h-[82.44144rem] w-full absolute top-0 bottom-0 transition-all duration-500 ${
            tgMenu ? "" : "translate-y-[-100%]"
          }`}
        >
          <div className="flex justify-between mt-[3.41rem]">
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className={`cursor-pointer`} onClick={handleCloseMenu}>
              <img src={Close} alt="" />
            </div>
          </div>
          <div className="mt-[4rem]">
            <ULMenuStyle className="trip_font text-[2rem] font-bold w-full">
              <LiMenu>Home</LiMenu>
              <LiMenu>About Us</LiMenu>
              <div
                className={`${
                  tgSubMenu
                    ? "h-[12.7rem] opacity-100"
                    : "h-0 opacity-0 pointer-events-none"
                } transition-all duration-700 w-[11.3rem]`}
              >
                <div
                  className="flex items-center gap-x-2 cursor-pointer"
                  onClick={handleCloseSubMenu}
                >
                  <div className="">
                    <ArrowLeft color="#CF4124"></ArrowLeft>
                  </div>
                  <div className="text-[#CF4124]">Tours</div>

                  <div className="">
                    <ArrowRightUp></ArrowRightUp>
                  </div>
                </div>
                <div
                  className={`w-full  ${
                    tgSubMenu
                      ? "opacity-100 h-[10.3rem]"
                      : "opacity-0 h-[0.3rem]"
                  } transition-all duration-700`}
                >
                  <ul className="sub_menu trip_font text-[1.25rem]">
                    <li>Best Budget</li>
                    <li>Standard</li>
                    <li>Premium</li>
                  </ul>
                </div>
              </div>
              <LiMenu
                stt={2}
                onClick={handleOpenSubMenu}
                className={`${
                  tgSubMenu ? "opacity-0 pointer-events-none" : "opacity-100"
                } transition-all duration-500`}
              >
                Tours
              </LiMenu>
              <LiMenu className={`${tgSubMenu ? "borderTop" : "opacity-100"} `}>
                Activity
              </LiMenu>
              <LiMenu>Destination</LiMenu>
              <LiMenu>Blog</LiMenu>
              <LiMenu>FAQ</LiMenu>
              <LiMenu>Contact</LiMenu>
            </ULMenuStyle>
          </div>
        </BgMenuMobi>

        <div className="w-full bg-white relative z-30 lg:z-auto">
          <div className="lg:flex">
            <div className="lg:w-1/2 ">
              <div className="sticky top-0">
                <div className="londrina_font pl-[1.5rem] lg:pl-[5rem] pt-[5.63rem]">
                  <span className="text-[#262626]">BEST TRIPS FOR YOU </span>
                </div>
                <div className=" hidden lg:inline-block w-[29.29231rem] h-[28.12494rem] ml-[6.79rem] mt-[2.44rem] ">
                  <img src={Map_2day_3night} alt="" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 pt-[3.31rem] mr-[6.5rem] flex flex-col gap-[2rem]  ">
              <CardContent></CardContent>
              <CardContent img={HaGiangTour2}></CardContent>
              <CardContent img={HaGiangTour3}></CardContent>
              <CardContent img={HaGiangTour4}></CardContent>
              <CardContent img={HaGiangTour5}></CardContent>
              <div className="w-[47.3125rem] h-[34.375rem] lg:block hidden"></div>
            </div>
          </div>
          {/* BG WEATHER FOOTER */}
          <SlideFooter></SlideFooter>
          {/* FOOTER */}
          <Footer></Footer>
        </div>
      </FieldLayout>
      <div className="fixed top-[34.55rem] right-[0.5rem] z-50 lg:hidden block">
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
    </div>
  );
};
export function LiMenu({
  children = "Home",
  stt = 1,
  className,
  onClick = () => {},
}) {
  return (
    <>
      <li
        className={` h-[3.8rem] lg:h-[3.375rem] mt-[0.825rem] pb-[1rem] ${className}`}
      >
        <div className="item group cursor-pointer " onClick={onClick}>
          <div className="arrow_right group-hover:opacity-100 opacity-0 transition-all duration-500">
            <ArrowLeft></ArrowLeft>
          </div>
          <div className=" group-hover:translate-x-0 translate-x-[-1.35rem] transition-all duration-700">
            {children}
          </div>
          {stt == 1 ? (
            ""
          ) : (
            <div className="group-hover:opacity-0 opacity-100 -ml-[1.5rem] transition-all duration-500">
              <CaretDown></CaretDown>
            </div>
          )}
        </div>
      </li>
    </>
  );
}
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

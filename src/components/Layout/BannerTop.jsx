import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import {
  ArrowBigTopBtn,
  ArrowBtomTop,
  ArrowTopTop,
  Ellipse1999,
  Line388,
} from "../../assets/icon";
import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  bg_banner,
  BG_Footer,
  BG_Mountain,
  Location,
  Logo,
  MapBannerSvg,
  MapSlide1,
  MapSlide2,
  MapSlide3,
  MapSlide4,
  MenuRight,
  PhoneContact,
  Property_1,
} from "../../assets/img";
import MapInBannerSVG from "../../assets/img/banner_top/MapInBannerSVG.svg";
const BannerStyless = styled.div`
  opacity: 0.09;
  background: linear-gradient(
      0deg,
      rgba(15, 73, 43, 0.2) 0%,
      rgba(15, 73, 43, 0.2) 100%
    ),
    url(${bg_banner}) lightgray -37.28px -1532.253px / 103.142% 314.078%
      no-repeat;
  @media only screen and (max-width: 640px) {
    background: linear-gradient(
        0deg,
        rgba(15, 73, 43, 0.2) 0%,
        rgba(15, 73, 43, 0.2) 100%
      ),
      url(${bg_banner}) lightgray -10.28px -1132.253px / 103.142% 314.078%
        no-repeat;
  }
`;
const DiscoverStyless = styled.div`
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 131.51%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const BlurRightStyless = styled.div`
  background: linear-gradient(90deg, rgba(89, 131, 75, 0) 20%, #071e00 100%);
`;
const BannerTop = () => {
  const [selectMapImg, setSelectMapImg] = useState(0);
  const [mapImgData, setMapImgData] = useState([
    MapSlide1,
    MapSlide2,
    MapSlide3,
    MapSlide4,
  ]);
  const [selectImgBanner, setSelectImgBanner] = useState(0);
  const [imgDataBanner, setImgDataBanner] = useState([
    Banner1,
    Banner2,
    Banner3,
    Banner4,
    BG_Footer,
  ]);
  const [onLeave, setOnLeave] = useState(false);
  const [hoverMove, setHoverMove] = useState(0);
  const [continueSlide, setContinueSlide] = useState(false);
  const [onScaleImg, setOnScaleImg] = useState(false);

  useEffect(() => {
    if (continueSlide == false) {
      setTimeout(() => {
        setSelectMapImg(selectMapImg < 2 ? selectMapImg + 1 : 0);
      }, 6000);
    } else {
      setSelectMapImg(0);
    }
    // return () => {
    //   if (selectMapImg == 8) {
    //     clearTimeout(
    //       setTimeout(() => {
    //         setSelectMapImg(8);
    //       }, 6000)
    //     );
    //   }
    // };
  }, [selectMapImg]);
  useEffect(() => {
    if (onScaleImg) {
      setTimeout(() => {
        setSelectImgBanner(selectImgBanner < 4 ? selectImgBanner + 1 : 4);
      }, 6000);
    } else {
      setSelectImgBanner(0);
    }
    return () => {
      if (selectImgBanner == 4) {
        clearTimeout(
          setTimeout(() => {
            setSelectImgBanner(4);
          }, 6000)
        );
      }
    };
  }, [selectImgBanner, onScaleImg]);
  const handleMouseLeave = () => {
    setOnLeave(true);
    setHoverMove(0);
  };
  const handleMouseMove = () => {
    if (continueSlide) return;
    setTimeout(() => {
      setHoverMove(hoverMove + 1);
    }, 1000);
  };
  const handleResetSlider = () => {
    if (selectImgBanner == 4) {
      window.location.reload();
    }
  };
  useEffect(() => {
    if (onLeave || hoverMove > 0) {
      setTimeout(() => {
        setContinueSlide(true);
      }, 5500);
    }
  }, [onLeave, hoverMove]);
  useEffect(() => {
    if (continueSlide) {
      setTimeout(() => {
        setOnScaleImg(true);
      }, 3000);
    }
  }, [continueSlide]);
  console.log({
    hoverMove,
    onLeave,
    continueSlide,
    onScaleImg,
    selectImgBanner,
    selectMapImg,
  });
  // console.log({ onScaleImg });
  return (
    <div className="sticky top-0 w-full z-0">
      <div
        className="bg-[#206545] relative w-full h-[34.375rem] lg:h-[788px] overflow-hidden"
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={handleResetSlider}
      >
        <BannerStyless className="h-full w-full"></BannerStyless>

        <div className="absolute top-[7.68rem] left-[50%] translate-x-[-50%] lg:translate-x-0 lg:top-[9.44rem] lg:left-[32.5rem]">
          <div className="relative">
            {/* map hình ban đầu */}
            <div
              className={`${
                onLeave || hoverMove > 0 ? "opacity-0" : "opacity-100"
              } transition-all duration-[2000ms]`}
            >
              {mapImgData.map((item, index) => {
                if (selectMapImg == index) {
                  return (
                    <div
                      key={index + 10}
                      className={`${
                        selectMapImg == index ? "opacity-100" : "opacity-30"
                      }  duration-[3000ms] transition-all`}
                    >
                      <img src={item} alt="" />
                    </div>
                  );
                }
              })}
            </div>
            {/* map hình sau khi hover */}
            <div
              className={`absolute top-0 ${
                onLeave || hoverMove > 0 ? "opacity-100" : "opacity-0"
              } transition-all duration-[2000ms]`}
            >
              <img
                src={MapSlide4}
                alt=""
                className={`${
                  continueSlide ? "scale-[11]" : ""
                } transition-all duration-[3500ms]`}
              />
            </div>
          </div>
        </div>
        {/* Tittle */}
        <div
          className={` hidden lg:block absolute w-full left-[50%]  ${
            continueSlide ? "-top-[15rem]" : "top-[50%]"
          }  translate-x-[-50%] translate-y-[-50%] text-center transition-all duration-[3000ms]`}
        >
          <div className="  trip_font text-[1rem] opacity-40 font-bold ">
            GET READY
          </div>
          <div className="relative ">
            <DiscoverStyless
              className={`trip_font mt-[0.75rem] ${
                onLeave || hoverMove > 0 ? "opacity-0" : "opacity-100"
              } transition-all duration-[2000ms] `}
            >
              <div className={`text-center text-[5rem] leading-[100%]`}>
                <div>DISCOVER</div>
                <div>HA GIANG LOOP</div>
              </div>
            </DiscoverStyless>
            <DiscoverStyless
              className={`absolute w-full top-[-1rem] trip_font mt-[0.75rem]  ${
                onLeave || hoverMove > 0 ? "opacity-100" : "opacity-0"
              } transition-all duration-[2000ms] `}
            >
              <div
                className={`text-center text-[6rem] leading-[100%] font-[800] tracking-tighter`}
              >
                <div>DISCOVER</div>
                <div>HA GIANG LOOP</div>
              </div>
            </DiscoverStyless>
          </div>
        </div>
        <div className=" w-full">
          <div
            className={`lg:inline-block hidden absolute ${
              continueSlide
                ? `${
                    onScaleImg
                      ? "lg:scale-[2.05] lg:w-[50%] bottom-0 lg:bottom-[24%]  lg:translate-x-[50%]"
                      : " lg:w-[50%] lg:bottom-[18%] lg:scale-125 lg:translate-x-[50%]"
                  }`
                : " translate-y-[100%]  lg:translate-y-[90%]  scale-75 lg:translate-x-[50%]"
            } transition-all duration-[2700ms]`}
          >
            {imgDataBanner.map((item, index) => (
              <div
                key={index + 10}
                className={`hidden lg:inline-block ${
                  selectImgBanner == index ? "opacity-100" : "opacity-30"
                }  duration-[3000ms] transition-opacity`}
              >
                <img
                  src={selectImgBanner == index ? item : ""}
                  alt=""
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          {/* mobie */}
          <div
            className={`block lg:hidden absolute ${
              continueSlide
                ? `${
                    onScaleImg
                      ? "scale-y-[3] w-full bottom-[29%]  lg:translate-x-[50%]"
                      : "w-full bottom-[18%] scale-x-50 scale-y-100 lg:translate-x-[50%]"
                  }`
                : "translate-y-[90%]  scale-x-50 scale-y-100 lg:translate-x-[50%]"
            } transition-all duration-[2700ms]`}
          >
            {/* <img src={imgDataBanner[selectImgBanner]} alt="" /> */}
            {imgDataBanner.map((item, index) => {
              if (selectImgBanner == index) {
                return (
                  <div
                    key={index + 10}
                    className={`${
                      selectImgBanner == index ? "opacity-100" : "opacity-30"
                    }  duration-[1000ms] transition-opacity`}
                  >
                    <img src={item} alt="" className="object-cover" />
                  </div>
                );
              }
            })}
          </div>
        </div>
        {/* map and blur right - onScaleImg == true */}
        <BlurRightStyless
          className={` hidden lg:inline-block absolute top-0  h-full w-[30rem] ${
            onScaleImg ? "right-0" : "-right-[50%]"
          } transition-all duration-[2500ms]`}
        ></BlurRightStyless>
        <div
          className={`hidden lg:inline-block absolute  top-[50%] translate-y-[-50%] w-[20.5rem] h-[25.625rem] ${
            onScaleImg ? "right-[3rem]" : "-right-[50%]"
          } transition-all duration-[2500ms]`}
        >
          <div className="relative">
            <img
              src={MapInBannerSVG}
              alt=""
              className="w-[20.5rem] h-[25.625rem] "
            />
            {/* ${
                selectImgBanner == 1
                  ? "top-[8rem] right-[7rem] "
                  : "top-[10rem] right-[7rem] opacity-0"
              } */}
            {/*4 top-[9.25rem] right-[6.75rem] */}
            {/*1 top-[7.625rem] right-[6.6rem] */}
            {/*2  top-[8.5rem] right-[4.5rem] */}
            {/*3 top-[13.75rem] right-[6.75rem] */}
            <img
              src={Location}
              alt=""
              className={`absolute transition-all duration-[2000ms] ${
                selectImgBanner == 1
                  ? "top-[7.625rem] right-[6.6rem] opacity-100"
                  : selectImgBanner == 2
                  ? "top-[8.5rem] right-[4.5rem]"
                  : selectImgBanner == 3
                  ? "top-[13.75rem] right-[6.75rem]"
                  : selectImgBanner == 4
                  ? "top-[7.625rem] right-[6.6rem]"
                  : "top-[9.25rem] right-[6.75rem] opacity-0"
              } w-6`}
            />
          </div>
        </div>
        <div
          className={`hidden lg:inline-block  absolute  transition-all duration-[700ms] ${
            continueSlide ? "opacity-0" : ""
          } top-[50%] rotate-90 trip_font text-[12px] tracking-[0.2px] font-semibold`}
        >
          Hong Hao Travel
        </div>
        <div className=" hidden lg:block absolute top-[33.55rem] right-[1.5rem] ">
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
        <div className=" hidden lg:inline-block absolute top-[40.87rem] left-[22.79rem]">
          <div className=" bg-white w-[55rem] h-[6.5rem] pl-[2rem] pr-[0.75rem] py-[0.75rem] rounded-xl flex items-center gap-x-[1.5rem]">
            <ItemTextLayout></ItemTextLayout>
            <Line388></Line388>
            <ItemTextLayout
              textTop="TYPE OF TOUR"
              textBottom="Best Budget"
              wid="w-[8.75rem]"
            ></ItemTextLayout>
            <Line388></Line388>
            <ItemTextLayout
              textTop="SELF DRIVING"
              textBottom="5 pax"
              stt={2}
              wid="w-[7.5rem]"
            ></ItemTextLayout>
            <Line388></Line388>
            <ItemTextLayout
              textTop="PRIVATE DRIVING"
              textBottom="5 pax"
              stt={2}
              wid="w-[7.5rem]"
            ></ItemTextLayout>
            <div className="bg-[#E64827] rounded-lg px-[1.5rem] py-[0.75rem] flex-shrink-0 text-center font-bold trip_font">
              <div className="text-[1.75rem] ">$299</div>
              <div className="text-[0.875rem] tracking-[0.00875rem]">
                BOOK NOW
              </div>
            </div>
          </div>
        </div>

        {/* 3 chấm tròn */}
        <div
          className={`hidden lg:inline-block absolute top-[24.44rem] transition-all duration-[2000ms] ${
            onLeave || hoverMove > 0
              ? `${continueSlide ? "-left-[3rem]" : "left-[6.45rem] "}`
              : "left-[23.75rem]"
          }`}
        >
          <Ellipse1999></Ellipse1999>
        </div>
        <div
          className={`hidden lg:inline-block  absolute  left-[49.69rem] ${
            onLeave || hoverMove > 0
              ? `${continueSlide == false ? "top-[4rem]" : "-top-[3rem]"}`
              : "top-[12.19rem]"
          } transition-all duration-[2000ms]`}
        >
          <Ellipse1999></Ellipse1999>
        </div>
        <div
          className={`hidden lg:inline-block  absolute top-[24.44rem]  transition-all duration-[2000ms] ${
            onLeave || hoverMove > 0
              ? `${
                  continueSlide == false ? "right-[5.25rem]" : "-right-[3rem]"
                }`
              : "right-[22.75rem]"
          }`}
        >
          <Ellipse1999></Ellipse1999>
        </div>
      </div>
    </div>
  );
};

export function ItemTextLayout({
  textTop = "DAYS",
  textBottom = "5 days 4 night",
  stt = 1,
  wid = "w-[10rem]",
}) {
  return (
    <div className={`${wid}`}>
      <div className="text-[#727272] text-[0.75rem]">{textTop}</div>
      <div className="flex items-center justify-between">
        <div className="trip_font font-bold ">
          <span className="text-[#2E2E2E]">{textBottom}</span>
        </div>
        {stt == 1 ? (
          <ArrowBtomTop></ArrowBtomTop>
        ) : (
          <div className="flex flex-col justify-center gap-2">
            <ArrowTopTop></ArrowTopTop>
            <ArrowBtomTop></ArrowBtomTop>
          </div>
        )}
      </div>
    </div>
  );
}
export default BannerTop;

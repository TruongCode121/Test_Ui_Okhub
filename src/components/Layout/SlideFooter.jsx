import React, { useEffect, useRef, useState } from "react";
import ArrowNextSlide from "../../assets/icon/footer/ArrowNextSlide";
import ArrowPrevSlide from "../../assets/icon/footer/ArrowPrevSlide";
import {
  BG_Footer,
  Polygon,
  Slide1,
  Slide10,
  Slide11,
  Slide12,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Vector,
  Weather,
} from "../../assets/img";
const textCardSlide = [
  "JAN",
  "FED",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

import { CardWeather } from "../card";

const SlideFooter = () => {
  const [selectSlide, setSelectSlide] = useState(2);
  //     const [absoluteItem, setAbsoluteItem] = useState(19.3);

  const [slideData, setSlideData] = useState([
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    Slide9,
    Slide10,
    Slide11,
    Slide12,
  ]);
  const handlePrevSlide = () => {
    setSelectSlide((prev) => (prev == 0 ? 11 : prev - 1));
  };
  const handleNextSlide = () => {
    setSelectSlide((next) => (next == 11 ? 0 : next + 1));
  };
  const handleChooseCardSlide = (numIdx) => {
    setSelectSlide(numIdx);
  };
  return (
    <div className=" relative pt-[3.31rem]">
      <div className=" flex justify-center">
        <div className="relative">
          <img src={slideData[selectSlide]} alt="" />
          <div className="absolute top-[2rem] left-[2rem]">
            <div className="w-[9.375rem] h-[9.375rem] flex-shrink-0 flex flex-col items-center rounded-[0.711156rem] bg-[rgba(255,255,255,0.2)] backdrop-blur-[5px]">
              <div className="trip_font text-[2rem] font-bold drop-shadow-xl mt-[0.75rem]">
                24°C
              </div>
              <div className="-mt-10 -ml-10 ">
                <img src={Weather} alt="" />
              </div>
              <div className="trip_font text-[1.125rem] drop-shadow-lg opacity-90 -mt-[3.5rem]">
                19/3
              </div>
            </div>
          </div>
          <div className="absolute top-[34.13rem] left-[3.75rem]">
            <img src={Vector} alt="" />
          </div>

          <div
            className={`absolute transition-all duration-500 top-[32.13rem]
           ${
             selectSlide == 0
               ? "left-[5.3rem]"
               : selectSlide == 1
               ? "left-[12.3rem]"
               : selectSlide == 2
               ? "left-[19.3rem]"
               : selectSlide == 3
               ? "left-[26.3rem]"
               : selectSlide == 4
               ? "left-[33.5rem]"
               : selectSlide == 5
               ? "left-[40.5rem]"
               : selectSlide == 6
               ? "left-[47.5rem]"
               : selectSlide == 7
               ? "left-[54.5rem]"
               : selectSlide == 8
               ? "left-[61.5rem]"
               : selectSlide == 9
               ? "left-[68.5rem]"
               : selectSlide == 10
               ? "left-[75.5rem]"
               : selectSlide == 11
               ? "left-[82.6rem]"
               : "left-[19.3rem]"
           }
          `}
          >
            <div className="flex items-center flex-col">
              <div className="trip_font font-bold text-[1rem]">Now</div>
              <img src={Polygon} alt="" />
            </div>
          </div>
          <div className="absolute bottom-[1.62rem] left-[3.75rem]">
            <div className="grid grid-cols-12 gap-[1.78rem]">
              {textCardSlide.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer "
                  onClick={() => {
                    handleChooseCardSlide(index);
                  }}
                >
                  <CardWeather className={selectSlide == index ? "active" : ""}>
                    {item}
                  </CardWeather>
                </div>
              ))}
            </div>
          </div>
          <div
            className="absolute top-[20.81rem] left-[4.38rem] cursor-pointer select-none"
            onClick={handlePrevSlide}
          >
            <ArrowPrevSlide></ArrowPrevSlide>
          </div>
          <div
            className="absolute top-[20.81rem] right-[4.37rem] cursor-pointer select-none"
            onClick={handleNextSlide}
          >
            <ArrowNextSlide></ArrowNextSlide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideFooter;
